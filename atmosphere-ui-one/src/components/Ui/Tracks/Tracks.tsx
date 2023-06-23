import { Drum } from '../../../models/kit';

interface TrackProps {
  instrument: Drum;
  index: number;
}

export default function Track({ instrument, index }: TrackProps) {
  return (
    <div className="flex gap-4 items-center">
      <div className="w-8">{instrument.name}</div>
      <div key={index} className="flex gap-4">
        {Array.from({ length: 16 }, (_, index) => {
          return (
            <label className="relative" key={index}>
              <input
                className="opacity-0 absolute top-0 left-0 cursor-pointer h-10 w-10 peer"
                type="checkbox"
              />
              <div
                className="peer-hover:bg-opacity-60 rounded-md  0 hover:bg-opacity-90 bg-gray-transparent
                       peer-checked:bg-red-500 w-10 h-10"
              />
            </label>
          );
        })}
      </div>
    </div>
  );
}
