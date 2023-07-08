import { animated, Spring, SpringValue } from '@react-spring/web';
import {
  CircularInput,
  CircularProgress,
  CircularThumb,
  CircularTrack,
} from 'react-circular-input';

interface Props {
  color: string;
  title: string;
  level: number;
  setter: (num: number) => void;
  titleSize?: string;
  display?: string;
  displaySize?: string;
}

const AnimatedCircleInput = animated(CircularInput);

export default function AnimatedKnob({
  color,
  title,
  level,
  setter,
  titleSize,
  display,
  displaySize,
}: Props) {
  const titleTextSize = titleSize ?? '';

  return (
    <div>
      <Spring to={{ level }}>
        {(props: { level: SpringValue<number> }) => (
          <AnimatedCircleInput
            radius={30}
            value={props.level}
            onChange={(v) => {
              setter(v);
              console.log(level);
            }}
          >
            <CircularTrack stroke={`${color}50`} strokeWidth={'10px'} />
            <CircularProgress stroke={`${color}AA`} strokeWidth={'11px'} />
            <CircularThumb
              fill={`${color}EE`}
              className="stroke-white"
              r={10}
            />
            {display ? (
              <text
                className={` fill-white ${displaySize}`}
                x={30}
                y={35}
                textAnchor={'middle'}
              >
                {display}
              </text>
            ) : (
              <text
                className={` fill-white ${displaySize}`}
                x={30}
                y={35}
                textAnchor={'middle'}
              >
                {Math.round(level * 100)}
              </text>
            )}
            <text
              className={`stroke-white ${titleTextSize} `}
              textAnchor={'middle'}
              fontFamily={'Rajdhani, sans-serif'}
              dy={'0.1rem'}
              fontWeight={'semiBold'}
              x={30}
              y={-15}
            >
              {title}
            </text>
          </AnimatedCircleInput>
        )}
      </Spring>
    </div>
  );
}
