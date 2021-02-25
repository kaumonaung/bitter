import {
  USER_LOADED,
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  AUTH_ERROR,
  LOGOUT,
  ACCOUNT_DELETED,
} from './types';

export const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  user: null,
};

export const AuthReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      return { ...state, isAuthenticated: true, user: payload };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
      };

    case AUTH_ERROR:
    case LOGOUT:
    case ACCOUNT_DELETED:
      return { ...state, isAuthenticated: null, token: null, user: null };

    default:
      return state;
  }
};
