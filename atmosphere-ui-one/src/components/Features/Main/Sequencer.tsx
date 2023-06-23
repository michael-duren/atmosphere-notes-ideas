import { Fragment, useEffect, useRef, useState } from 'react';
import Track from '../../Ui/Track/Track';
import { useAppSelector } from '../../../store/hooks';
import { KitState } from '../../../store/slices/pattern';
import { selectPattern } from '../../../store/slices/pattern';
import * as Tone from 'tone';
import { Drum } from '../../../models/kit';
import { current } from '@reduxjs/toolkit';

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
  const lampRef = useRef<HTMLInputElement[]>([]);
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

    seqRef.current = new Tone.Sequence(
      (time, step) => {
        trackRef.current.forEach((track) => {
          if (stepsRef.current[track.id][step].checked) {
            track.sampler?.triggerAttack(NOTE, time);
          }
          lampRef.current[step].checked = true;
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
    <div className="flex min-w-[60vw] flex-col rounded-2xl p-8  bg-dark-transparent  gap-4 justify-center">
      <h2 className="font-caps text-3xl">SEQUENCER</h2>
      <div className="grid grid-rows-4 gap-5">
        <div className="flex gap-x-4">
          <div className="w-10"></div>
          {stepsIds.map((step, i) => {
            const isDivisibleByFour = (step + 1) % 4 === 0 || step + 1 === 16;
            return (
              <label
                className={`flex max-w-[2.5rem]  w-10 h-10 items-center ${
                  isDivisibleByFour && 'mr-4'
                } justify-center`}
                key={step}
              >
                <input
                  type="radio"
                  name="lamp"
                  id={`lamp-${step}`}
                  disabled
                  ref={(elm) => {
                    if (!elm) return;
                    lampRef.current[step] = elm;
                  }}
                  className={`whitespace-nowrap peer p-0 m-[-1px] h-[1px] w-[1px] absolute `}
                />
                <div className="w-6 my-0 mx-2 peer-checked:bg-blue-500  h-6 bg-gray-transparent peer-checked:bg-opacity-70  rounded-full"></div>
              </label>
            );
          })}
        </div>
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
