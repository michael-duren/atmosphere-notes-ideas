import * as Tone from 'tone';
import { useEffect } from 'react';
import Slider from '../Sliders/Slider.tsx';
import { GiAbstract013 } from 'react-icons/gi';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { selectMix, setMasterVolume } from '../../../store/slices/mixSlice';

export default function VolumeCard() {
  const { masterVolume } = useAppSelector(selectMix);
  const dispatch = useAppDispatch();
  const handleMasterVolumeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    dispatch(setMasterVolume(parseFloat(value)));
  };

  useEffect(() => {
    Tone.Destination.volume.value = Tone.dbToGain(0.1);
  }, [masterVolume]);

  return (
    <div
      className="h-[22rem]   w-20 bg-gray-transparent  p-6 gap-16 justify-start  flex flex-col
     items-center rounded-xl "
    >
      <div className="mb-12">
        <GiAbstract013 size={25} />
      </div>
      <div className="relative">
        <Slider
          name="masterVolume"
          onChange={handleMasterVolumeChange}
          value={masterVolume}
          color="accent-white"
          additionalClasses="rotate-270 mt-6 w-32 opacity-60"
        />
        {/*<div className="absolute -bottom-[210%] right-[50%] transform translate-x-1/2">*/}
        {/*  {masterVolume}*/}
        {/*</div>*/}
      </div>
    </div>
  );
}
