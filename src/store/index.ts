import { create } from 'zustand'

import { type User } from 'services/userService';
import { type Post } from 'services/postService';

type AuthStore = {
  user: User | null;
  setUser: (user: User | null) => void
}

export const useAuthStore = create<AuthStore>()((set) => ({
  user: null,
  setUser: (user: User | null) => {
    set(() => ({ user }));
  }
}))

interface PostsStore {
  posts: Post[] | null
  setPosts: (posts: Post[] | null) => void

}

export const usePostsStore = create<PostsStore>()((set) => ({
  posts: null,
  setPosts: (posts: Post[] | null) => {
    set(() => ({ posts }))
  }
}))