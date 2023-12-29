import axios from 'axios';

import { type Post } from './postService';

export interface User {
  id: number;
  name: string;
  description: string;
  posts: Post[];
}

const userService = () => {
  const instance = axios.create({
    baseURL: 'http://localhost:8080/users'
  });



  return {
    getUserData: async () => {
      try {
        const AUTH_TOKEN = localStorage.getItem("AUTH_TOKEN");

        if (AUTH_TOKEN !== null) {
          instance.defaults.headers.common.Authorization = "Bearer " + AUTH_TOKEN;
          const response = await instance.get<User>("/profile")
          const user = response.data

          return user
        }

        return null
      } catch (err) {
        localStorage.removeItem("AUTH_TOKEN")
        console.log(err)
      }
    }
  }
}

export { userService }
