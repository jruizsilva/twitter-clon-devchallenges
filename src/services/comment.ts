import { protectedInstance } from 'api/axiosInstances'

export const fetchAddCommentToPost =
  async (postId: string, commentRequest: CommentRequest) => {
    const response = await protectedInstance.post<Post>(
      `/comments/posts/${postId}/addComment`, commentRequest
    )
    const post = response.data

    return post
  }

export const fetchDeleteComment =
  async ({ commentId, postId }: DeleteCommentRequest) => {
    const response = await protectedInstance.delete<Post>(
      `/comments/${commentId}/posts/${postId}/removeComment`
    )
    const post = response.data

    return post
  }

export const fetchLikeComment =
  async ({ commentId, postId }: LikeRequest) => {
    const response = await protectedInstance.patch<Post>(
      `/comments/${commentId}/posts/${postId}/likeComment`
    )
    const post = response.data

    return post
  }

export const fetchRemoveLikeComment =
  async ({ commentId, postId }: LikeRequest) => {
    const response = await protectedInstance.patch<Post>(
      `/comments/${commentId}/posts/${postId}/removeLikeComment`
    )
    const post = response.data

    return post
  }

export const fetchEditComment =
  async ({ postId, commentId, ...editRequest }: UpdateCommentRequest) => {
    const response = await protectedInstance.patch<Post>(
      `/comments/${commentId}/posts/${postId}/editComment`, editRequest
    )
    const post = response.data

    return post
  }
