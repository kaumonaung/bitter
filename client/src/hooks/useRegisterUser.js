import axios from 'axios';
import { useMutation } from 'react-query';
import { REGISTER_SUCCESS } from '../context';

const registerUser = async (values) => {
  try {
    const { data } = await axios.post('/api/users', values);
    return data;
  } catch (err) {
    throw err.response.data.message;
  }
};

export default function useRegisterUser(dispatch) {
  return useMutation(registerUser, {
    onSuccess: (data) => {
      dispatch({
        type: REGISTER_SUCCESS,
      });
      localStorage.setItem('token', data.token);
    },
  });
}
