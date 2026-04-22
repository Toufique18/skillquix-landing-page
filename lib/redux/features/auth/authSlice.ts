import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/**
 * Auth Slice
 * 
 * Manages the user's authentication state and profile information.
 */

interface UserState {
  name: string | null;
  email: string | null;
  isAuthenticated: boolean;
}

interface AuthState {
  user: UserState;
  token: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: {
    name: null,
    email: null,
    isAuthenticated: false,
  },
  token: null,
  loading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setCredentials: (
      state,
      action: PayloadAction<{ name: string; email: string; token?: string }>
    ) => {
      const { name, email, token } = action.payload;
      state.user.name = name;
      state.user.email = email;
      state.user.isAuthenticated = true;
      if (token) state.token = token;
      
      // Persist to localStorage as well for backup/hydration
      localStorage.setItem('user_name', name);
      localStorage.setItem('user_email', email);
      if (token) localStorage.setItem('user_token', token);
    },
    logout: (state) => {
      state.user.name = null;
      state.user.email = null;
      state.user.isAuthenticated = false;
      state.token = null;
      
      localStorage.removeItem('user_name');
      localStorage.removeItem('user_email');
      localStorage.removeItem('user_token');
      localStorage.removeItem('user_password');
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    hydrateAuth: (state) => {
      // Manual hydration from localStorage
      if (typeof window !== 'undefined') {
        const name = localStorage.getItem('user_name');
        const email = localStorage.getItem('user_email');
        const token = localStorage.getItem('user_token');
        
        if (name && email) {
          state.user.name = name;
          state.user.email = email;
          state.user.isAuthenticated = true;
          state.token = token;
        }
      }
    }
  },
});

export const { setLoading, setCredentials, logout, setError, hydrateAuth } = authSlice.actions;

export default authSlice.reducer;
