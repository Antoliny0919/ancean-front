import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as authAPI from '@/api/auth';
import { setJWTToken } from '../../cookies/jwt';

export const getAuthcode = createAsyncThunk(
  'auth/getAuthcode',
  async ({ email }, { rejectWithValue }) => {
    let result = null;
    try {
      const response = await authAPI.getAuthcode({ email });
      result = response.data;
    } catch (err) {
      result = rejectWithValue(err.response);
    }
    return result;
  },
);

export const loadSignup = createAsyncThunk(
  'auth/loadSignup',
  async (formData, { rejectWithValue }) => {
    let result = null;
    try {
      const response = await authAPI.loadSignup(formData);
      result = response.data;
    } catch (err) {
      result = rejectWithValue(err.response);
    }
    return result;
  },
);

const initialState = {
  auth: null,
  authcode: null,
  message: null,
  state: false,
};

const signupAuthSlice = createSlice({
  name: 'signupAuth',
  initialState,
  reducers: {
    authcodeAuthSuccess: (state) => {
      state.auth = true;
      state.authcode = null;
    },
    authFail: (state, { payload }) => {
      state.message = payload;
      state.auth = false;
    },
    clearAuthState: (state) => {
      state.auth = null;
      state.message = null;
    },
    changeState: (state) => {
      state.state = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAuthcode.fulfilled, (state, { payload }) => {
      let now = new Date().getTime();
      // authcode valid time --> 5minute
      let validTime = now + 1000 * 64 * 5;
      state.authcode = { value: payload.authcode, validTime: validTime };
      state.message = payload.message;
      console.log(payload);
    });
    builder.addCase(loadSignup.fulfilled, (state, { payload }) => {
      setJWTToken(payload.token);
      state.state = true;
    });
    builder.addCase(loadSignup.rejected, (_, { payload: { data } }) => {
      console.log(data);
    });
  },
});

export const { authcodeAuthSuccess, authFail, clearAuthState, changeState } =
  signupAuthSlice.actions;
export default signupAuthSlice.reducer;
