import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  signup: {
    form: {
      email: '',
      authcode: '',
      password1: '',
      password2: '',
      introduce: '',
    },
    annotation: {
      email: '',
      authcode: '',
      password1: '',
      password2: '',
      introduce: '',
    },
  },
  signin: {
    form: {
      email: '',
      password: '',
    },
    annotation: {
      email: '',
      password: '',
    },
  },
};

const signFieldSlice = createSlice({
  name: 'field',
  initialState: initialState,
  reducers: {
    resetInput: (state) => {
      state = initialState;
      return state;
    },
    changeInput: (state, { payload: { step, input } }) => {
      const form = state[step]['form'];
      form[input.name] = input.value;
    },
    fillOauthEmail: (state, { payload }) => {
      console.log(payload);
      const signupEmail = state['signup']['form'];
      signupEmail['email'] = payload;
    },
    changeAnnotation: (state, { payload: { step, name, value } }) => {
      const annotation = state[step]['annotation'];
      annotation[name] = value;
    },
    clearAuthcodeInput: (state) => {
      state['signup']['form']['authcode'] = '';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state) => {
      console.log(state);
      return { ...state };
    });
  },
});

export const {
  resetInput,
  changeInput,
  fillOauthEmail,
  changeAnnotation,
  clearAuthcodeInput,
} = signFieldSlice.actions;

export default signFieldSlice.reducer;
