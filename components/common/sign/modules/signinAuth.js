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

const initialState = {
  auth: null,
  authError: null,
};

const authSlice = createSlice({
  name: 'signinAuth',
  initialState,
  reducers: {},
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
    builder.addCase(signin.rejected, (state, action) => {
      console.log('rejected');
      console.log(action);
      state.auth = null;
      state.authError = '로그인 실패';
    });
  },
});

export default authSlice.reducer;
