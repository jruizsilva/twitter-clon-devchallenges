import { create } from "zustand"

import { type Post } from "business/posts/usePost"

interface PostStore {
  posts: Post[] | null
  userPosts: Post[] | null
  setPosts: (posts: Post[] | null) => void
  setUserPosts: (posts: Post[] | null) => void
  addPost: (newPost: Post) => void,
  deletePostById: (postId: number) => void
  updatePostById: (postId: number, postUpdated: Post) => void
}

export const usePostsStore = create<PostStore>()((set) => ({
  posts: null,
  userPosts: null,
  setPosts: (posts: Post[] | null) => {
    set(() => ({ posts }))
  },
  setUserPosts: (userPosts: Post[] | null) => {
    set(() => ({ userPosts }))
  },
  addPost: (newPost: Post) => {
    set((state) => ({
      posts: [newPost, ...(state.posts as Post[])]
    })
    )
  },
  deletePostById: (postId: number) => {
    set((state) => ({
      posts: state.posts?.filter(post => post.id !== postId),
      userPosts: state.posts?.filter(post => post.id !== postId)
    })
    )
  },
  updatePostById: (postId: number, postUpdated: Post) => {
    set((state) => ({
      posts: state.posts?.map(post =>
        post.id !== postId
          ? post
          : postUpdated
      ),
      userPosts: state.posts?.map(post =>
        post.id !== postId
          ? post
          : postUpdated
      )
    })
    )
  }
}))