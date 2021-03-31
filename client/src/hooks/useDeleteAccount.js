import { authMutateAxios } from '../config';
import { useMutation } from 'react-query';
import { ACCOUNT_DELETED } from '../context';
import { useHistory } from 'react-router-dom';

export default function useDeleteAccount(dispatch) {
  const authAxios = authMutateAxios();
  const history = useHistory();

  return useMutation(
    async () => {
      if (window.confirm('Are you sure? This can NOT be undone!')) {
        try {
          await authAxios.delete('api/profile');
          dispatch({ type: ACCOUNT_DELETED });
        } catch (err) {
          console.error(err.message);
          throw err.response.data.message;
        }
      }
    },
    {
      onSuccess: () => {
        history.push('/');
      },
    }
  );
}
