interface LoginRequest {
  username: string
  password: string
}
interface RegisterRequest {
  username: string
  password: string
  name: string
  description?: string
}
interface AuthResponse {
  jwt: string
}