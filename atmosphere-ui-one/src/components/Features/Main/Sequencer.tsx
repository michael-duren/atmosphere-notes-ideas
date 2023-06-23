import { Fragment } from 'react';
import Track from '../../Ui/Tracks/Tracks';
import { useAppSelector } from '../../../store/hooks';
import { KitState } from '../../../store/pattern/pattern';
import { selectPattern } from '../../../store/pattern/pattern';

export default function Sequencer() {
  const pattern = useAppSelector(selectPattern);
  const patternArr = Object.keys(pattern).map(
    (key) => pattern[key as keyof KitState]
  );

  return (
    <div className="flex flex-col w-[60rem]  gap-4 justify-center">
      <h2 className="font-caps text-3xl">SEQUENCER</h2>
      <div className="flex flex-col gap-4">
        {patternArr.map((instrument, index) => {
          return (
            <Fragment key={index}>
              <Track instrument={instrument} index={index} />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
