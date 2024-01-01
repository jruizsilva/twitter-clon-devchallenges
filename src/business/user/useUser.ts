import { type Post } from '../posts/usePost';

import { protectedInstance } from 'business/api/axiosInstances';

export interface User {
  id: number;
  name: string;
  description: string;
  username: string
  posts: Post[];
  postsLiked: Post[]
}

export interface UpdateUserRequest {
  name?: string
  description?: string
}

const useUser = () => {
  return {
    fetchUserData: async () => {
      const response = await protectedInstance.get<User>("/users/profile")
      const user = response.data;

      return user
    },
    updateUser: async (updateUserRequest: UpdateUserRequest) => {
      const response = await protectedInstance.patch<User>("/users", updateUserRequest)

      console.log(response)
      const userUpdated = response.data;

      return userUpdated
    },
    fetchAllUsers: async () => {
      const response = await protectedInstance.get<User[]>("/users")
      const users = response.data;

      return users
    },
    fetchSearchUsersByUsernameOrName: async (peopleToSearch: string) => {
      const response = await protectedInstance.get<User[]>(`/users/search/${peopleToSearch}`)
      const users = response.data

      return users
    },
    fetchToggleUserLikeByPostId: async (postId: string) => {
      const response = await protectedInstance.patch<User>(`/users/like?postId=${postId}`)
      const users = response.data

      return users
    }
  }
}



export { useUser }
