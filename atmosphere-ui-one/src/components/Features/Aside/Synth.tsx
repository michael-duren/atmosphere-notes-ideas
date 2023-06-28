import Spinner from '../../Ui/Spinners/Spinner.tsx';
import * as Tone from 'tone';
import { fmSynthOne } from '../../../store/tone/synth.ts';
import { useEffect, useState } from 'react';
import Slider from '../../Ui/Slider.tsx';

export default function Synth() {
  const [modulation, setModulation] = useState(0);
  const playSynth = () => {
    const now = Tone.now();
    fmSynthOne.start(now);
    // fmSynthTwo.triggerAttack('C3', now);
  };
  const stopSynth = () => {
    const now = Tone.now();
    fmSynthOne.stop(now);
    // fmSynthTwo.triggerRelease(now);
  };

  useEffect(() => {
    // @ts-ignore
    fmSynthOne.modulationIndex.value = modulation;
  }, [modulation]);

  const modulationAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
    setModulation(+event.target.value);
  };

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
        </div>
      </div>
      {/*right side controls*/}
      <div>
        <Slider
          name="masterVolume"
          onChange={modulationAmount}
          value={modulation}
          color="accent-white"
          additionalClasses="rotate-270 mt-6 w-32 opacity-60"
        />
      </div>
    </>
  );
}
