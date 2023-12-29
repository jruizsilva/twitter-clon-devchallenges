import axios from 'axios';

import { type User } from './userService';

export interface Post {
  id: number;
  content: string;
  createdAt: string;
  author: User;
}

const postService = () => {
  const instance = axios.create({
    baseURL: 'http://localhost:8080/posts'
  });
  const AUTH_TOKEN = localStorage.getItem("AUTH_TOKEN");

  // Alter defaults after instance has been created
  if (AUTH_TOKEN !== null) {
    instance.defaults.headers.common.Authorization = "Bearer " + AUTH_TOKEN;
  }

  return {
    findAll: instance.get<Post[]>("").then((res) => {
      return res.data
    }
    ).catch((err) => {
      console.log(err)
    }
    )
  }
}

export { postService };
