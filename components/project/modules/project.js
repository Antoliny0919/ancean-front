import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedOption: null,
  createForm: {
    title: '',
    description: '',
    startDate: '',
  },
};

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    changeOption: (state, { payload }) => {
      state['selectedOption'] = payload;
    },
    changeInputValue: (state, { payload: { option, name, value } }) => {
      state[option][name] = value;
    },
  },
});

export const { changeOption, changeInputValue } = projectSlice.actions;
export default projectSlice.reducer;
