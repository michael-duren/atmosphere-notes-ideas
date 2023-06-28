import { FiHardDrive } from 'react-icons/fi';
import FolderButton from '../../Ui/Buttons/FolderButton.tsx';
import { useState } from 'react';

export default function Collections() {
  const [isSongsOpen, setIsSongsOpen] = useState(false);
  const [isPatternsOpen, setIsPatternsOpen] = useState(false);
  const [isEffectsOpen, setIsEffectsOpen] = useState(false);

  return (
    <>
      <h2 className="text-3xl flex gap-2 font-caps">
        <FiHardDrive />
        Collections
      </h2>
      {/* FOLDER LIST */}
      <div className="ml-4 flex flex-col gap-4">
        {/* SONGS */}
        <div>
          <FolderButton
            name={'Songs'}
            isOpen={isSongsOpen}
            setIsOpen={setIsSongsOpen}
          />
        </div>
        {/*  PATTERNS */}
        <div>
          <FolderButton
            name={'Patterns'}
            isOpen={isPatternsOpen}
            setIsOpen={setIsPatternsOpen}
          />
        </div>
        {/*  EFFECTS */}
        <div>
          <FolderButton
            name={'Effects'}
            isOpen={isEffectsOpen}
            setIsOpen={setIsEffectsOpen}
          />
        </div>
      </div>
    </>
  );
}
