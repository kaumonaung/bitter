import axios from 'axios';
import { useQuery } from 'react-query';

export default function useGetPostById(postId) {
  return useQuery(['post', postId], async () => {
    try {
      const { data } = await axios.get(`/api/posts/${postId}`);
      return data;
    } catch (err) {
      console.error('No profile found');
      console.error(err.message);
      throw err.response.data.message;
    }
  });
}
