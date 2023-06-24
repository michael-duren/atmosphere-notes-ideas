import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { distortion } from '../tone/mix';

export interface MixState {
  distortion: { mix: number; distortion: number; output: number };
  reverb: { mix: number; decay: number; preDelay: number };
  delay: { mix: number; delayTime: number; maxDelay: number; feedback: number };
}

const mixInitialState = {
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

// export const changeDistortionMix = createAsyncThunk(
//   'mix/changeDistortionMix',
//   async (value: number) => {
//     return value;
//   }
// );

const mixSlice = createSlice({
  name: 'mix',
  initialState: mixInitialState,
  reducers: {
    setDistortionMix: (state, action) => {
      state.distortion.mix = action.payload;
    },
    setDistortionDistortion: (state, action) => {
      state.distortion.distortion = action.payload;
    },
    setDistortionOutput: (state, action) => {
      state.distortion.output = action.payload;
      // state.distortion.output.output.gain.value = action.payload;
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
  },
});

export const selectMix = (state: RootState): MixState => state.mix;

export const {
  setDistortionMix,
  setDistortionDistortion,
  setDistortionOutput,
  setReverbMix,
  setReverbDecay,
  setReverbPreDelay,
} = mixSlice.actions;

export default mixSlice.reducer;
