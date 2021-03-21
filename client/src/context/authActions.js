import { authQueryAxios } from '../config';
import { USER_LOADED, AUTH_ERROR, ACCOUNT_DELETED } from './types';
import { authMutateAxios } from '../config';

// Load user
export const loadUser = async (dispatch) => {
  const authAxios = authQueryAxios();

  try {
    const res = await authAxios.get('/api/auth');

    dispatch({ type: USER_LOADED, payload: res.data });

    console.log('User loaded');
  } catch (err) {
    console.log('User not found');
    dispatch({ type: AUTH_ERROR });
    console.log(err.message);
  }
};

// Delete account
export const deleteAccount = async (dispatch) => {
  const authAxios = authMutateAxios();

  if (window.confirm('Are you sure? This can NOT be undone!')) {
    try {
      await authAxios.delete('api/profile');

      dispatch({ type: ACCOUNT_DELETED });

      return true;
    } catch (err) {
      console.error(err.message);
      throw err.response.data.message;
    }
  } else {
    return false;
  }
};
