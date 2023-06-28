import Collections from './Collections.tsx';
import Synth from './Synth.tsx';

export default function Aside() {
  return (
    <aside className="grid grid-rows-2 gap-2 col-span-4 mt-4">
      <div className="flex p-8 bg-dark-transparent rounded-xl flex-col gap-4">
        <Collections />
      </div>
      <div className="flex p-8 bg-dark-transparent rounded-xl  gap-4">
        <Synth />
      </div>
    </aside>
  );
}
