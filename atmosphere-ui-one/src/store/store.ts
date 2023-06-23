import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import kitReducer from './pattern/pattern';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    kit: kitReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
