import {
  PiCaretDownBold,
  PiCaretRightBold,
  PiFolderNotch,
  PiFolderOpen,
} from 'react-icons/pi';

interface FolderButtonProps {
  name: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function FolderButton({
  name,
  isOpen,
  setIsOpen,
}: FolderButtonProps) {
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="flex items-center text-xl transition-all duration-300"
    >
      {isOpen ? (
        <>
          <span className="mr-2">
            <PiCaretDownBold size={18} />
          </span>{' '}
          <span className="mr-1">
            <PiFolderOpen size={22} />
          </span>
        </>
      ) : (
        <>
          <span className="mr-2">
            <PiCaretRightBold size={18} />
          </span>
          <span className="mr-1">
            <PiFolderNotch size={22} />
          </span>
        </>
      )}{' '}
      <span>{name}</span>
    </button>
  );
}
