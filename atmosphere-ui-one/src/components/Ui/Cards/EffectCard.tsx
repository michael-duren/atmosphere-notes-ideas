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
}

export default function EffectCard({
  state,
  handleMixChange,
  color,
  title,
}: Props) {
  const [paramOne, paramTwo, paramThree] = [...state];

  return (
    <div
      className="min-h-[15-rem] bg-gray-transparent bg p-8 gap-8 justify-evenly flex flex-col
     items-center min-w-[15rem] rounded-xl "
    >
      <h3 className="text-2xl font-caps">{title}</h3>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-center gap-2">
          <Slider
            value={paramOne.level}
            onChange={handleMixChange}
            name={paramOne.name}
            color={color}
          />
          <label>{toTitleCase(splitCamelCase(paramOne.name))}</label>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Slider
            value={paramTwo.level}
            onChange={handleMixChange}
            name={paramTwo.name}
            color={color}
          />
          <label>{toTitleCase(splitCamelCase(paramTwo.name))}</label>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Slider
            value={paramThree.level}
            onChange={handleMixChange}
            name={paramThree.name}
            color={color}
          />
          <label>{toTitleCase(splitCamelCase(paramThree.name))}</label>
        </div>

        <div className="flex flex-col items-center gap-2"></div>
      </div>
    </div>
  );
}
