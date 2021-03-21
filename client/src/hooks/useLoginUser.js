import axios from 'axios';
import { useMutation } from 'react-query';

const loginUser = async (values) => {
  try {
    const { data } = await axios.post('/api/auth', values);
    return data;
  } catch (err) {
    throw err.response.data.message;
  }
};

export default function useLoginUser() {
  return useMutation(loginUser, {
    onSuccess: (data) => {
      localStorage.setItem('token', data);
    },
  });
}
