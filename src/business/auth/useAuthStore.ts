import { create } from "zustand";

import { type User } from "business/user/useUser";

export interface AuthStore {
  isFetching: boolean
  setIsFetching: (isFetching: boolean) => void
  user: User | null;
  setUser: (user: User | null) => void,
}

export const useAuthStore = create<AuthStore>()((set) => ({
  user: null,
  isFetching: true,
  setIsFetching: (isFetching: boolean) => {
    set(() => ({ isFetching }))
  },
  setUser: (user: User | null) => {
    set(() => ({ user, isFetching: false }));
  }
}))