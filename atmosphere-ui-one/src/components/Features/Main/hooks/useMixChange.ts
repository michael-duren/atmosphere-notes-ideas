import { useAppDispatch } from '../../../../store/hooks.ts';
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
} from '../../../../store/slices/mixSlice.ts';

const useMixChange = () => {
  const dispatch = useAppDispatch();

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
  const handleReverbPreDelayChange = (
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
