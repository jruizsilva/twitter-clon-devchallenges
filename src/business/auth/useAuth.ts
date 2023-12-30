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

const useAuth = () => {

  const instance = axios.create({
    baseURL: 'http://localhost:8080/auth'
  });

  return {
    loginUser: async (loginRequest: LoginRequest) => {
      const response = await instance.post<AuthResponse>("/login", loginRequest)
      const AUTH_TOKEN = response.data.jwt;

      return AUTH_TOKEN;
    },
    registerUser: async (registerRequest: RegisterRequest) => {
      const response = await instance.post<AuthResponse>("/register", registerRequest)
      const AUTH_TOKEN = response.data.jwt;

      return AUTH_TOKEN;
    }
  }
}

export { useAuth };
