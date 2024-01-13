import { useMutation, useQueryClient } from '@tanstack/react-query'

import { fetchLikeComment, fetchRemoveLikeComment } from 'services/comment'

const useToggleCommentLikeMutation = (likeRequest: LikeRequest) => {
  const queryClient = useQueryClient()
  const mutationKey = ['toggle-like']

  const { mutate: toggleCommentLike, ...rest } = useMutation({
    mutationKey,
    mutationFn: async (isLiked: boolean) => {
      if (isLiked) {
        return await fetchRemoveLikeComment(likeRequest)
      }

      return await fetchLikeComment(likeRequest)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] })
    },
    onError: (error) => {
      console.dir(error)
    }
  })

  return { toggleCommentLike, ...rest }
}

export { useToggleCommentLikeMutation }
