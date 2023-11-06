import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as authAPI from '@/api/auth';

export const getAuthcode = createAsyncThunk(
  'auth/signup',
  async ({ email }) => {
    const response = await authAPI.getAuthcode({ email });
    return response.data;
  },
);

const initialState = {
  auth: null,
  authcode: null,
  message: null,
};

const signupAuthSlice = createSlice({
  name: 'signupAuth',
  initialState,
  reducers: {
    authcodeAuthSuccess: (state, { payload }) => {
      state.auth = true;
      state.authcode = null;
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
    builder.addCase(getAuthcode.fulfilled, (state, { payload }) => {
      state.authcode = payload.authcode;
      state.message = payload.message;
    });
    builder.addCase(getAuthcode.rejected, (state, action) => {
      console.log(action);
    });
  },
});

export const { authcodeAuthSuccess, authcodeAuthFail, clearAuthState } =
  signupAuthSlice.actions;
export default signupAuthSlice.reducer;
