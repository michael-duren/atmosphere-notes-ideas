import { kit } from '../../../models/kit';

export default function Sequencer() {
  return (
    <div className="flex flex-col w-[60rem]  gap-4 justify-center">
      <h2 className="font-caps text-3xl">SEQUENCER</h2>
      <div className="flex flex-col gap-4">
        {kit.map((instrument, index) => {
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
                        className="peer-hover:bg-opacity-60 rounded-md  bg-gray-400 bg-opacity-30 hover:bg-opacity-90
                       peer-checked:bg-red-500 w-10 h-10"
                      />
                    </label>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
