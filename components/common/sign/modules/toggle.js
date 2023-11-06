import { createSlice } from '@reduxjs/toolkit';

const toggleInitialState = {
  tos: false,
  privacy: false,
  marketing: false,
};

const toggleSlice = createSlice({
  name: 'toggle',
  initialState: toggleInitialState,
  reducers: {
    reverseState: (state, { payload: { event } }) => {
      state[event.name] = !state[event.name];
    },
    reverseAllState: (state, { payload: { disagreeCnt } }) => {
      const keys = Object.keys(state);
      if (disagreeCnt > 0) {
        keys.map((key) => {
          state[key] = true;
        });
      } else {
        keys.map((key) => {
          state[key] = false;
        });
      }
    },
  },
});

export const { reverseState, reverseAllState } = toggleSlice.actions;

export default toggleSlice.reducer;
