import axios from 'axios';

export interface LoginRequest {
  username: string
  password: string
}
export interface RegisterRequest {
  username: string
  password: string
  name: string
  description?: string
}
interface AuthResponse {
  jwt: string
}

const authService = () => {
  const instance = axios.create({
    baseURL: 'http://localhost:8080/auth'
  });

  return {
    loginUser: async (loginRequest: LoginRequest) => {
      try {
        const response = await instance.post<AuthResponse>("/login", loginRequest)
        const AUTH_TOKEN = response.data.jwt;

        localStorage.setItem("AUTH_TOKEN", AUTH_TOKEN)

      } catch (err) {
        console.log(err)

      }
    },
    registerUser: async (registerRequest: RegisterRequest) => {
      try {
        const response = await instance.post("/register", registerRequest)
        const AUTH_TOKEN = response.data.jwt;

        localStorage.setItem("AUTH_TOKEN", AUTH_TOKEN)
      } catch (err) {
        console.log(err)

      }
    }
  }
}

export { authService };
