import { create } from "zustand";

import { type User } from "business/user/useUser";

export interface AuthStore {
  user: User | null;
  setUser: (user: User) => void,
}

export const useAuthStore = create<AuthStore>()((set) => ({
  user: null,
  setUser: (user: User) => {
    set(() => ({ user }));
  }
}))