import { createSlice } from '@reduxjs/toolkit';

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
      password: ''
    }
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
    changeAnnotation: (state, { payload: { step, name, value } }) => {
      const annotation = state[step]['annotation'];
      annotation[name] = value;
    },
    clearAuthcodeInput: (state) => {
      state['signup']['form']['authcode'] = '';
    },
  },
});

export const { resetInput, changeInput, changeAnnotation, clearAuthcodeInput } =
  signFieldSlice.actions;

export default signFieldSlice.reducer;
