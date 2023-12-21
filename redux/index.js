import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import field from '../components/common/sign/modules/field';
import signupAuth from '../components/common/sign/modules/signupAuth';
import signinAuth from '../components/common/sign/modules/signinAuth';
import toggle from '../components/common/sign/modules/toggle';
import editor from '../components/editor/modules/editor';

const isProduction = process.env.NODE_ENV === 'production';

const rootReducer = combineReducers({
  field,
  signupAuth,
  signinAuth,
  toggle,
  editor,
});

export const makeStore = () => {
  const store = configureStore({
    reducer: (state, action) => {
      switch (action.type) {
        case HYDRATE:
          return { ...state, ...action.payload.sideOpend };
        default:
          return rootReducer(state, action);
      }
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
    ...(isProduction ? { devTools: false } : { devTools: true }),
  });
  return store;
};

const wrapper = createWrapper(makeStore, { debug: !isProduction });

export default wrapper;
