import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { postService } from '../services/postService';
import { toast } from 'sonner';

export const usePosts = () => {
  const queryClient = useQueryClient();

  const postsQuery = useQuery({
    queryKey: ['posts'],
    queryFn: postService.list,
  });

  const createMutation = useMutation({
    mutationFn: postService.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
      toast.success('Post created successfully!');
    },
    onError: () => toast.error('Failed to create post'),
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }: { id: number; data: any }) => postService.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
      toast.success('Post updated successfully!');
    },
    onError: () => toast.error('Failed to update post'),
  });

  return {
    posts: postsQuery.data?.results ?? [],
    isLoading: postsQuery.isLoading,
    isError: postsQuery.isError,
    createPost: createMutation.mutate,
    updatePost: updateMutation.mutate,
    isMutating: createMutation.isPending,
    isUpdating: updateMutation.isPending,
  };
};