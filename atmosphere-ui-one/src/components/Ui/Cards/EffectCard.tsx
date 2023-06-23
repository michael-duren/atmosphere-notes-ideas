import { splitCamelCase } from '../../../utils/splitCamelCase';
import { toTitleCase } from '../../../utils/toTitleCase';
import Slider from '../Slider';

interface Parameter {
  level: number;
  name: string;
}

interface Props {
  state: Parameter[];
  handleMixChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  color: 'accent-red-500' | 'accent-blue-500' | 'accent-green-500';
  title: string;
  EffectIcon?: React.FC;
  size?: string;
}

export default function EffectCard({
  state,
  handleMixChange,
  color,
  size = 'text-2xl',
  EffectIcon,
}: Props) {
  const [paramOne, paramTwo, paramThree] = [...state];

  return (
    <div
      className="min-h-[15-rem] bg-gray-transparent bg p-6 gap-8 justify-evenly flex flex-col
     items-center min-w-[15rem] rounded-xl "
    >
      <h3 className={`${size} flex flex-col items-center font-caps`}>
        {/* {title} */}
        {EffectIcon && <EffectIcon />}
      </h3>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between w-[10rem] items-center gap-2">
          <label className="mb-1 text-sm">
            {toTitleCase(splitCamelCase(paramOne.name))}
          </label>
          <Slider
            value={paramOne.level}
            onChange={handleMixChange}
            name={paramOne.name}
            color={color}
          />
        </div>
        <div className="flex justify-between w-[10rem] items-center gap-2">
          <label className="mb-1 text-sm">
            {toTitleCase(splitCamelCase(paramTwo.name))}
          </label>
          <Slider
            value={paramTwo.level}
            onChange={handleMixChange}
            name={paramTwo.name}
            color={color}
          />
        </div>
        <div className="flex justify-between w-[10rem] items-center gap-2">
          <label className="text-sm">
            {toTitleCase(splitCamelCase(paramThree.name))}
          </label>
          <Slider
            value={paramThree.level}
            onChange={handleMixChange}
            name={paramThree.name}
            color={color}
          />
        </div>

        <div className="flex flex-col items-center gap-2"></div>
      </div>
    </div>
  );
}
