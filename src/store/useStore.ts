import { create } from 'zustand'

interface Store {
  userAuthenticated: User | null
  setUserAuthenticated: (userAuthenticated: User) => void
}

export const useStore = create<Store>((set) => ({
  userAuthenticated: null,
  setUserAuthenticated: (userAuthenticated: User) => {
    set((state) => ({ userAuthenticated }));
  },
}))