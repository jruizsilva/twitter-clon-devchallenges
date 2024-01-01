import { create } from "zustand"

import { type Post } from "business/posts/usePost"

interface PostStore {
  posts: Post[] | null
  setPosts: (posts: Post[] | null) => void
  addPost: (newPost: Post) => void,
  deletePostById: (postId: number) => void
  updatePostById: (postId: number, postUpdated: Post) => void
}

export const usePostsStore = create<PostStore>()((set) => ({
  posts: null,
  setPosts: (posts: Post[] | null) => {
    set(() => ({ posts }))
  },
  addPost: (newPost: Post) => {
    set((state) => ({
      posts: [newPost, ...(state.posts as Post[])]
    })
    )
  },
  deletePostById: (postId: number) => {
    set((state) => ({
      posts: state.posts?.filter(post => post.id !== postId)
    })
    )
  },
  updatePostById: (postId: number, postUpdated: Post) => {
    set((state) => ({
      posts: state.posts?.map(post =>
        post.id !== postId
          ? post
          : postUpdated
      )
    })
    )
  }
}))