import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { client } from '../../../api/client';
import * as postAPI from '@/api/post';
import * as imageAPI from '@/api/image';

export const getPost = createAsyncThunk(
  'editor/getPost',
  async ({ query, headers = {} }, { rejectWithValue }) => {
    let result = null;
    try {
      const response = await postAPI.getPost({ query, headers });
      result = response.data;
    } catch (err) {
      result = rejectWithValue(err.response);
    }
    return result;
  },
);

export const createPost = createAsyncThunk(
  'editor/createPost',
  async ({ body, headers }, { rejectWithValue }) => {
    let result = null;
    try {
      const response = await postAPI.createPost({
        body,
        headers,
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
  async ({ body, headers }, { rejectWithValue }) => {
    let result = null;
    try {
      const response = await postAPI.savePost({
        body,
        headers,
      });
      result = response.data;
    } catch (err) {
      result = rejectWithValue(err.response);
    }
    return result;
  },
);

export const uploadHeaderImage = createAsyncThunk(
  'editor/uploadHeaderImage',
  async ({ formData, headers }) => {
    const response = await imageAPI.uploadImage({ formData, headers });
    return response.data;
  },
);

const initialState = {
  title: '',
  introduce: '',
  selectedCategory: '',
  headerImage: '',
  headerImagePath: '',
  content: [],
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
    // get the post data and puts the editor in that post data state
    builder.addCase(getPost.fulfilled, (state, { payload }) => {
      const { id, title, content, category, header_image, introduce } = payload;
      state = {
        notificationState: state.notificationState,
        title,
        introduce,
        selectedCategory: category,
        headerImagePath: `${client.defaults.baseURL}/${header_image}`,
        content,
      };
      localStorage.setItem('beingWrittenPostId', id);
      return state;
    });
    builder.addCase(getPost.rejected, (state, { payload }) => {
      // if getPost rejected, when permissions do not exist
      const message = payload.data.detail;
      state.notificationState = false;
      state.notificationMessage = message;
    });
    // when post create or save successful, the user check result through the notification value on the editor page
    // (notificationState, notificationMessage)
    builder.addCase(createPost.fulfilled, (state, { payload }) => {
      if (payload.redirect_path) {
        // when createPost, savePost is successful,
        // the presence of redirect_path in the response means that the post is published
        // so notification not set --> it moves to the redirect_path and leaves the editor page
        return;
      }
      state.notificationState = true;
      state.notificationMessage = payload.detail;
      localStorage.setItem('beingWrittenPostId', payload.id);
    });
    builder.addCase(createPost.rejected, (state, { payload }) => {
      state.notificationState = false;
      state.notificationMessage = payload.data.detail;
    });
    builder.addCase(savePost.fulfilled, (state, { payload }) => {
      if (payload.redirect_path) {
        localStorage.removeItem('beingWrittenPostId', payload.id);
        return;
      }
      state.notificationState = true;
      state.notificationMessage = payload.detail;
    });
    builder.addCase(savePost.rejected, (state, { payload }) => {
      state.notificationState = false;
      state.notificationMessage = payload.data.detail;
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
