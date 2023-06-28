import { FiHardDrive } from 'react-icons/fi';
import { useState } from 'react';
import FolderButton from '../../Ui/Buttons/FolderButton.tsx';

export default function Aside() {
  const [isSongsOpen, setIsSongsOpen] = useState(false);
  const [isPatternsOpen, setIsPatternsOpen] = useState(false);
  const [isEffectsOpen, setIsEffectsOpen] = useState(false);

  return (
    <aside className="grid grid-rows-2 col-span-4 mt-4">
      <div className="flex p-8 bg-dark-transparent rounded-xl flex-col gap-4">
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
      </div>
      <div className="flex flex-col gap-4"></div>
    </aside>
  );
}
