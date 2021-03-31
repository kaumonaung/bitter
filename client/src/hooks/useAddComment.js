import { authMutateAxios } from '../config';
import { useMutation, useQueryClient } from 'react-query';

export default function useAddComment(postId, query) {
  const queryClient = useQueryClient();
  const authAxios = authMutateAxios();

  return useMutation(
    async (values) => {
      try {
        const { data } = await authAxios.post(
          `/api/posts/comment/${postId}`,
          values
        );
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
