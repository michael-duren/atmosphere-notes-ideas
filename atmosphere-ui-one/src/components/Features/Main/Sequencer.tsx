import { Fragment, useEffect, useRef, useState } from 'react';
import Track from '../../Ui/Tracks/Tracks';
import { useAppSelector } from '../../../store/hooks';
import { KitState } from '../../../store/pattern/pattern';
import { selectPattern } from '../../../store/pattern/pattern';
import * as Tone from 'tone';
import { Drum } from '../../../models/kit';

interface SequencerProps {
  steps: number;
}

const NOTE = 'C2' as const;

export default function Sequencer({ steps }: SequencerProps) {
  const pattern = useAppSelector(selectPattern);
  const patternArr = Object.keys(pattern).map(
    (key) => pattern[key as keyof KitState]
  );
  const tracks = useAppSelector(selectPattern);
  const trackArr = Object.keys(tracks).map(
    (track) => tracks[track as keyof KitState]
  );
  const trackRef = useRef<Drum[]>([]);
  const seqRef = useRef<Tone.Sequence | null>(null);
  const stepsRef = useRef<HTMLInputElement[][]>([]);
  const stepsIds = Array.from({ length: 16 }).map((_, i) => i);

  const [isPlaying, setIsPlaying] = useState(false);

  // handlers
  const handleTransport = async () => {
    console.log('handleTransport');
    if (Tone.Transport.state === 'started') {
      Tone.Transport.stop();
      setIsPlaying(false);
    } else {
      await Tone.start();
      Tone.Transport.start();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    trackRef.current = trackArr.map((track, i) => {
      return {
        ...track,
        id: i,
        sampler: new Tone.Sampler({
          urls: {
            [NOTE]: track.sound,
          },
        }).toDestination(),
      };
    });
    console.log(trackRef.current);

    seqRef.current = new Tone.Sequence(
      (time, step) => {
        trackRef.current.forEach((track) => {
          if (stepsRef.current[track.id][step].checked) {
            console.log('TRIGGERED');
            track.sampler?.triggerAttack(NOTE, time);
          }
        });
      },
      [...stepsIds],
      '16n'
    ).start(0);

    return () => {
      seqRef.current?.dispose();
      trackRef.current.forEach((track) => {
        track.sampler?.dispose();
      });
    };
  }, [steps]);

  return (
    <div className="flex flex-col w-[60rem] bg-black p-4 bg-opacity-30  gap-4 justify-center">
      <button onClick={handleTransport}>{isPlaying ? 'PAUSE' : 'START'}</button>
      <h2 className="font-caps text-3xl">SEQUENCER</h2>
      <div className="grid grid-rows-4 gap-4">
        {patternArr.map((instrument, index) => {
          return (
            <Fragment key={index}>
              <Track
                instrument={instrument}
                stepsRef={stepsRef}
                index={index}
              />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
