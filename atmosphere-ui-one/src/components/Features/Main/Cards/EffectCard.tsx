import Slider from '../../../Ui/Slider';

interface Parameter {
  level: number;
  name: string;
}

interface Props {
  state: Parameter[];
  handleMixChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function EffectCard({ state, handleMixChange }: Props) {
  return (
    <div className="min-h-[20rem] justify-evenly flex flex-col items-center min-w-[15rem] rounded-xl border-2">
      <h3 className="text-2xl">Distortion</h3>
      <div className="flex flex-col">
        <div className="flex flex-col items-center gap-2">
          <Slider
            value={state[0].level}
            onChange={handleMixChange}
            name="mix"
          />
          <label>Mix</label>
        </div>

        <div className="flex flex-col items-center gap-2"></div>
        <button>Mix</button>
      </div>
    </div>
  );
}
