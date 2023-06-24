import * as Tone from 'tone';
import { useEffect } from 'react';
import Slider from '../Slider';
import { GiAbstract013 } from 'react-icons/gi';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { selectMix, setMasterVolume } from '../../../store/slices/mix';

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
