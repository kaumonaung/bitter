import axios from 'axios';
import { useMutation } from 'react-query';

const registerUser = async (values) => {
  try {
    const res = await axios.post('/api/users', values);
    return res.data;
  } catch (err) {
    throw err.response.data.message;
  }
};

export default function useRegisterUser() {
  return useMutation(registerUser);
}
