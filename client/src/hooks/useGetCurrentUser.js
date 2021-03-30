import { authMutateAxios } from '../config';
import { useQuery } from 'react-query';
import { USER_LOADED } from '../context';

export default function useGetCurrentUser(dispatch, isEnabled = true) {
  const authAxios = authMutateAxios();

  return useQuery(
    'user',
    async () => {
      try {
        const { data } = await authAxios.get('/api/auth');
        dispatch({ type: USER_LOADED, payload: data });
        return data;
      } catch (err) {
        console.error('No user found');
        console.error(err.message);
        throw err.response.data.message;
      }
    },
    { enabled: isEnabled }
  );
}
