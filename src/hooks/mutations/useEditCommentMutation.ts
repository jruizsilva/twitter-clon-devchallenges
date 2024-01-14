import { useMutation, useQueryClient } from "@tanstack/react-query"

import { fetchEditComment } from "services/comment"

export const useEditCommentMutation = () => {
  const queryClient = useQueryClient()
  const mutationKey = ['edit-comment']

  const { mutate, ...rest } = useMutation({
    mutationKey,
    mutationFn: async (commentEditRequest: EditCommentRequest) => {
      return await fetchEditComment(commentEditRequest)
    }, onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] })
    },
    onError: (error) => {
      console.dir(error)
    }
  })

  return {
    editComment: mutate,
    ...rest
  }
}
