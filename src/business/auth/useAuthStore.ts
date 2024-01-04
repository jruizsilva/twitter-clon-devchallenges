import { create } from "zustand";

import { type User } from "business/user/useUser";

export interface AuthStore {
  user: User | null,
  isLoading: boolean,
  setIsLoading: (isLoading: boolean) => void,
  setUser: (user: User | null) => void,
}

const initialValues = {
  user: null,
  isLoading: true,
}

export const useAuthStore = create<AuthStore>((set) => ({
  ...initialValues,
  setUser: (user: User | null) => {
    set(() => ({ user, isLoading: false }));
  },
  setIsLoading: (isLoading) => {
    set(() => ({ isLoading }));
  }
}))