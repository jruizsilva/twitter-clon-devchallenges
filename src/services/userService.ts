import axios from 'axios';

import { type Post } from './postService';

export interface User {
  id: number;
  name: string;
  description?: string;
}
interface ResponseData {
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
    getUserData: () => {
      instance.get<ResponseData>("/profile").then(res => {
        console.log(res.data)
      }).catch((error) => {
        console.log(error)
      });
    }
  }
}

export { userService };
