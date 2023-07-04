import { animated, Spring } from '@react-spring/web';
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
}

const AnimatedCircleInput = animated(CircularInput);

export default function AnimatedKnob({ color, title, level, setter }: Props) {
  return (
    <div>
      <Spring to={{ level }}>
        {(props) => (
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
            <text x={30} y={35} textAnchor={'middle'} className="fill-white">
              {Math.round(level * 100)}
            </text>
            <text
              className="stroke-white "
              textAnchor={'middle'}
              fontFamily={'Rajdhani, sans-serif'}
              dy={'0.4rem'}
              fontWeight={'semiBold'}
              x={-10}
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
