import axios from 'axios';
import { useQuery } from 'react-query';

export default function useGetProfileById(userId) {
  return useQuery(['profile', userId], async () => {
    try {
      const { data } = await axios.get(`/api/profile/${userId}`);
      return data;
    } catch (err) {
      console.error('No profile found');
      console.error(err.message);
      throw err.response.data.message;
    }
  });
}
