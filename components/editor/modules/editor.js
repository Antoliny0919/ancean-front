import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as postAPI from '@/api/post';
import * as imageAPI from '@/api/image';

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

export const deletePost = createAsyncThunk(
  'editor/deletePost',
  async ({ id }, { rejectWithValue }) => {
    let result = null;
    try {
      const response = await postAPI.deletePost(id);
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

export const uploadHeaderImage = createAsyncThunk(
  'editor/uploadHeaderImage',
  async ({ formData }) => {
    const response = await imageAPI.uploadImage({ formData });
    return response.data;
  },
);

const initialState = {
  title: '',
  fieldCategory: '',
  selectedCategory: '',
  headerImage: '',
  headerImagePath: '',
  content: '',
  author: '',
  notificationState: null,
  notificationMessage: '',
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
    resetNotificationState: (state) => {
      state.notificationState = null;
    },
    resetHeaderImageState: (state) => {
      state.headerImagePath = '';
      state.headerImage = '';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createPost.fulfilled, (state, { payload }) => {
      if (payload.redirect_path) {
        return;
      }
      state.notificationState = true;
      state.notificationMessage = payload.message;
      localStorage.setItem('beingWrittenPostId', payload.id);
    });
    builder.addCase(createPost.rejected, (state, { payload }) => {
      state.notificationState = false;
      state.notificationMessage = payload.data.message;
    });
    builder.addCase(savePost.fulfilled, (state, { payload }) => {
      if (payload.redirect_path) {
        localStorage.removeItem('beingWrittenPostId', payload.id);
      }
      state.notificationState = true;
      state.notificationMessage = payload.message;
    });
    builder.addCase(getPost.fulfilled, (state, { payload }) => {
      const { id, title, content, category, author } = payload[0];
      state = { ...state, title, selectedCategory: category, content, author };
      localStorage.setItem('beingWrittenPostId', id);
      return state;
    });
    builder.addCase(uploadHeaderImage.fulfilled, (state, { payload }) => {
      state['headerImagePath'] = payload.file.url;
      state['headerImage'] = payload.file.name;
    });
  },
});

export const {
  changeValue,
  forcedChangeValue,
  resetNotificationState,
  resetHeaderImageState,
} = editorSlice.actions;
export default editorSlice.reducer;
