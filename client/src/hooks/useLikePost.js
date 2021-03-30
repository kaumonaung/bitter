import { authMutateAxios } from '../config';
import { useMutation, useQueryClient } from 'react-query';

export default function useLikePost(postId, query) {
  const authAxios = authMutateAxios();
  const queryClient = useQueryClient();

  return useMutation(
    async () => {
      try {
        const res = await authAxios.put(`/api/posts/like/${postId}`);
        return res.data;
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
