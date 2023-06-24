import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import patternReducer from './slices/pattern';
import transportReducer from './slices/transport';
import logger from 'redux-logger';
import mixReducer from './slices/mix';

export const store = configureStore({
  reducer: {
    pattern: patternReducer,
    transport: transportReducer,
    mix: mixReducer,
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
