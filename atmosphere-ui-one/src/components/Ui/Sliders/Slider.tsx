import './Slider.css';

interface KnobProps {
  value: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  color:
    | 'accent-red-500'
    | 'accent-blue-500'
    | 'accent-green-500'
    | 'accent-black'
    | 'accent-white';
  additionalClasses?: string;
}

const Slider = ({
  value,
  onChange,
  name,
  color,
  additionalClasses,
}: KnobProps) => {
  return (
    <input
      type="range"
      name={name}
      min={0}
      step={0.01}
      max={1}
      value={value}
      onChange={onChange}
      className={`h-10 ${color}   rounded-full focus:outline-none bg-white bg-opacity-30 border-2 
      border-slate-600 ${additionalClasses}  appearance-none cursor-pointer rounded-lg`}
    />
  );
};

export default Slider;
