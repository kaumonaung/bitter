import { authMutateAxios } from '../config';
import { useQueryClient, useMutation } from 'react-query';

export default function useDeleteComment(postId, commentId, query) {
  const queryClient = useQueryClient();
  const authAxios = authMutateAxios();

  return useMutation(
    async () => {
      if (
        window.confirm(
          'Are you sure? This will permanently delete the comment!'
        )
      ) {
        try {
          await authAxios.delete(`/api/posts/comment/${postId}/${commentId}`);
        } catch (err) {
          console.error(err.message);
          throw err.response.data.message;
        }
      }
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(query);
      },
    }
  );
}
