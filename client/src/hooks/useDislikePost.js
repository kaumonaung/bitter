import { authMutateAxios } from '../config';
import { useMutation, useQueryClient } from 'react-query';

export default function useDislikePost(postId, query) {
  const authAxios = authMutateAxios();
  const queryClient = useQueryClient();

  return useMutation(
    async () => {
      try {
        const { data } = await authAxios.put(`/api/posts/unlike/${postId}`);
        return data;
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
