import axios from 'axios';
import { useInfiniteQuery } from 'react-query';

export default function useGetFeed() {
  return useInfiniteQuery(
    'postFeed',
    async ({ pageParam = 1 }) => {
      const res = await axios.get(`/api/posts/feed?page=${pageParam}&limit=5`);
      return res.data;
    },
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.endIndex >= lastPage.totalPages) return false;
        return lastPage.nextPage;
      },
    }
  );
}
