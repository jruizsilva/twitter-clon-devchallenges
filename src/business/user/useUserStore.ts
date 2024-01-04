import { create } from "zustand"
import { devtools } from "zustand/middleware"

import { type User } from "./useUser"

import { type Post } from "business/posts/usePost"


interface UserStore {
  users: User[] | null
  postsLiked: Post[] | null,
  searchUserResult: User[] | null
  setUsers: (users: User[] | null) => void
  addUser: (user: User) => void,
  setPostsLiked: (posts: Post[] | null) => void
  setSearchUserResult: (searchUserResult: User[] | null) => void
}

const initialState = {
  users: null,
  postsLiked: null,
  searchUserResult: null
}

export const useUserStore = create(devtools<UserStore>(((set) => ({
  ...initialState,
  setUsers: (users: User[] | null) => {
    set(() => ({ users, searchUserResult: users }))
  },
  setSearchUserResult: (searchUserResult: User[] | null) => {
    set(() => ({ searchUserResult }))
  },
  addUser: (user: User) => {
    set((state) => ({
      users: [user, ...(state.users as User[])]
    })
    )
  },
  setPostsLiked: (postsLiked: Post[] | null) => {
    set(() => ({ postsLiked }))
  },

}))))