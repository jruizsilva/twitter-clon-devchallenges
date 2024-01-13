interface CommentRequest {
  content: string
  postId?: string
}
interface IComment {
  content: string
  createdAt: string
  id: number
  likes: User[] | null
  user: User
}