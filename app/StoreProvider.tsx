'use client';
import { useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore } from '@/lib/redux/store';
import { hydrateAuth } from '@/lib/redux/features/auth/authSlice';

/**
 * StoreProvider Component
 * 
 * This component is a Client Component that ensures the Redux store is
 * initialized once and then provided to the rest of the application.
 */

export default function StoreProvider({
  children
}: {
  children: React.ReactNode
}) {
  // Use a ref to ensure the store is only created once on the client
  const storeRef = useRef<AppStore>(undefined);
  
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    const store = makeStore();
    storeRef.current = store;
    
    // Hydrate the store with data from localStorage
    store.dispatch(hydrateAuth());
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
