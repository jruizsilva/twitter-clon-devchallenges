import { type Post } from '../posts/usePost';

import { protectedInstance } from 'business/api/axiosInstances';

export interface User {
  id: number;
  name: string;
  description: string;
  posts: Post[];
}

const useUser = () => {
  return {
    fetchUserData: async () => {
      const response = await protectedInstance.get<User>("/users/profile")
      const user = response.data;

      return user
    }
  }
}


export { useUser }
