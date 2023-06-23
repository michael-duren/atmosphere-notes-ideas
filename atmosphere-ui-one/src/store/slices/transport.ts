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
    togglePlay: (state, action) => {
      state.isPlaying = action.payload;
    },
  },
});

export const { togglePlay } = transportSlice.actions;

export const selectTransport = (state: RootState): TransportState =>
  state.transport;

export default transportSlice.reducer;
