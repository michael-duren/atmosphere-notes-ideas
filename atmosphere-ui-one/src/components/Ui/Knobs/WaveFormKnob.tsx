import { ReactComponent as Sin } from '../../../../public/assets/icons/Sin.svg';
import { ReactComponent as Triangle } from '../../../../public/assets/icons/Triangle.svg';
import { ReactComponent as SawTooth } from '../../../../public/assets/icons/SawTooth.svg';
import { ReactComponent as Square } from '../../../../public/assets/icons/Square.svg';
import {
  CircularInput,
  CircularProgress,
  CircularThumb,
  CircularTrack,
} from 'react-circular-input';
import { useEffect, useState } from 'react';

interface Props {
  wave: 'sin' | 'triangle' | 'square' | 'sawtooth';
  setWave: (wave: 'sin' | 'triangle' | 'square' | 'sawtooth') => void;
}

export default function WaveFormKnob({ wave, setWave }: Props) {
  const [value, setValue] = useState(0);
  const stepValue = (val: number) => Math.round(val * 4) / 4;
  const color = '#9333EA';

  useEffect(() => {
    getWave(value);
  }, [value]);

  const getWave = (val: number) => {
    switch (val) {
      case 0:
      case 1:
        setWave('sin');
        return;
      case 0.25:
        setWave('triangle');
        return;
      case 0.5:
        setWave('sawtooth');
        return;
      case 0.75:
        setWave('square');
        return;
      default:
        setWave('sin');
        return;
    }
  };

  return (
    <div className="relative">
      {wave === 'sin' ? (
        <Sin className="top-[50%] stroke-1 transform stroke-white -translate-x-1/2 -translate-y-1/2 left-[50%] absolute " />
      ) : wave === 'triangle' ? (
        <Triangle className="top-[50%] stroke-1 transform stroke-white -translate-x-1/2 -translate-y-1/2 left-[50%] absolute " />
      ) : wave === 'sawtooth' ? (
        <SawTooth className="top-[50%] stroke-1 transform stroke-white -translate-x-1/2 -translate-y-1/2 left-[50%] absolute " />
      ) : (
        <Square className="top-[50%] stroke-1 transform stroke-white -translate-x-1/2 -translate-y-1/2 left-[50%] absolute " />
      )}
      <CircularInput
        radius={30}
        value={value}
        onChange={(v) => {
          setValue(stepValue(v));
          console.log(value);
        }}
      >
        <CircularTrack stroke={`${color}50`} strokeWidth={'10px'} />
        <CircularProgress stroke={`${color}AA`} strokeWidth={'11px'} />
        <CircularThumb fill={`${color}EE`} className="stroke-white" r={10} />
        <text
          className={`stroke-white text-sm `}
          textAnchor={'middle'}
          fontFamily={'Rajdhani, sans-serif'}
          dy={'0.1rem'}
          fontWeight={'semiBold'}
          x={30}
          y={-15}
        >
          Waveform
        </text>
      </CircularInput>
    </div>
  );
}
