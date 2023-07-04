import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import patternReducer from './slices/patternSlice.ts';
import transportReducer from './slices/transportSlice.ts';
import logger from 'redux-logger';
import mixReducer from './slices/mixSlice.ts';

export const musicStore = configureStore({
  reducer: {
    pattern: patternReducer,
    transport: transportReducer,
    mix: mixReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type MusicDispatch = typeof musicStore.dispatch;
export type MusicState = ReturnType<typeof musicStore.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  MusicState,
  unknown,
  Action<string>
>;
