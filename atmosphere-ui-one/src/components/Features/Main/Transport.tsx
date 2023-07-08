import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import {
  selectTransport,
  setBpm,
  togglePlay,
} from '../../../stores/music/slices/transportSlice.ts';
import {
  useMusicDispatch,
  useMusicSelector,
} from '../../../stores/music/hooks.ts';
import * as Tone from 'tone';
import { useEffect, useRef, useState } from 'react';

export default function Transport() {
  const { isPlaying, bpm } = useMusicSelector(selectTransport);
  const dispatch = useMusicDispatch();
  const [inputBpm, setInputBpm] = useState(bpm);
  const inputBpmRef = useRef<HTMLInputElement>(null);

  const handleInputBpm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputBpm(+event.target.value);
  };
  const setIsPlaying = () => {
    dispatch(togglePlay());
  };

  const handleTransport = async () => {
    console.log('handleTransport');
    if (Tone.Transport.state === 'started') {
      Tone.Transport.stop();
      setIsPlaying();
    } else {
      await Tone.start();
      Tone.Transport.start();
      setIsPlaying();
    }
  };

  useEffect(() => {
    Tone.Transport.bpm.value = bpm;
  }, [bpm]);

  const handleBpm = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && inputBpm > 20 && inputBpm <= 400) {
      dispatch(setBpm(inputBpm));
      inputBpmRef.current!.blur();
    }
  };

  return (
    <div className="flex items-center justify-center gap-8">
      <button onClick={() => handleTransport()} className="mt-2">
        {isPlaying ? <BsPauseFill size={40} /> : <BsFillPlayFill size={40} />}
      </button>
      <div className="flex flex-col">
        <label className="text-[0.6rem]">BPM</label>
        <input
          ref={inputBpmRef}
          type="number"
          max={400}
          min={20}
          value={inputBpm}
          onChange={handleInputBpm}
          onKeyDown={handleBpm}
          className="text-white p-2 text-2xl bg-gray-transparent rounded-2xl"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-[0.6rem]">STEPS</label>
        <input
          type="number"
          max={64}
          min={1}
          value={16}
          className="text-white p-2 text-2xl bg-gray-transparent rounded-2xl"
        />
      </div>
    </div>
  );
}
