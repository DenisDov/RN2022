import { createSelector, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../../app/store';

type CounterState = {
  value: number;
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 } as CounterState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, { payload }: PayloadAction<number>) => {
      state.value += payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Selectors start
const selectSelf = (state: RootState) => state.counter;
export const getCounterSelector = createSelector(
  selectSelf,
  counter => counter.value,
);
// Selectors end

export default counterSlice.reducer;
