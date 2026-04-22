import { useDispatch, useSelector, useStore } from 'react-redux';
import type { RootState, AppDispatch, AppStore } from './store';

/**
 * Typed Redux Hooks
 * 
 * These hooks are pre-typed with our RootState and AppDispatch types,
 * which avoids repetitive typing and provides better IDE support.
 */

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();
