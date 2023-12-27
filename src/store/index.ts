import { create } from 'zustand'

type Store = {
  count: number,
  user: {
    id: number;
    name: string;
    description: string;
  } | null;
  inc: () => void
}

export const useStore = create<Store>()((set) => ({
  count: 1,
  user: null,
  inc: () => { set((state) => ({ count: state.count + 1 })); },
}))