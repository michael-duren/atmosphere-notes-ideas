import EffectCardKnob from '../Cards/EffectCardKnob.tsx';
import { GiAbstract024, GiAbstract053, GiAbstract098 } from 'react-icons/gi';
import { useMusicSelector } from '../../../stores/music/hooks.ts';
import { selectMix } from '../../../stores/music/slices/mixSlice.ts';
import useMixChange from '../../Features/Main/hooks/useMixChange.ts';
import useMixEffects from '../../Features/Main/hooks/useMixEffects.ts';

export default function EffectCardList() {
  const mix = useMusicSelector(selectMix);
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
  );
}
