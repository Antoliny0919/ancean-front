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
    name: '',
    email: '',
    introduce: '',
  },
  signin: {
    email: '',
    password: '',
    message: '',
  },
  modal: {
    state: false,
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
    changeModalState: (state, { payload }) => {
      state.modal.state = payload;
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
    builder.addCase(reIssueAccessToken.rejected, ({ modal }) => {
      modal.state = true;
      modal.message =
        '로그인이 필요한 서비스입니다. 로그인을 먼저 진행해주세요!';
    });
    builder.addCase(getUserData.fulfilled, (state, { payload }) => {
      state.user = { ...state.user, ...payload };
    });
  },
});

export const { changeValue, changeModalState } = authSlice.actions;
export default authSlice.reducer;
