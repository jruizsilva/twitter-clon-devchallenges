import { create } from 'zustand'

interface Store {
  userAuthenticated: User | null
  setUserAuthenticated: (userAuthenticated: User) => void
}

export const useAppStore = create<Store>((set) => ({
  userAuthenticated: null,
  setUserAuthenticated: (userAuthenticated: User) => {
    set((state) => ({ userAuthenticated }));
  },
}))