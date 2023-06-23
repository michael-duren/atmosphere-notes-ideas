import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface DrumState {
  steps: boolean[];
  name: string;
  sound: string;
}

export interface PatternAction {
  name: string;
  step: number;
}

export interface KitState {
  BD: DrumState;
}

const patternInitialState: KitState = {
  // 16 boolean steps in an array
  BD: {
    steps: Array.from({ length: 16 }).map((val) => (val = false)),
    name: 'BD',

    sound: '/sounds/vocal-kick.wav',
  },
};

const kitSlice = createSlice({
  name: 'kit',
  initialState: patternInitialState,
  reducers: {
    toggleStep: (state, action: PayloadAction<PatternAction>) => {
      state[action.payload.name as keyof KitState].steps[action.payload.step] =
        !state[action.payload.name as keyof KitState].steps[
          action.payload.step
        ];

      console.log(state.BD.steps);
    },
  },
});

export const { toggleStep } = kitSlice.actions;

export const selectPattern = (state: RootState): KitState => state.kit;

export default kitSlice.reducer;
