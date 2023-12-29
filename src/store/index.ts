import { create } from 'zustand'

type Store = {
  count: number,
  inc: () => void
  user: {
    id: number;
    name: string;
    description: string;
  } | null;
  setUser: () => void
}

export const useStore = create<Store>()((set) => ({
  count: 1,
  user: null,
  inc: () => { set((state) => ({ count: state.count + 1 })); },
  setUser: () => {
    set((state) => ({})
    )
  }

}))