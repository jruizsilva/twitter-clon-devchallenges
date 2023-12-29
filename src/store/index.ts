import { create } from 'zustand'

import { type User } from 'services/userService';

type AuthStore = {
  count: number,
  inc: () => void
  user: {
    id: number;
    name: string;
    description: string;
  } | null;
  setUser: (user: User) => void
}

export const useAuthStore = create<AuthStore>()((set) => ({
  count: 1,
  user: null,
  inc: () => { set((state) => ({ count: state.count + 1 })); },
  setUser: (user: User) => {
    set(() => ({ user }));
  }
}))