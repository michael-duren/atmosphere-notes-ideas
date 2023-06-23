import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface TransportState {
  isPlaying: boolean;
}

const transportInitialState: TransportState = { isPlaying: false };

const transportSlice = createSlice({
  name: 'transport',
  initialState: transportInitialState,
  reducers: {
    togglePlay: (state) => {
      state.isPlaying = !state.isPlaying;
    },
  },
});

export const { togglePlay } = transportSlice.actions;

export const isPlaying = (state: RootState): TransportState => state.transport;

export default transportSlice.reducer;
