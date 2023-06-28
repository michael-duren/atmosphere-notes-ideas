import EffectCard from '../../Ui/Cards/EffectCard';
import {
  GiAbstract051,
  GiAbstract053,
  GiAbstract098,
  GiAbstract024,
} from 'react-icons/gi';
import VolumeCard from '../../Ui/Cards/VolumeCard';
import useMixChange from './hooks/useMixChange.ts';
import { useAppSelector } from '../../../store/hooks.ts';
import { selectMix } from '../../../store/slices/mix.ts';
import useMixEffects from './hooks/useMixEffects.ts';

export default function Mix() {
  const mix = useAppSelector(selectMix);
  const distortionStore = mix.distortion;
  const reverbStore = mix.reverb;
  const delayStore = mix.delay;
  const {
    handleDistortionMixChange,
    handleDistortionAmountChange,
    handleDistortionOutputChange,
    handleReverbMixChange,
    handleReverbDecayChange,
    handleReverbPreDelayChange,
    handleDelayMixChange,
    handleDelayDelayTimeChange,
    handleDelayFeedbackChange,
  } = useMixChange();
  useMixEffects(mix);

  return (
    <div className="p-8 min-w-[50vw] w-full bg-dark-transparent items-end flex flex-col">
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
              setter: handleReverbPreDelayChange,
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
