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

  return {
    findAll: async () => {
      try {
        const response = await instance.get<Post[]>("");
        const posts = response.data;

        return posts
      } catch (err) {
        console.log(err)
      }
    },
    createOnePost: async (postRequest: Post) => {
      const AUTH_TOKEN = localStorage.getItem("AUTH_TOKEN");

      if (AUTH_TOKEN !== null) {
        instance.defaults.headers.common.Authorization = "Bearer " + AUTH_TOKEN;
      }
      try {
        const response = await instance.post<Post>("", postRequest);
        const post = response.data;

        return post
      } catch (err) {
        console.log(err)
      }
    }
  }
}

export { postService };
