import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { MusicState, MusicDispatch } from './music';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useMusicDispatch: () => MusicDispatch = useDispatch;
export const useMusicSelector: TypedUseSelectorHook<MusicState> = useSelector;
