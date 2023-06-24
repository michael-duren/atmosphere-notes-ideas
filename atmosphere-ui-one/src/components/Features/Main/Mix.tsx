import { useEffect } from 'react';
import EffectCard from '../../Ui/Cards/EffectCard';
import {
  GiAbstract051,
  GiAbstract053,
  GiAbstract098,
  GiAbstract024,
} from 'react-icons/gi';
import VolumeCard from '../../Ui/Cards/VolumeCard';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import {
  selectMix,
  setDelayDelayTime,
  setDelayFeedback,
  setDelayMix,
  setDistortionDistortion,
  setDistortionMix,
  setDistortionOutput,
  setReverbDecay,
  setReverbMix,
  setReverbPreDelay,
} from '../../../store/slices/mix';
import {
  distortion,
  distortionGain,
  reverb,
  delay,
} from '../../../store/tone/mix';

export default function Mix() {
  const mix = useAppSelector(selectMix);
  const distortionStore = mix.distortion;
  const reverbStore = mix.reverb;
  const delayStore = mix.delay;
  const dispatch = useAppDispatch();

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
  }, [reverbStore.mix]);
  useEffect(() => {
    reverb.decay = reverbStore.decay;
  }, [reverbStore.decay]);
  useEffect(() => {
    reverb.preDelay = reverbStore.preDelay;
  }, [reverbStore.preDelay]);

  // DELAY
  useEffect(() => {
    delay.wet.value = delayStore.mix;
  }, [delayStore.mix]);
  useEffect(() => {
    delay.delayTime.value = delayStore.delayTime;
  }, [delayStore.delayTime]);
  useEffect(() => {
    delay.feedback.value = delayStore.feedback;
  }, [delayStore.feedback]);

  // DISTORTION HANDLERS
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

  // REVERB HANDLERS
  const handleReverbMixChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    dispatch(setReverbMix(parseFloat(value)));
  };
  const handleReverbDecayChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    dispatch(setReverbDecay(parseFloat(value)));
  };
  const handleReverbPreDelayyChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    dispatch(setReverbPreDelay(parseFloat(value)));
  };

  // DELAY HANDLERS
  const handleDelayMixChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    dispatch(setDelayMix(parseFloat(value)));
  };
  const handleDelayDelayTimeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    dispatch(setDelayDelayTime(parseFloat(value)));
  };
  const handleDelayFeedbackChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    dispatch(setDelayFeedback(parseFloat(value)));
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
        <EffectCard
          state={[
            {
              level: reverbStore.mix,
              name: 'mix',
              setter: handleReverbMixChange,
            },
            {
              level: reverbStore.decay,
              name: 'decay',
              setter: handleReverbDecayChange,
            },
            {
              level: reverbStore.preDelay,
              name: 'preDelay',
              setter: handleReverbPreDelayyChange,
            },
          ]}
          color="accent-green-500"
          title="Reverb"
          EffectIcon={GiAbstract024}
        />
        <EffectCard
          state={[
            {
              level: delayStore.mix,
              name: 'mix',
              setter: handleDelayMixChange,
            },
            {
              level: delayStore.delayTime,
              name: 'time',
              setter: handleDelayDelayTimeChange,
            },
            {
              level: delayStore.feedback,
              name: 'feedback',
              setter: handleDelayFeedbackChange,
            },
          ]}
          color="accent-blue-500"
          title="Delay"
          EffectIcon={GiAbstract053}
          size={'text-xl'}
        />
        <VolumeCard />
      </div>
    </div>
  );
}
