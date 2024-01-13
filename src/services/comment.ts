import { protectedInstance } from 'api/axiosInstances'

const fetchAddCommentToPost = async (postId: string, commentRequest: CommentRequest) => {
  const response = await protectedInstance.post<Post>(
    `/comments/posts/${postId}/addComment`, commentRequest
  )
  const post = response.data

  return post
}

const fetchDeleteComment = async ({ commentId, postId }: DeleteCommentRequest) => {
  const response = await protectedInstance.delete<Post>(
    `/comments/${commentId}/posts/${postId}/removeComment`
  )
  const post = response.data

  return post
}

const fetchLikeComment = async ({ commentId, postId }: LikeRequest) => {
  const response = await protectedInstance.patch<Post>(
    `/comments/${commentId}/posts/${postId}/likeComment`
  )
  const post = response.data

  return post
}

const fetchRemoveLikeComment = async ({ commentId, postId }: LikeRequest) => {
  const response = await protectedInstance.patch<Post>(
    `/comments/${commentId}/posts/${postId}/removeLikeComment`
  )
  const post = response.data

  return post
}

export { fetchAddCommentToPost, fetchDeleteComment, fetchLikeComment, fetchRemoveLikeComment }
