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
    login: (loginRequest: LoginRequest) => {
      instance.post("/login", loginRequest).then(res => {
        console.log(res);
        console.log(res.data);
      }).catch((error) => {
        console.log(error)
      });
    },
    register: (registerRequest: RegisterRequest) => {
      instance.post("/register", registerRequest).then(res => {
        console.log(res);
        console.log(res.data);
      }).catch((error) => {
        console.log(error)
      });
    }
  }
}

export { authService };
