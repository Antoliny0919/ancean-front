import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as postAPI from '@/api/post';

export const createPost = createAsyncThunk(
  'editor/createPost',
  async (fields, { rejectWithValue }) => {
    let result = null;
    try {
      const response = await postAPI.createPost({
        ...fields,
      });
      result = response.data;
    } catch (err) {
      result = rejectWithValue(err.response);
    }
    return result;
  },
);

export const savePost = createAsyncThunk(
  'editor/savePost',
  async (fields, { rejectWithValue }) => {
    let result = null;
    try {
      const response = await postAPI.savePost({
        ...fields,
      });
      result = response.data;
    } catch (err) {
      result = rejectWithValue(err.response);
    }
    return result;
  },
);

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
  mainErrorMessage: '',
  subErrorMessage: '',
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
    builder.addCase(createPost.fulfilled, (_, { payload }) => {
      localStorage.setItem('beingWrittenPostId', payload.id);
    });
    builder.addCase(createPost.rejected, (state, { payload }) => {
      console.log(state, payload);
      // let errors = payload.data.errors;
      // let errorsCollection = [];
      // state.mainErrorMessage = payload.data.message;
    });
    builder.addCase(getPost.fulfilled, (state, { payload }) => {
      const { id, title, content, category, author } = payload[0];
      state = { ...state, title, selectedCategory: category, content, author };
      localStorage.setItem('beingWrittenPostId', id);
      return state;
    });
  },
});

export const { changeValue, forcedChangeValue } = editorSlice.actions;
export default editorSlice.reducer;
