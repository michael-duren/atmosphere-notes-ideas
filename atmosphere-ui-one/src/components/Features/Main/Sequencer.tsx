import { Fragment, useEffect, useRef } from 'react';
import Track from '../../Ui/Track/Track';
import { useAppSelector } from '../../../store/hooks';
import { KitState } from '../../../store/slices/patternSlice.ts';
import { selectPattern } from '../../../store/slices/patternSlice.ts';
import * as Tone from 'tone';
import { Drum } from '../../../models/kit';
import Transport from './Transport';
import { GiAbstract016 } from 'react-icons/gi';
import {
  delay,
  distortion,
  distortionGain,
  reverb,
  volume,
} from '../../../store/tone/mix';
import { selectMix } from '../../../store/slices/mixSlice';

interface SequencerProps {
  steps: number;
}

const NOTE = 'C2' as const;

export default function Sequencer({ steps }: SequencerProps) {
  // REDUX STATE SELECTORS
  const { masterVolume } = useAppSelector(selectMix);
  const pattern = useAppSelector(selectPattern);
  const patternArr = Object.keys(pattern).map(
    (track) => pattern[track as keyof KitState]
  );

  // REFS
  const trackRef = useRef<Drum[]>([]);
  const lampRef = useRef<HTMLInputElement[]>([]);
  const seqRef = useRef<Tone.Sequence | null>(null);
  const stepsRef = useRef<HTMLInputElement[][]>([]);
  const stepsIds = Array.from({ length: steps }).map((_, i) => i);

  // EVENTS
  useEffect(() => {
    volume.volume.value = Tone.gainToDb(masterVolume);
  }, [masterVolume]);

  useEffect(() => {
    trackRef.current = patternArr.map((track, i) => {
      return {
        ...track,
        id: i,
        sampler: new Tone.Sampler({
          urls: {
            [NOTE]: track.sound,
          },
        }).chain(
          distortion,
          distortionGain,
          reverb,
          delay,
          volume,
          Tone.Destination
        ),
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
    <div className="flex w-full  items-center flex-col rounded-xl p-8  bg-dark-transparent  gap-4 justify-center">
      <div className="flex w-full justify-between">
        <Transport />
        <h2 className="font-caps flex gap-4 items-center text-2xl">
          SEQUENCER{' '}
          <span>
            <GiAbstract016 />
          </span>
        </h2>
      </div>
      <div className="grid grid-rows-4 gap-5">
        <div className="flex gap-x-4">
          <div className="w-10"></div>
          {stepsIds.map((step) => {
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
