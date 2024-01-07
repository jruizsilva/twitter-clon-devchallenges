import { type StateCreator } from "zustand";


import { type User } from "business/user/useUser";
import { type Post } from "business/posts/usePost";

export interface GlobalStore {
  users: User[],
  setUsers: (users: User[]) => void
  posts: Post[],
  setPosts: (posts: Post[]) => void
}

const initialValues = {
  users: [],
  posts: [],
}

export const globalStore: StateCreator<GlobalStore, [], [], GlobalStore> = (set) => ({
  ...initialValues,
  setUsers: (users: User[]) => {
    set(() => ({ users }))
  },
  setPosts: (posts: Post[]) => {
    set(() => ({ posts }))
  },
})