import { authMutateAxios } from '../config';
import { useMutation } from 'react-query';

const mutateProfile = async (values) => {
  const authAxios = authMutateAxios();

  try {
    const { data } = await authAxios.post('/api/profile', values);
    return data;
  } catch (err) {
    console.error(err.message);
    throw err.response.data.message;
  }
};

export default function usePostProfile() {
  return useMutation(mutateProfile);
}
