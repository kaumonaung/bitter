import axios from 'axios';
import { useMutation } from 'react-query';

const loginUser = async (values) => {
  try {
    const res = await axios.post('/api/auth', values);
    return res.data;
  } catch (err) {
    throw err.response.data.message;
  }
};

export default function useLoginUser() {
  return useMutation(loginUser);
}
