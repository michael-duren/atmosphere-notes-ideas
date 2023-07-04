import { useEffect } from 'react';
import {
  delay,
  distortion,
  distortionGain,
  reverb,
} from '../../../../stores/music/tone/mix.ts';
import { MixState } from '../../../../stores/music/slices/mixSlice.ts';

const useMixEffects = (mix: MixState) => {
  const distortionStore = mix.distortion;
  const reverbStore = mix.reverb;
  const delayStore = mix.delay;

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
};

export default useMixEffects;
