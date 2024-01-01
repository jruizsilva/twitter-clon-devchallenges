import { create } from "zustand"

import { type User } from "./useUser"

import { type Post } from "business/posts/usePost"


interface UserStore {
  users: User[] | null
  setUsers: (users: User[] | null) => void
  addUser: (user: User) => void,
  postsLiked: Post[] | null,
  setPostsLiked: (posts: Post[] | null) => void
}

export const useUserStore = create<UserStore>()((set) => ({
  users: null,
  postsLiked: null,
  setUsers: (users: User[] | null) => {
    set(() => ({ users }))
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

}))