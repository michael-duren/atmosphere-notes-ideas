import { useMusicDispatch } from '../../../../stores/music/hooks.ts';
import {
  setDelayDelayTime,
  setDelayFeedback,
  setDelayMix,
  setDistortionDistortion,
  setDistortionMix,
  setDistortionOutput,
  setReverbDecay,
  setReverbMix,
  setReverbPreDelay,
} from '../../../../stores/music/slices/mixSlice.ts';
import { round } from '../../../../utils/round.ts';

const useMixChange = () => {
  const dispatch = useMusicDispatch();

  // DISTORTION HANDLERS
  const handleDistortionMixChange = (num: number) => {
    dispatch(setDistortionMix(round(num)));
  };

  const handleDistortionAmountChange = (num: number) => {
    dispatch(setDistortionDistortion(round(num)));
  };

  const handleDistortionOutputChange = (num: number) => {
    dispatch(setDistortionOutput(round(num)));
  };

  // REVERB HANDLERS
  const handleReverbMixChange = (num: number) => {
    dispatch(setReverbMix(round(num)));
  };
  const handleReverbDecayChange = (num: number) => {
    dispatch(setReverbDecay(round(num)));
  };
  const handleReverbPreDelayChange = (num: number) => {
    dispatch(setReverbPreDelay(round(num)));
  };

  // DELAY HANDLERS
  const handleDelayMixChange = (num: number) => {
    dispatch(setDelayMix(round(num)));
  };
  const handleDelayDelayTimeChange = (num: number) => {
    dispatch(setDelayDelayTime(round(num)));
  };
  const handleDelayFeedbackChange = (num: number) => {
    dispatch(setDelayFeedback(round(num)));
  };

  return {
    handleDistortionMixChange,
    handleDistortionAmountChange,
    handleDistortionOutputChange,
    handleReverbMixChange,
    handleReverbDecayChange,
    handleReverbPreDelayChange,
    handleDelayMixChange,
    handleDelayDelayTimeChange,
    handleDelayFeedbackChange,
  };
};

export default useMixChange;
