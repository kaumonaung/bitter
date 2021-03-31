import axios from 'axios';
import { useMutation } from 'react-query';
import { LOGIN_SUCCESS } from '../context';

const loginUser = async (values) => {
  try {
    const { data } = await axios.post('/api/auth', values);

    return data;
  } catch (err) {
    throw err.response.data.message;
  }
};

export default function useLoginUser(dispatch) {
  return useMutation(loginUser, {
    onSuccess: (data) => {
      dispatch({ type: LOGIN_SUCCESS });
      localStorage.setItem('token', data);
    },
  });
}
