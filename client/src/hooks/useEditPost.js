import { authMutateAxios } from '../config';
import { useMutation, useQueryClient } from 'react-query';

export default function useEditPost(postId) {
  const authAxios = authMutateAxios();
  const queryClient = useQueryClient();

  return useMutation(
    async (values) => {
      try {
        await authAxios.put(`/api/posts/${postId}`, values);
      } catch (err) {
        console.error(err.message);
        throw err.response.data.message;
      }
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('userPosts');
      },
    }
  );
}
