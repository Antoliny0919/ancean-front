import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Cookies } from 'react-cookie';
import * as authAPI from '../../../api/auth';

const cookies = new Cookies();

export const signin = createAsyncThunk(
  'auth/signin',
  async ({ email, password }, { rejectWithValue }) => {
    let result = null;
    try {
      const response = await authAPI.signin({ email, password });
      result = response.data;
    } catch (err) {
      result = rejectWithValue(err.response);
    }
    return result;
  },
);

export const reIssueAccessToken = createAsyncThunk(
  'auth/reIssueAccessToken',
  async ({ refresh }, { rejectWithValue }) => {
    let result = null;
    try {
      const response = await authAPI.reIssueAccessToken({ refresh });
      result = response.data;
    } catch (err) {
      result = rejectWithValue(err.response);
    }
    return result;
  },
);

export const getUserData = createAsyncThunk(
  'auth/getUserData',
  async ({ query, headers }, { rejectWithValue }) => {
    let result = null;
    try {
      const response = await authAPI.getUserData({ query, headers });
      result = response.data;
    } catch (err) {
      result = rejectWithValue(err.response);
    }
    return result;
  },
);

const initialState = {
  user: {
    token: {
      access: '',
    },
    object: {},
    // name: '',
    // email: '',
    // introduce: '',
    // isStaff: null,
  },
  signin: {
    email: '',
    password: '',
    message: '',
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    changeValue: (state, { payload }) => {
      const signin = state.signin;
      signin[payload.target.name] = payload.target.value;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signin.fulfilled, ({ user }, { payload }) => {
      const { refresh, access } = payload;
      cookies.set('refresh', refresh, {
        path: '/',
        secure: false,
        httpOnly: false,
        sameSite: false,
      });
      user.token.access = access;
    });
    builder.addCase(signin.rejected, ({ signin }, { payload }) => {
      signin.message = payload.data.detail;
    });
    builder.addCase(reIssueAccessToken.fulfilled, ({ user }, { payload }) => {
      const { access } = payload;
      user.token.access = access;
    });
    builder.addCase(reIssueAccessToken.rejected, (state) => {
      state.user.object = null;
    });
    builder.addCase(getUserData.fulfilled, (state, { payload }) => {
      state.user.object = { ...payload };
    });
  },
});

export const { changeValue } = authSlice.actions;
export default authSlice.reducer;
