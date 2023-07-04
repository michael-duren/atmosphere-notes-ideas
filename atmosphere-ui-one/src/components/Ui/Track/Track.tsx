import { useDispatch } from 'react-redux';
import { Drum } from '../../../models/kit';
import { toggleStep } from '../../../stores/music/slices/patternSlice.ts';

interface TrackProps {
  instrument: Drum;
  index: number;
  onClick?: () => void;
  stepsRef: React.RefObject<HTMLInputElement[][]>;
}

export default function Track({ instrument, index, stepsRef }: TrackProps) {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-4 items-center">
      <div className="w-10">{instrument.name}</div>
      <div key={index} className="flex gap-x-4">
        {Array.from({ length: 16 }, (_, index) => {
          const isDivisibleByFour = (index + 1) % 4 === 0;
          const id = `${instrument.id}-${index}`;
          return (
            <label
              className={`relative max-w-[2.5rem] ${
                isDivisibleByFour && 'mr-4'
              } `}
              key={index}
            >
              <input
                id={id}
                className="opacity-0 absolute top-0 left-0 cursor-pointer h-10 w-10 peer"
                type="checkbox"
                checked={instrument.steps[index]}
                onChange={() =>
                  dispatch(toggleStep({ name: instrument.name, step: index }))
                }
                ref={(el) => {
                  if (!el) return;
                  if (!stepsRef.current![instrument.id]) {
                    stepsRef.current![instrument.id] = [];
                  }
                  stepsRef.current![instrument.id][index] = el;
                }}
              />
              <div
                className="peer-hover:bg-opacity-60 rounded-md  0 hover:bg-opacity-90 bg-gray-transparent
                peer-checked:peer-hover:bg-opacity-100
                       peer-checked:bg-blue-500 peer-checked:bg-opacity-70 w-10 h-10"
              />
            </label>
          );
        })}
      </div>
    </div>
  );
}
