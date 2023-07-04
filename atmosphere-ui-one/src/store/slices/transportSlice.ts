import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface TransportState {
  isPlaying: boolean;
  bpm: number;
}

const transportInitialState: TransportState = { isPlaying: false, bpm: 120 };

const transportSlice = createSlice({
  name: 'transport',
  initialState: transportInitialState,
  reducers: {
    togglePlay: (state) => {
      state.isPlaying = !state.isPlaying;
    },
    setBpm: (state, action) => {
      const newBpm = action.payload;
      if (newBpm > 400 || newBpm < 20) {
        return;
      }

      state.bpm = newBpm;
    },
  },
});

export const { togglePlay, setBpm } = transportSlice.actions;

export const selectTransport = (state: RootState): TransportState =>
  state.transport;

export default transportSlice.reducer;
