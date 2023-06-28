import Mix from './Mix';
import Sequencer from './Sequencer';

export default function Main() {
  return (
    <div className="col-span-8 mt-4 grid gap-4 items-end flex-col">
      <div className="">
        <Mix />
        <Sequencer steps={16} />
      </div>
    </div>
  );
}
