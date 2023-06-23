import Effects from './Effects';
import Header from './Header';
import Sequencer from './Sequencer';

export default function Main() {
  return (
    <div className="col-span-6">
      <Header />
      <div className="flex  p-4 items-center flex-col">
        <Effects />
        <Sequencer steps={16} />
      </div>
    </div>
  );
}
