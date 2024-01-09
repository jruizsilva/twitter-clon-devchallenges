import { useMutation, useQueryClient } from "@tanstack/react-query";

import { fetchAddLikeToPost, fetchRemoveLikeToPost } from "services/posts";


const useToggleLikeMutation = (postId: string) => {
  const queryClient = useQueryClient()
  const mutationKey = ['toggle-like']

  const mutationFn = async (isLiked: boolean) => {
    if (isLiked) {
      return await fetchRemoveLikeToPost(postId)
    }

    return await fetchAddLikeToPost(postId)
  }

  const onSuccess = () => {
    queryClient.invalidateQueries({ queryKey: ['posts'] })
  }


  const { mutate: toggleLike, ...rest } = useMutation({
    mutationKey, mutationFn, onSuccess,
    onError: (error) => {
      console.dir(error)
    },

  })

  return { toggleLike, ...rest }
}

export { useToggleLikeMutation }