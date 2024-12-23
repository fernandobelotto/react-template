import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";

// Define a type for the slice state
interface CountState {
  count: number;
}

const initialState: CountState = {
  count: 0,
};

export const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
  },
});

export const { increment } = countSlice.actions;

export const selectCount = (state: RootState) => state.count.count;

export default countSlice.reducer;
