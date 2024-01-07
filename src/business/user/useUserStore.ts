import { create } from "zustand"
import { devtools } from "zustand/middleware"

import { type User } from "./useUser"

import { type LikeWithoutChildren, type Post } from "business/posts/usePost"


interface UserStore {
  users: User[]
  postsLiked: Post[]
  searchUserResult: User[]
  bookmarksSaved: LikeWithoutChildren[]
  setUsers: (users: User[]) => void
  addUser: (user: User) => void,
  setSearchUserResult: (searchUserResult: User[]) => void
  setPostsLiked: (posts: Post[]) => void
  setBookmarksSaved: (bookmarksSaved: LikeWithoutChildren[]) => void
  addBookmark: (bookmarkSaved: LikeWithoutChildren) => void
  removeBookmark: (bookmarkId: number) => void
}

const initialState = {
  users: [],
  postsLiked: [],
  searchUserResult: [],
  bookmarksSaved: []
}

export const useUserStore = create(devtools<UserStore>(((set) => ({
  ...initialState,
  setUsers: (users: User[]) => {
    set(() => ({ users, searchUserResult: users }))
  },
  setSearchUserResult: (searchUserResult: User[]) => {
    set(() => ({ searchUserResult }))
  },
  addUser: (user: User) => {
    set((state) => ({
      users: [user, ...(state.users)]
    })
    )
  },
  setPostsLiked: (postsLiked: Post[]) => {
    set(() => ({ postsLiked }))
  },
  setBookmarksSaved: (bookmarksSaved: LikeWithoutChildren[]) => {
    set(() => ({ bookmarksSaved }))
  },
  addBookmark: (bookmarkSaved: LikeWithoutChildren) => {
    set((state) => ({ bookmarksSaved: [bookmarkSaved, ...(state.bookmarksSaved)] }));
  },
  removeBookmark: (postId: number) => {
    set((state) => ({
      bookmarksSaved: state.bookmarksSaved.filter((like) => like.post.id !== postId
      )
    }));
  }

}))))