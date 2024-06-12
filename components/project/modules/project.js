import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedOption: null,
};

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    changeOption: (state, { payload }) => {
      console.log(payload);
      // state[selectedOption] = payload;
    },
  },
});

export const { changeOption } = projectSlice.actions;
export default projectSlice.reducer;
