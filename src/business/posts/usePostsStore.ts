import { create } from "zustand"

import { type Post } from "business/posts/usePost"

interface PostsStore {
  posts: Post[] | null
  setPosts: (posts: Post[] | null) => void
  addPost: (post: Post) => void
}

export const usePostsStore = create<PostsStore>()((set) => ({
  posts: null,
  setPosts: (posts: Post[] | null) => {
    set(() => ({ posts }))
  },
  addPost: (post: Post) => {
    set((state) => ({
      posts: [post, ...(state.posts as Post[])]
    })
    )
  }

}))