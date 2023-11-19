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
    // Ex) use unregistred Oauth user
    fillInputandAnnotation: (
      state,
      { payload: { name, value, annotation } },
    ) => {
      const signupForm = state['signup']['form'];
      const signupAnnotation = state['signup']['annotation'];
      signupForm[name] = value;
      signupAnnotation[name] = annotation;
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
    builder.addCase(HYDRATE, (state, actions) => {
      return { ...state, ...actions.payload };
    });
  },
});

export const {
  resetInput,
  changeInput,
  fillInputandAnnotation,
  changeAnnotation,
  clearAuthcodeInput,
} = signFieldSlice.actions;

export default signFieldSlice.reducer;
