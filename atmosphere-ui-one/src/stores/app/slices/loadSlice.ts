import { createSlice } from '@reduxjs/toolkit';

const loadSlice = createSlice({
  name: 'load',
  initialState: false,
  reducers: {
    setLoad: (state) => {
      state = !state;
    },
  },
});

export default loadSlice.reducer;
