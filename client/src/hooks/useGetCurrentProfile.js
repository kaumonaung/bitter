import { authMutateAxios } from '../config';
import { useQuery } from 'react-query';

const getCurrentProfile = async () => {
  const authAxios = authMutateAxios();

  try {
    const { data } = await authAxios.get('/api/profile/me');
    return data;
  } catch (err) {
    console.error('No profile found');
    console.error(err.message);
    throw err.response.data.message;
  }
};

export default function useGetCurrentProfile(isEnabled = true) {
  return useQuery('profile', getCurrentProfile, { enabled: isEnabled });
}
