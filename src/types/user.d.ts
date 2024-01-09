interface User {
  id: number
  name: string
  description: string
  username: string
}

interface UpdateUserRequest {
  name?: string
  description?: string
}
