import { splitCamelCase } from '../../../utils/splitCamelCase';
import { toTitleCase } from '../../../utils/toTitleCase';
import AnimatedKnob from '../Knobs/AnimatedKnob.tsx';

interface Parameter {
  level: number;
  name: string;
  setter: (num: number) => void;
}

interface Props {
  state: Parameter[];
  color: string;
  title: string;
  EffectIcon?: React.FC;
  size?: string;
}

export default function EffectCardKnob({
  state,
  color,
  size = 'text-2xl',
  EffectIcon,
}: Props) {
  return (
    <div
      className="min-h-[15-rem] bg-gray-transparent px-12 bg p-6 gap-8 justify-evenly flex flex-col
     items-center rounded-xl "
    >
      <h3 className={`${size} flex flex-col items-center font-caps`}>
        {/* {title} */}
        {EffectIcon && <EffectIcon />}
      </h3>
      <div className="flex w-full items-center flex-col gap-8">
        {state.map((param) => {
          const title = toTitleCase(splitCamelCase(param.name));
          return (
            <div key={param.name} className="items-center gap-2">
              <AnimatedKnob
                level={param.level}
                setter={param.setter}
                color={color}
                title={title}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
