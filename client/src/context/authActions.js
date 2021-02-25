import { authQueryAxios } from '../config';
import { USER_LOADED, AUTH_ERROR } from './types';

// Load user
export const loadUser = async (dispatch) => {
  const authAxios = authQueryAxios();

  try {
    const res = await authAxios.get('/api/auth');

    dispatch({ type: USER_LOADED, payload: res.data });
  } catch (err) {
    console.log('User not found');
    dispatch({ type: AUTH_ERROR });
    console.log(err.message);
  }
};
