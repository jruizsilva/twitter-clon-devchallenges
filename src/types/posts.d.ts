interface Post {
  id: number
  content: string
  createdAt: string
  user: User
  likedByUsers: User[]
  savedByUsers: User[]
}

interface PostRequest {
  content: string
}
