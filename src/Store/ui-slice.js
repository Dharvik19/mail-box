import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: { isVisible: false, notification: null },
  reducers: {
    toggle(state) {
      state.isVisible = !state.isVisible;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;