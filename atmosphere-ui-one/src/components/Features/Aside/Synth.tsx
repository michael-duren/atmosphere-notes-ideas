import Spinner from '../../Ui/Spinners/Spinner.tsx';
import * as Tone from 'tone';
import { fmSynthOne } from '../../../stores/music/tone/fmSynth.ts';
import { useEffect, useState } from 'react';
import AnimatedKnob from '../../Ui/Knobs/AnimatedKnob.tsx';

export default function Synth() {
  const [modulation, setModulation] = useState(0);
  const playSynth = () => {
    const now = Tone.now();
    fmSynthOne.triggerAttack('C2', now);
    fmSynthOne.debug = true;
    // fmSynthTwo.triggerAttack('C3', now);
  };
  const stopSynth = () => {
    const now = Tone.now();
    fmSynthOne.triggerRelease(now);
    // fmSynthTwo.triggerRelease(now);
  };
  const test = () => {
    fmSynthOne.set({
      modulationIndex: 1,
    });
    // fmSynthTwo.triggerRelease(now);
  };

  useEffect(() => {
    // @ts-ignore
    fmSynthOne.set({});
  }, [modulation]);

  return (
    <>
      <div className="flex flex-col">
        {/* left side */}
        <div className="flex">
          <Spinner />
        </div>
        <div className="flex gap-4">
          <button onClick={playSynth} className="text-2xl uppercase font-caps">
            Start
          </button>
          <button className="text-2xl uppercase font-caps" onClick={stopSynth}>
            Stop
          </button>
          <button onClick={test}>TEST</button>
        </div>
      </div>
      {/*right side controls*/}
      <div className="grid grid-cols-2 gap-16">
        <AnimatedKnob
          color={'#ffffff'}
          title={'Master Volume'}
          level={modulation}
          setter={(num: number) => setModulation(num)}
        />
        <AnimatedKnob
          color={'#ffffff'}
          title={'Master Volume'}
          level={modulation}
          setter={(num: number) => setModulation(num)}
        />
        <AnimatedKnob
          color={'#ffffff'}
          title={'Master Volume'}
          level={modulation}
          setter={(num: number) => setModulation(num)}
        />
        <AnimatedKnob
          color={'#ffffff'}
          title={'Master Volume'}
          level={modulation}
          setter={(num: number) => setModulation(num)}
        />
      </div>
    </>
  );
}
