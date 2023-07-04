import {
  GiAbstract051,
  GiAbstract053,
  GiAbstract098,
  GiAbstract024,
} from 'react-icons/gi';
import VolumeCard from '../../Ui/Cards/VolumeCard';
import useMixChange from './hooks/useMixChange.ts';
import { useAppSelector } from '../../../store/hooks.ts';
import { selectMix } from '../../../store/slices/mixSlice.ts';
import useMixEffects from './hooks/useMixEffects.ts';
import EffectCardKnob from '../../Ui/Cards/EffectCardKnob.tsx';

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
    <div className=" min-w-[50vw] w-full bg-dark-transparent items-end flex flex-col">
      <h2 className="uppercase flex gap-4 items-center font-caps text-2xl">
        MIX{' '}
        <span>
          <GiAbstract051 />
        </span>
      </h2>

      <div className="flex w-full p-8 gap-x-8 items-center justify-between">
        <div className="flex gap-8 relative">
          <h2 className="font-caps uppercase absolute -top-8">EFFECTS</h2>
          <EffectCardKnob
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
            color="#DC2626"
            title="Distortion"
            EffectIcon={GiAbstract098}
          />
          <EffectCardKnob
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
            color="#16A34A"
            title="Reverb"
            EffectIcon={GiAbstract024}
          />
          <EffectCardKnob
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
            color="#2563EB"
            title="Delay"
            EffectIcon={GiAbstract053}
            size={'text-xl'}
          />
        </div>
        <VolumeCard />
      </div>
    </div>
  );
}
