import { useState } from 'react';
import EffectCard from '../../Ui/Cards/EffectCard';

export default function Effects() {
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
    <div className=" w-[60rem] flex flex-col">
      <h2 className="uppercase font-caps text-3xl">EFFECTS</h2>
      <div className="flex p-8 items-center justify-between">
        <EffectCard
          state={[
            { level: distortion.mix, name: 'mix' },
            { level: distortion.amount, name: 'amount' },
            { level: distortion.output, name: 'output' },
          ]}
          handleMixChange={handleDistortionChange}
          color="accent-red-500"
          title="Distortion"
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
        />
      </div>
    </div>
  );
}
