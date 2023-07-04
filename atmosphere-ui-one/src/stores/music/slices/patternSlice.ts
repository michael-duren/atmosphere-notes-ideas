import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { MusicState } from '../music';

export interface DrumState {
  steps: boolean[];
  name: string;
  sound: string;
  id: number;
}

interface PatternAction {
  name: string;
  step: number;
}

export interface KitState {
  BD: DrumState;
  SD: DrumState;
  CL: DrumState;
  CH: DrumState;
}

interface PatternState {
  steps: number;
  kit: KitState;
}

const patternInitialState: PatternState = {
  steps: 16,
  kit: {
    CH: {
      steps: new Array(16).fill(false),
      name: 'CH',
      sound: '/sounds/closed-hat.wav',
      id: 0,
    },
    CL: {
      steps: new Array(16).fill(false),
      name: 'CL',
      sound: '/sounds/clap.wav',
      id: 1,
    },
    SD: {
      steps: new Array(16).fill(false),
      name: 'SD',
      sound: '/sounds/snare.wav',
      id: 2,
    },
    BD: {
      steps: new Array(16).fill(false),
      name: 'BD',
      id: 3,
      sound: '/sounds/vocal-kick.wav',
    },
  },
};

const patternSlice = createSlice({
  name: 'kit',
  initialState: patternInitialState,
  reducers: {
    toggleStep: (state, action: PayloadAction<PatternAction>) => {
      state.kit[action.payload.name as keyof KitState].steps[
        action.payload.step
      ] =
        !state.kit[action.payload.name as keyof KitState].steps[
          action.payload.step
        ];
    },
    updateStepNumber: (state, action: PayloadAction<number>) => {
      const newSteps = action.payload;

      if (newSteps > 16 || newSteps > 0) {
        return;
      }
      state.steps = action.payload;
    },
  },
});

export const { toggleStep, updateStepNumber } = patternSlice.actions;

export const selectPattern = (state: MusicState): KitState => state.pattern.kit;
export const selectSteps = (state: MusicState): number => state.pattern.steps;

export default patternSlice.reducer;
