import { authMutateAxios } from '../config';
import { useMutation, useQueryClient } from 'react-query';

const createPost = async (values) => {
  const authAxios = authMutateAxios();

  try {
    const res = await authAxios.post('/api/posts', values);
    return res;
  } catch (err) {
    console.error(err.message);
    throw err.response.data.message;
  }
};

export default function useCreatePost() {
  const queryClient = useQueryClient();

  return useMutation(createPost, {
    onSuccess: () => {
      queryClient.invalidateQueries('userPosts');
    },
  });
}
