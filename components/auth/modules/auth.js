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

const initialState = {
  signin: {
    email: '',
    password: '',
    message: '',
  },
  token: {
    access: '',
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
    builder.addCase(signin.fulfilled, (state, { payload }) => {
      const { refresh, access } = payload;
      cookies.set('refresh', refresh, {
        path: '/',
        secure: false,
        httpOnly: false,
        sameSite: false,
      });
      state.token.access = access;
    });
    builder.addCase(signin.rejected, (state, { payload }) => {
      state.signin.message = payload.data.detail;
    });
    builder.addCase(reIssueAccessToken.fulfilled, (state, { payload }) => {
      const { access } = payload;
      state.token.access = access;
    });
    builder.addCase(reIssueAccessToken.rejected, (state, { payload }) => {
      console.log(payload);
    });
  },
});

export const { changeValue } = authSlice.actions;
export default authSlice.reducer;
