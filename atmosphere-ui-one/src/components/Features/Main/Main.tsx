import Mix from './Mix';
import Sequencer from './Sequencer';
import { useMusicSelector } from '../../../stores/music/hooks.ts';
import { selectSteps } from '../../../stores/music/slices/patternSlice.ts';

export default function Main() {
  const steps = useMusicSelector(selectSteps);

  return (
    <div className="col-span-8 mt-4 grid gap-4 items-end flex-col">
      <div>
        <Mix />
        <Sequencer steps={steps} />
      </div>
    </div>
  );
}
