import { useState } from 'react';
import EffectCard from '../../Ui/Cards/EffectCard';
import {
  GiAbstract051,
  GiAbstract053,
  GiAbstract013,
  GiAbstract098,
  GiAbstract024,
} from 'react-icons/gi';
import { Volume } from 'tone';
import VolumeCard from '../../Ui/Cards/VolumeCard';

export default function Mix() {
  const initialStateDistortion = {
    mix: 0,
    amount: 0,
    output: 0,
  };

  const initialStateVerb = {
    mix: 0,
    decay: 0,
    preDelay: 0,
  };

  const initialStateDelay = {
    mix: 0,
    time: 0,
    feedback: 0,
  };

  const [distortion, setDistortion] = useState(initialStateDistortion);
  const [verb, setVerb] = useState(initialStateVerb);
  const [delay, setDelay] = useState(initialStateDelay);

  const handleDistortionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value, name } = event.target;
    setDistortion({ ...distortion, [name]: value });
  };

  const handleVerbChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setVerb({ ...verb, [name]: value });
  };

  const handleDelayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setDelay({ ...delay, [name]: value });
  };

  return (
    <div className="p-8 min-w-[60vw] bg-dark-transparent items-end flex flex-col">
      <h2 className="uppercase flex gap-4 items-center font-caps text-2xl">
        MIX{' '}
        <span>
          <GiAbstract051 />
        </span>
      </h2>
      <div className="flex w-full p-8 gap-x-8 items-center justify-between">
        <EffectCard
          state={[
            { level: distortion.mix, name: 'mix' },
            { level: distortion.amount, name: 'amount' },
            { level: distortion.output, name: 'output' },
          ]}
          handleMixChange={handleDistortionChange}
          color="accent-red-500"
          title="Distortion"
          EffectIcon={GiAbstract098}
        />
        <EffectCard
          state={[
            { level: verb.mix, name: 'mix' },
            { level: verb.decay, name: 'decay' },
            { level: verb.preDelay, name: 'preDelay' },
          ]}
          handleMixChange={handleVerbChange}
          color="accent-green-500"
          title="Reverb"
          EffectIcon={GiAbstract024}
        />
        <EffectCard
          state={[
            { level: delay.mix, name: 'mix' },
            { level: delay.time, name: 'time' },
            { level: delay.feedback, name: 'feedback' },
          ]}
          handleMixChange={handleDelayChange}
          color="accent-blue-500"
          title="Delay"
          EffectIcon={GiAbstract053}
          size={'text-xl'}
        />
        <VolumeCard />
      </div>
    </div>
  );
}
