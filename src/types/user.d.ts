interface User {
  id: number
  name: string
  description: string
  username: string
  postsCreated: PostWithoutChildren[]
  postsLiked: LikeWithoutChildren[]
}

type UserWithOutChildren = Omit<User, "posts" | "postsLiked">

interface UpdateUserRequest {
  name?: string
  description?: string
}