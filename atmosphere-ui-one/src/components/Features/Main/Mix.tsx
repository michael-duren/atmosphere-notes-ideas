import { GiAbstract051 } from 'react-icons/gi';
import VolumeCard from '../../Ui/Cards/VolumeCard';
import EffectCardList from '../../Ui/Lists/EffectCardList.tsx';
import SynthCard from '../../Ui/Cards/SynthCard.tsx';

export default function Mix() {
  return (
    <div className=" min-w-[50vw] w-full bg-dark-transparent items-end flex flex-col">
      <h2 className="uppercase flex gap-4 items-center font-caps text-2xl">
        MIX{' '}
        <span>
          <GiAbstract051 />
        </span>
      </h2>

      <div className="flex w-full p-8 gap-x-8 items-center justify-between">
        <SynthCard />
        <EffectCardList />
        <VolumeCard />
      </div>
    </div>
  );
}
