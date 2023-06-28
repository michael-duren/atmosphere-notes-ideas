import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import {
  selectTransport,
  togglePlay,
} from '../../../store/slices/transportSlice.ts';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import * as Tone from 'tone';

export default function Transport() {
  const { isPlaying } = useAppSelector(selectTransport);
  const dispatch = useAppDispatch();
  const setIsPlaying = (state: boolean) => {
    dispatch(togglePlay(state));
  };

  const handleTransport = async () => {
    console.log('handleTransport');
    if (Tone.Transport.state === 'started') {
      Tone.Transport.stop();
      setIsPlaying(false);
    } else {
      await Tone.start();
      Tone.Transport.start();
      setIsPlaying(true);
    }
  };

  return (
    <div className="flex items-center justify-center gap-8">
      <button onClick={() => handleTransport()} className="mt-2">
        {isPlaying ? <BsPauseFill size={40} /> : <BsFillPlayFill size={40} />}
      </button>
      <div className="flex flex-col">
        <label className="text-[0.5rem]">BPM</label>
        <input
          type="number"
          max={400}
          min={20}
          value={120}
          className="text-white text-2xl bg-gray-transparent rounded-2xl"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-[0.5rem]">STEPS</label>
        <input
          type="number"
          max={64}
          min={1}
          value={16}
          className="text-white text-2xl bg-gray-transparent rounded-2xl"
        />
      </div>
    </div>
  );
}
