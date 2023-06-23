import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface DrumState {
  steps: boolean[];
  name: string;
  sound: string;
  id: number;
}

export interface PatternAction {
  name: string;
  step: number;
}

export interface KitState {
  BD: DrumState;
  SD: DrumState;
  CL: DrumState;
  CH: DrumState;
}

const patternInitialState: KitState = {
  // 16 boolean steps in an array
  CH: {
    steps: Array.from({ length: 16 }).map((val) => (val = false)),
    name: 'CH',
    sound: '/sounds/closed-hat.wav',
    id: 0,
  },
  CL: {
    steps: Array.from({ length: 16 }).map((val) => (val = false)),
    name: 'CL',
    sound: '/sounds/clap.wav',
    id: 1,
  },
  SD: {
    steps: Array.from({ length: 16 }).map((val) => (val = false)),
    name: 'SD',
    sound: '/sounds/snare.wav',
    id: 2,
  },
  BD: {
    steps: Array.from({ length: 16 }).map((val) => (val = false)),
    name: 'BD',
    id: 3,
    sound: '/sounds/vocal-kick.wav',
  },
};

const patternSlice = createSlice({
  name: 'kit',
  initialState: patternInitialState,
  reducers: {
    toggleStep: (state, action: PayloadAction<PatternAction>) => {
      state[action.payload.name as keyof KitState].steps[action.payload.step] =
        !state[action.payload.name as keyof KitState].steps[
          action.payload.step
        ];
    },
  },
});

export const { toggleStep } = patternSlice.actions;

export const selectPattern = (state: RootState): KitState => state.pattern;

export default patternSlice.reducer;
