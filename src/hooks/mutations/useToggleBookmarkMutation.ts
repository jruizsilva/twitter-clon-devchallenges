import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { fetchAddPostToPostsSaved, fetchRemovePostFromPostsSaved } from "services/posts";


const useToggleBookmarkMutation = (postId: string) => {
  const queryClient = useQueryClient()
  const mutationKey = ['toggle-like']

  const mutationFn = async (isPostSavedInBookmarks: boolean) => {
    if (isPostSavedInBookmarks) {
      return await fetchRemovePostFromPostsSaved(postId)
    }

    return await fetchAddPostToPostsSaved(postId)
  }

  const onSuccess = () => {
    queryClient.invalidateQueries({ queryKey: ['posts'] })
  }


  const { mutate: toggleBookmark, ...rest } = useMutation({
    mutationKey, mutationFn, onSuccess,
    onError: (error) => {
      console.dir(error)
    },

  })

  return { toggleBookmark, ...rest }
}

export { useToggleBookmarkMutation }