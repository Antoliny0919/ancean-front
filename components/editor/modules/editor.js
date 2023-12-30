import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as postAPI from '@/api/post';

export const createPost = createAsyncThunk(
  'editor/createPost',
  async (fields) => {
    const response = await postAPI.createPost({
      ...fields,
    });
    return response.data;
  },
);

export const savePost = createAsyncThunk('editor/savePost', async (fields) => {
  const response = await postAPI.savePost({
    ...fields,
  });
  return response.data;
});

export const getPost = createAsyncThunk('editor/getPost', async (id) => {
  const response = await postAPI.getPost(id);
  return response.data;
});

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
      state[payload.target.name] = payload.target.value;
    },
    forcedChangeValue: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createPost.fulfilled, (state, { payload }) => {
      localStorage.setItem('beingWrittenPostId', payload.id);
    });
    builder.addCase(getPost.fulfilled, (state, { payload }) => {
      const { title, content, author } = payload[0];
      state = { ...state, title, content, author };
      console.log(state);
      return state;
    });
  },
});

export const { changeValue, forcedChangeValue } = editorSlice.actions;
export default editorSlice.reducer;
