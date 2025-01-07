
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  entry: null,
  isAuthenticated: false,
};

const entrySlice = createSlice({
  name: 'entry',
  initialState,
  reducers: {
    setEntry: (state, action) => {
      state.entry = action.payload;
      state.isAuthenticated = true;
    },
    clearEntry: (state) => {
      state.entry = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setEntry, clearEntry } = entrySlice.actions;
export default entrySlice.reducer;
