import { create } from "zustand"

import { type Post } from "business/posts/usePost"

interface PostStore {
  posts: Post[] | null
  isFetching: boolean
  setIsFetching: (isFetching: boolean) => void
  userPosts: Post[] | null
  setPosts: (posts: Post[] | null) => void
  setUserPosts: (posts: Post[] | null) => void
  addPost: (newPost: Post) => void,
  deletePostById: (postId: number) => void
  updatePostById: (postId: number, postUpdated: Post) => void
}

export const usePostsStore = create<PostStore>((set) => ({
  posts: null,
  userPosts: null,
  isFetching: true,
  setIsFetching: (isFetching: boolean) => {
    set(() => ({ isFetching }))
  },
  setPosts: (posts: Post[] | null) => {
    set(() => ({ posts, isFetching: false }))
  },
  setUserPosts: (userPosts: Post[] | null) => {
    set(() => ({ userPosts, isFetching: false }))
  },
  addPost: (newPost: Post) => {
    set((state) => ({
      posts: [newPost, ...(state.posts as Post[])],
      isFetching: false
    })
    )
  },
  deletePostById: (postId: number) => {
    set((state) => ({
      posts: state.posts?.filter(post => post.id !== postId),
      userPosts: state.posts?.filter(post => post.id !== postId), isFetching: false
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
      userPosts: state.userPosts?.map(post =>
        post.id !== postId
          ? post
          : postUpdated
      ),
      isFetching: false
    })
    )
  }
}))