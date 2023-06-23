import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import kitReducer from './pattern/pattern';

export const store = configureStore({
  reducer: {
    kit: kitReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
