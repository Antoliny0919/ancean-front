import { combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import field from '../components/common/sign/modules/field';
import signupAuth from '../components/common/sign/modules/signupAuth';
import signinAuth from '../components/common/sign/modules/signinAuth';
import toggle from '../components/common/sign/modules/toggle';

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;

    default:
      return combineReducers({ field, signinAuth, toggle, signupAuth })(
        state,
        action,
      );
  }
};

export default rootReducer;
