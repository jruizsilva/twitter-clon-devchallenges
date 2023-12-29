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

  }
}

export { postService };
