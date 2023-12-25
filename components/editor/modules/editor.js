import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as postAPI from '@/api/post';

export const savePost = createAsyncThunk(
  'editor/savePost',
  async ({ title, author, category, content, state }) => {
    const response = await postAPI.savePost({
      title,
      author,
      category,
      content,
      state,
    });
    return response.data;
  },
);

const initialState = {
  postId: null,
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
  extraReducers: (builder) => {
    builder.addCase(savePost.fulfilled, (state, { payload }) => {
      state.postId = payload.id;
      localStorage.setItem('beingWrittenPostId', payload.id);
    });
  },
});

export const { changeValue, forcedChangeValue } = editorSlice.actions;
export default editorSlice.reducer;
