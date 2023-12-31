import { type User } from '../user/useUser';

import { protectedInstance, publicInstance } from 'business/api/axiosInstances';

export interface Post {
  id: number;
  content: string;
  createdAt: string;
  author: User;
}

const usePost = () => {
  return {
    fetchAllPosts: async () => {
      const response = await publicInstance.get<Post[]>("/posts");
      const posts = response.data;

      return posts
    },
    fetchCreateOnePost: async (postRequest: Post) => {
      const response = await protectedInstance.post<Post>("/posts", postRequest);
      const post = response.data;

      return post
    },
    fetchDeletePostById: async (postId: string) => {
      await protectedInstance.delete<Post>(`/posts/${postId}`);
    }
  }
}

export { usePost }
