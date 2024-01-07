import { publicInstance } from "api/axiosInstances";

const loginUser = async (loginRequest: LoginRequest) => {
  const response = await publicInstance.post<AuthResponse>("/auth/login", loginRequest)
  const AUTH_TOKEN = response.data.jwt;

  return AUTH_TOKEN;
}
const registerUser = async (registerRequest: RegisterRequest) => {
  const response = await publicInstance.post<AuthResponse>("/auth/register", registerRequest)
  const AUTH_TOKEN = response.data.jwt;

  return AUTH_TOKEN;
}

export { loginUser, registerUser }