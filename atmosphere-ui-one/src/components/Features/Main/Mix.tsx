import { useEffect, useState } from 'react';
import EffectCard from '../../Ui/Cards/EffectCard';
import {
  GiAbstract051,
  GiAbstract053,
  GiAbstract098,
  GiAbstract024,
} from 'react-icons/gi';
import VolumeCard from '../../Ui/Cards/VolumeCard';
import { useAppSelector } from '../../../store/hooks';
import {
  selectMix,
  setDistortionDistortion,
  setDistortionMix,
  setDistortionOutput,
  setReverbMix,
} from '../../../store/slices/mix';
import { useDispatch } from 'react-redux';
import { distortion, distortionGain, reverb } from '../../../store/tone/mix';

export default function Mix() {
  const mix = useAppSelector(selectMix);
  const distortionStore = mix.distortion;
  const reverbStore = mix.reverb;
  const dispatch = useDispatch();

  // DISTORTION
  useEffect(() => {
    distortion.wet.value = distortionStore.mix;
  }, [distortionStore.mix]);
  useEffect(() => {
    distortion.distortion = distortionStore.distortion;
  }, [distortionStore.distortion]);
  useEffect(() => {
    distortionGain.gain.value = distortionStore.distortion;
  }, [distortionStore.output]);

  // REVERB
  useEffect(() => {
    reverb.wet.value = reverbStore.mix;
  }, []);

  const initialStateDelay = {
    mix: 0,
    time: 0,
    feedback: 0,
  };

  // const [distortion, setDistortion] = useState(initialStateDistortion);
  // const [verb, setVerb] = useState(initialStateVerb);
  const [delay, setDelay] = useState(initialStateDelay);

  // const handleDistortionChange = (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   const { value, name } = event.target;
  //   setDistortion({ ...distortion, [name]: value });
  // };

  const handleDistortionMixChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    dispatch(setDistortionMix(parseFloat(value)));
  };

  const handleDistortionAmountChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    dispatch(setDistortionDistortion(parseFloat(value)));
  };

  const handleDistortionOutputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    dispatch(setDistortionOutput(parseFloat(value)));
  };

  const handleReverbMixChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    dispatch(setReverbMix(parseFloat(value)));
  };

  // const handleVerbChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const { value, name } = event.target;
  //   setVerb({ ...verb, [name]: value });
  // };

  const handleDelayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setDelay({ ...delay, [name]: value });
  };

  return (
    <div className="p-8 min-w-[60vw] bg-dark-transparent items-end flex flex-col">
      <h2 className="uppercase flex gap-4 items-center font-caps text-2xl">
        MIX{' '}
        <span>
          <GiAbstract051 />
        </span>
      </h2>
      <div className="flex w-full p-8 gap-x-8 items-center justify-between">
        <EffectCard
          state={[
            {
              level: distortionStore.mix,
              name: 'mix',
              setter: handleDistortionMixChange,
            },
            {
              level: distortionStore.distortion,
              name: 'amount',
              setter: handleDistortionAmountChange,
            },
            {
              level: distortionStore.output,
              name: 'output',
              setter: handleDistortionOutputChange,
            },
          ]}
          color="accent-red-500"
          title="Distortion"
          EffectIcon={GiAbstract098}
        />
        {/* <EffectCard
          state={[
            { level: reverbStore.mix, name: 'mix' },
            { level: reverbStore.decay, name: 'decay' },
            { level: reverbStore.preDelay, name: 'preDelay' },
          ]}
          handleMixChange={handleReverbMixChange}
          color="accent-green-500"
          title="Reverb"
          EffectIcon={GiAbstract024}
        /> */}
        {/* <EffectCard
          state={[
            { level: delay.mix, name: 'mix' },
            { level: delay.time, name: 'time' },
            { level: delay.feedback, name: 'feedback' },
          ]}
          handleMixChange={handleDelayChange}
          color="accent-blue-500"
          title="Delay"
          EffectIcon={GiAbstract053}
          size={'text-xl'}
        /> */}
        <VolumeCard />
      </div>
    </div>
  );
}
