import { useState } from 'react';
import EffectCard from './Cards/EffectCard';

export default function Effects() {
  const initialStateDistortion = {
    mix: 0,
    amount: 0,
    output: 0,
  };

  const [distortion, setDistortion] = useState(initialStateDistortion);

  const handleDistortionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value, name } = event.target;
    setDistortion({ ...distortion, [name]: value });
  };

  return (
    <div className=" w-[60rem] flex flex-col">
      <h2 className="uppercase font-caps text-3xl">EFFECTS</h2>
      <div className="flex p-8 items-center justify-between">
        <EffectCard
          state={[
            { name: 'mix', level: distortion.mix },
            { name: 'amount', level: distortion.amount },
            { name: 'output', level: distortion.output },
          ]}
          handleMixChange={handleDistortionChange}
        />
        <div className="min-h-[20rem] min-w-[15rem] rounded-xl border-2"></div>
        <div className="min-h-[20rem] min-w-[15rem] rounded-xl border-2"></div>
      </div>
    </div>
  );
}
