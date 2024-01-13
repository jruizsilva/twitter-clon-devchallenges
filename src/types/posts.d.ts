interface Post {
  id: number
  content: string
  createdAt: string
  user: User
  likedByUsers: User[]
  savedByUsers: User[]
  comments: IComment[]
}

interface PostRequest {
  content: string
}
