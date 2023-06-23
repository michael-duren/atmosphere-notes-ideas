interface KnobProps {
  value: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  color: 'accent-red-500' | 'accent-blue-500' | 'accent-green-500';
}

const Slider = ({ value, onChange, name, color }: KnobProps) => {
  return (
    <input
      type="range"
      name={name}
      min="0"
      max="100"
      value={value}
      onChange={onChange}
      className={`w-20 h-0.5 ${color} bg-gray-300 bg-opacity-30 appearance-none cursor-pointer rounded-lg`}
    />
  );
};

export default Slider;
