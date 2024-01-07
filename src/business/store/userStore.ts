import { type StateCreator } from "zustand"

import { type User } from "business/user/useUser"

export interface UserStore {
  user: User | null
  setUser: (user: User) => void
}

const initialState = {
  user: null,
}

export const userStore: StateCreator<UserStore, [], [], UserStore> = ((set) => ({
  ...initialState,
  setUser: (user: User) => {
    set(() => ({ user }))
  }
}))