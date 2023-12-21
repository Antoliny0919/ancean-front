import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
  fieldCategory: '',
  selectedCategory: '',
  content: '',
  author: '',
};

const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    changeValue: (state, { payload }) => {
      console.log(payload);
      state[payload.target.name] = payload.target.value;
    },
    forcedChangeValue: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
  },
  extraReducers: {},
});

export const { changeValue, forcedChangeValue } = editorSlice.actions;
export default editorSlice.reducer;
