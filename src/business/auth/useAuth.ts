import axios from 'axios';

import { publicInstance } from 'business/api/axiosInstances';

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
  return {
    loginUser: async (loginRequest: LoginRequest) => {
      const response = await publicInstance.post<AuthResponse>("/auth/login", loginRequest)
      const AUTH_TOKEN = response.data.jwt;

      return AUTH_TOKEN;
    },
    registerUser: async (registerRequest: RegisterRequest) => {
      const response = await publicInstance.post<AuthResponse>("/auth/register", registerRequest)
      const AUTH_TOKEN = response.data.jwt;

      return AUTH_TOKEN;
    }
  }
}

export { useAuth };
