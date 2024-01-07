import { type StateCreator } from "zustand";


import { type User } from "business/user/useUser";

export interface UserBookmarkStore {
  user: User | null,
  isLoading: boolean,
  setIsLoading: (isLoading: boolean) => void,
  setUser: (user: User | null) => void,
}

const initialValues = {
  user: null,
  isLoading: true,
}

export const userBookmarksStore: StateCreator<UserBookmarkStore, [], [], UserBookmarkStore> = (set) => ({
  ...initialValues,
  setUser: (user: User | null) => {
    set(() => ({ user, isLoading: false }));
  },
  setIsLoading: (isLoading) => {
    set((state) => ({ isLoading, }));
  },
})