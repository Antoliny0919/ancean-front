import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { setJWTToken } from '@/components/common/cookies/jwt';
import * as authAPI from '@/api/auth';

export const signin = createAsyncThunk(
  'auth/signin',
  async ({ email, password }) => {
    const response = await authAPI.signin({ email, password });
    return response.data;
  },
);

export const oauthSignin = createAsyncThunk(
  'auth/oauthSignin',
  async ({ social, code }) => {
    const response = await authAPI.oauthSignin({ social, code });
    return response.data;
  },
);

const initialState = {
  user: null,
  auth: null,
  authError: null,
};

const authSlice = createSlice({
  name: 'signinAuth',
  initialState,
  reducers: {
    changeMessage: (state, action) => {
      state.authError = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signin.fulfilled, (state, { payload }) => {
      state.user = payload.user;
      setJWTToken(payload.token);
      state.auth = true;
      state.authError = null;
    });
    builder.addCase(signin.rejected, (state) => {
      state.auth = null;
      state.authError = '입력과 일치하는 계정이 존재하지 않습니다.';
    });
    builder.addCase(oauthSignin.fulfilled, (state, { payload }) => {
      // oauth login success and client already register
      if (payload.token) {
        state.user = payload.user;
        setJWTToken(payload.token);
        state.auth = true;
        state.authError = null;
      }
    });
  },
});

export const { changeMessage } = authSlice.actions;

export default authSlice.reducer;
