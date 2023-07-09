import { useEffect, useState } from 'react';
import { getNoteTime, note } from '../../../utils/getNoteTime.ts';
import {
  CircularInput,
  CircularProgress,
  CircularThumb,
  CircularTrack,
} from 'react-circular-input';

interface Props {
  note: typeof note;
  setNote: (noteFreq: typeof note) => void;
  title: string;
}
export default function NoteFrequencyKnob({ note, setNote, title }: Props) {
  const [value, setValue] = useState(0.4);

  const stepValue = (val: number) => Math.round(val * 11) / 11;
  const color = '#9333EA';

  useEffect(() => {
    setNote(getNoteTime(value));
  }, [value]);

  return (
    <div className="relative">
      <div className="top-[50%] transform -translate-x-1/2 -translate-y-1/2 left-[50%] absolute ">
        {note}
      </div>
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
          {title}
        </text>
      </CircularInput>
    </div>
  );
}
