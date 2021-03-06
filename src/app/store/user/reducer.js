// @flow
import type { CurrentUser } from 'common/types';
import getJwt from './utils/jwt';
import {
  SIGN_IN_SUCCESFULL,
  SIGN_OUT,
  SET_CURRENT_USER,
  SET_USER_SANDBOXES,
} from './actions';

const initialState: CurrentUser = {
  id: null,
  email: null,
  name: null,
  username: null,
  avatarUrl: null,
  jwt: getJwt(),
};

export default (state: CurrentUser = initialState, action: Object) => {
  switch (action.type) {
    case SIGN_IN_SUCCESFULL:
      return {
        ...state,
        jwt: action.jwt,
      };
    case SIGN_OUT:
      return {
        ...initialState,
        jwt: null,
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        ...action.data,
      };
    case SET_USER_SANDBOXES:
      return {
        ...state,
        sandboxes: action.data,
      };
    default: {
      return state;
    }
  }
};
