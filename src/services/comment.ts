import { protectedInstance } from 'api/axiosInstances'

const fetchAddCommentToPost = async (postId: string, commentRequest: CommentRequest) => {
  const response = await protectedInstance.post<Post>(
    `/comments/posts/${postId}/addComment`, commentRequest
  )
  const post = response.data

  return post
}
// const fetchRegister = async (registerRequest: RegisterRequest) => {
//   const response = await protectedInstance.post<AuthResponse>(
//     '/auth/register',
//     registerRequest
//   )
//   const AUTH_TOKEN = response.data.jwt

//   return AUTH_TOKEN
// }

export { fetchAddCommentToPost }
