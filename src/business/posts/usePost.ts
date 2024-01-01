import { type User } from '../user/useUser';

import { protectedInstance, publicInstance } from 'business/api/axiosInstances';

export interface Post {
  id: number;
  content: string;
  createdAt: string;
  author: User;
  usersLikes: Record<string, User>
}

export interface PostRequest {
  content: string;
}

const usePost = () => {
  return {
    fetchAllPosts: async () => {
      const response = await publicInstance.get<Post[]>("/posts");
      const posts = response.data;

      return posts
    },
    fetchCreateOnePost: async (postRequest: PostRequest) => {
      const response = await protectedInstance.post<Post>("/posts", postRequest);
      const post = response.data;

      return post
    },
    fetchDeletePostById: async (postId: string) => {
      await protectedInstance.delete(`/posts/${postId}`);
    },
    fetchEditPost: async (postId: string, postRequest: PostRequest) => {
      const response = await protectedInstance.put<Post>(`/posts/${postId}`, postRequest);
      const postUpdated = response.data;

      return postUpdated
    }
  }
}

export { usePost }
