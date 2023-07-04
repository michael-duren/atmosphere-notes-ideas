import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import loadReducer from './slices/loadSlice.ts';

export const appStore = configureStore({
  reducer: {
    loading: loadReducer,
  },
});

export type AppDispatch = typeof appStore.dispatch;
export type AppState = ReturnType<typeof appStore.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;
