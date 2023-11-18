import { Cookies } from 'react-cookie';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
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
    console.log(response);
    return response.data;
  },
);

const initialState = {
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
    builder.addCase(
      signin.fulfilled,
      (state, { payload: { refresh, access } }) => {
        const cookies = new Cookies();
        cookies.set('access_token', access);
        cookies.set('refresh_token', refresh);
        state.auth = true;
        state.authError = null;
      },
    );
    builder.addCase(signin.rejected, (state) => {
      state.auth = null;
      state.authError = '입력과 일치하는 계정이 존재하지 않습니다.';
    });
  },
});

export const { changeMessage } = authSlice.actions;

export default authSlice.reducer;
