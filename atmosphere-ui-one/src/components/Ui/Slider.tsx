interface KnobProps {
  value: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

const Slider = ({ value, onChange }: KnobProps) => {
  return (
    <input
      type="range"
      name="name"
      min="0"
      max="100"
      value={value}
      onChange={onChange}
      className="w-20 h-0.5 accent-red-500 bg-gray-300 bg-opacity-30 appearance-none cursor-pointer rounded-lg"
    />
  );
};

export default Slider;
