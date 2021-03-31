import { authMutateAxios } from '../config';
import { useMutation, useQueryClient } from 'react-query';

export default function useCreatePost(query) {
  const queryClient = useQueryClient();
  const authAxios = authMutateAxios();

  return useMutation(
    async (values) => {
      try {
        const res = await authAxios.post('/api/posts', values);
        return res;
      } catch (err) {
        console.error(err.message);
        throw err.response.data.message;
      }
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(query);
      },
    }
  );
}
