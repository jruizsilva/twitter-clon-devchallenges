interface User {
  id: number
  name: string
  description: string
  username: string
  profileImage: string | null
  backgroundImage: string | null
}

interface UpdateUserRequest {
  name?: string
  description?: string
}
