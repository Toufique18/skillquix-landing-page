import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/**
 * Counter Slice Example
 * 
 * Slices are where define state, reducers, and actions.
 * Redux Toolkit uses Immer under the hood, write "mutating"
 * logic that is actually transformed into safe immutable updates.
 */

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
