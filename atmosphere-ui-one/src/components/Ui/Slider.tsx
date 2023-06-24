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
      min="0"
      step={0.01}
      max="0.99"
      value={value}
      onChange={onChange}
      className={`w-20 h-0.5 ${color} bg-gray-300 ${additionalClasses} bg-opacity-30 appearance-none cursor-pointer rounded-lg`}
    />
  );
};

export default Slider;
