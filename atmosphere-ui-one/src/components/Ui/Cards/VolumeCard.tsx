import { useState } from 'react';
import Slider from '../Slider';
import { GiAbstract013 } from 'react-icons/gi';

export default function VolumeCard() {
  const [masterVolume, setMasterVolume] = useState(100);
  const handleMasterVolumeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    setMasterVolume(Number(value));
    console.log(masterVolume);
  };

  return (
    <div
      className="h-56 w-20 bg-gray-transparent bg p-6 gap-16 justify-start  flex flex-col
     items-center rounded-xl "
    >
      <GiAbstract013 size={25} />
      <Slider
        name="masterVolume"
        onChange={handleMasterVolumeChange}
        value={masterVolume}
        color="accent-white"
        additionalClasses="rotate-270 mt-6 w-32 opacity-60"
      />
    </div>
  );
}
