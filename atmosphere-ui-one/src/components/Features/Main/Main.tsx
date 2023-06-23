import Mix from './Mix';
import Header from './Header';
import Sequencer from './Sequencer';

export default function Main() {
  return (
    <div className="col-span-6">
      <Header />
      <div className="flex gap-4 items-end flex-col">
        <Mix />
        <Sequencer steps={16} />
      </div>
    </div>
  );
}
