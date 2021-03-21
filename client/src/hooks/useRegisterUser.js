import axios from 'axios';
import { useMutation } from 'react-query';

const registerUser = async (values) => {
  try {
    const { data } = await axios.post('/api/users', values);
    return data;
  } catch (err) {
    throw err.response.data.message;
  }
};

export default function useRegisterUser() {
  return useMutation(registerUser, {
    onSuccess: (data) => {
      localStorage.setItem('token', data.token);
    },
  });
}
