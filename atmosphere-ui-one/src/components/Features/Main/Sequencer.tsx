import { Fragment } from 'react';
import { kit } from '../../../models/kit';
import Track from '../../Ui/Tracks/Tracks';

export default function Sequencer() {
  return (
    <div className="flex flex-col w-[60rem]  gap-4 justify-center">
      <h2 className="font-caps text-3xl">SEQUENCER</h2>
      <div className="flex flex-col gap-4">
        {kit.map((instrument, index) => {
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
