import { createSlice } from '@reduxjs/toolkit';
import { MusicState } from '../music';

export interface MixState {
  distortion: { mix: number; distortion: number; output: number };
  reverb: { mix: number; decay: number; preDelay: number };
  delay: { mix: number; delayTime: number; maxDelay: number; feedback: number };
  masterVolume: number;
}

const mixInitialState = {
  masterVolume: 1,
  distortion: {
    distortion: 0.8,
    mix: 0,
    output: 1,
  },
  reverb: {
    mix: 0,
    decay: 1.5,
    preDelay: 0.01,
  },
  delay: {
    mix: 0,
    delayTime: 0.5,
    maxDelay: 1,
    feedback: 0.5,
  },
};

const mixSlice = createSlice({
  name: 'mix',
  initialState: mixInitialState,
  reducers: {
    setMasterVolume: (state, action) => {
      state.masterVolume = action.payload;
    },
    setDistortionMix: (state, action) => {
      state.distortion.mix = action.payload;
    },
    setDistortionDistortion: (state, action) => {
      state.distortion.distortion = action.payload;
    },
    setDistortionOutput: (state, action) => {
      state.distortion.output = action.payload;
    },
    setReverbMix: (state, action) => {
      state.reverb.mix = action.payload;
    },
    setReverbDecay: (state, action) => {
      state.reverb.decay = action.payload;
    },
    setReverbPreDelay: (state, action) => {
      state.reverb.preDelay = action.payload;
    },
    setDelayMix: (state, action) => {
      state.delay.mix = action.payload;
    },
    setDelayDelayTime: (state, action) => {
      state.delay.delayTime = action.payload;
    },
    setDelayFeedback: (state, action) => {
      state.delay.feedback = action.payload;
    },
  },
});

export const selectMix = (state: MusicState): MixState => state.mix;

export const {
  setMasterVolume,
  setDistortionMix,
  setDistortionDistortion,
  setDistortionOutput,
  setReverbMix,
  setReverbDecay,
  setReverbPreDelay,
  setDelayMix,
  setDelayDelayTime,
  setDelayFeedback,
} = mixSlice.actions;

export default mixSlice.reducer;
