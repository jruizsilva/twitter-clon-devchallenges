import { create } from "zustand"

import { type User } from "./useUser"


interface UserStore {
  users: User[] | null
  setUsers: (users: User[] | null) => void
  addUser: (user: User) => void
}

export const useUserStore = create<UserStore>()((set) => ({
  users: null,
  setUsers: (users: User[] | null) => {
    set(() => ({ users }))
  },
  addUser: (user: User) => {
    set((state) => ({
      users: [user, ...(state.users as User[])]
    })
    )
  }

}))