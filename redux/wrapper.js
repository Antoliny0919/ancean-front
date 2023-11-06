import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import rootReducer from './reducer';

const isProduction = process.env.NODE_ENV === 'production';

const makeStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }),
    ...(isProduction ? { devTools: false } : { devTools: true }),
  });
  return store;
};

const wrapper = createWrapper(makeStore, { debug: !isProduction });

export default wrapper;
