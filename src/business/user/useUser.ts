import axios from 'axios';

import { type Post } from '../posts/usePost';

export interface User {
  id: number;
  name: string;
  description: string;
  posts: Post[];
}

const useUser = () => {
  const instance = axios.create({
    baseURL: 'http://localhost:8080/users'
  });



  return {
    getUserDataFromAuthToken: async (AUTH_TOKEN: string) => {
      return await new Promise<User>((resolve, reject) => {
        instance.defaults.headers.common.Authorization = `Bearer ${AUTH_TOKEN}`;
        instance.get<User>("/profile")
          .then((response) => { resolve(response.data); })
          .catch(err => {
            if (err instanceof Error) {
              console.error(err)
              reject(err.message)
            }
            console.error(err)
            reject(new Error("Error in getUserDataFromAuthToken"));
          })

        return null
      })
    }
  }
}


export { useUser }
