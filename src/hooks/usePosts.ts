import { useQuery } from '@tanstack/react-query';
import { postService } from '../services/postService';

export const usePosts = () => {

  const postsQuery = useQuery({
    queryKey: ['posts'],
    queryFn: postService.list,
  });

  return {
    posts: postsQuery.data?.results ?? [],
    isLoading: postsQuery.isLoading,
    isError: postsQuery.isError,
  };
};