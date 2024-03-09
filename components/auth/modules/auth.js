import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as authAPI from '../../../api/auth';

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

const initialState = {
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
    builder.addCase(signin.fulfilled, (state, { payload }) => {
      console.log(payload);
    });
    builder.addCase(signin.rejected, (state, { payload }) => {
      console.log(payload);
    });
  },
});

export const { changeValue } = authSlice.actions;
export default authSlice.reducer;
