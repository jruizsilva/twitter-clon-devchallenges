import { create } from 'zustand';


import { type PostStore, postsStore } from './postsStore'
import { type UserStore, userStore } from './userStore'


export const useAppStore = create<PostStore & UserStore>()((...a) => ({
  ...postsStore(...a),
  ...userStore(...a)
}));