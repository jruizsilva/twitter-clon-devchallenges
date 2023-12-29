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

  const AUTH_TOKEN = localStorage.getItem("AUTH_TOKEN");

  // Alter defaults after instance has been created
  if (AUTH_TOKEN !== null) {
    instance.defaults.headers.common.Authorization = AUTH_TOKEN;
  }

  return {
    loginUser: (loginRequest: LoginRequest) => {
      instance.post<AuthResponse>("/login", loginRequest).then(res => {
        const AUTH_TOKEN = res.data.jwt;

        localStorage.setItem("AUTH_TOKEN", AUTH_TOKEN)
      }).catch((error) => {
        console.log(error)
      });
    },
    registerUser: (registerRequest: RegisterRequest) => {
      instance.post("/register", registerRequest).then(res => {
        const AUTH_TOKEN = res.data.jwt;

        localStorage.setItem("AUTH_TOKEN", AUTH_TOKEN)
      }).catch((error) => {
        console.log(error)
      });
    }
  }
}

export { authService };
