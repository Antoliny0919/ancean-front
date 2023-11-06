import { Cookies } from 'react-cookie';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as authAPI from '@/api/auth';

export const signin = createAsyncThunk(
  'auth/signin',
  async ({ id, password }) => {
    const response = await authAPI.signIn({ id, password });
    return response.data;
  },
);

export const getAuthcode = createAsyncThunk(
  'auth/signup',
  async ({ email }) => {
    const response = await authAPI.getAuthcode({ email });
    return response.data;
  },
);

const initialState = {
  signin: {
    auth: null,
    authError: null,
  },
  signup: {
    auth: null,
    authcode: null,
    message: null,
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authcodeAuthSuccess: (state, { payload }) => {
      state.signup.auth = true;
      state.signup.authcode = null;
      state.message = payload;
    },
    authcodeAuthFail: (state, { payload }) => {
      state.message = payload;
    },
    clearAuthState: (state) => {
      state.auth = null;
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      signin.fulfilled,
      ({ signIn }, { payload: { access_token, refresh_token } }) => {
        const cookies = new Cookies();
        cookies.set('access_token', access_token);
        cookies.set('refresh_token', refresh_token);
        console.log(1);
        signIn.auth = true;
        signIn.authError = null;
      },
    );
    builder.addCase(signin.rejected, ({ signIn }, action) => {
      console.log('rejected');
      console.log(action);
      signIn.auth = null;
      signIn.authError = '로그인 실패';
    });
    builder.addCase(getAuthcode.fulfilled, (state, { payload }) => {
      state.signup.authcode = payload.authcode;
      state.signup.message = payload.message;
    });
    builder.addCase(getAuthcode.rejected, (state, action) => {
      console.log(action);
    });
  },
});

export default authSlice.reducer;
