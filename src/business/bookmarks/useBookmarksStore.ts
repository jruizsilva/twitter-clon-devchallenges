import { create } from "zustand";

import { type Post } from "business/posts/usePost";

export interface BookmarksStore {
  bookmarksSaved: Post[],
  setBookmarksSaved: (bookmarksSaved: Post[]) => void
  addBookmark: (bookmarkSaved: Post) => void
  removeBookmark: (postId: number) => void
}

const initialValues = {
  bookmarksSaved: []
}

const useBookmarksStore = create<BookmarksStore>((set) => ({
  ...initialValues,
  setBookmarksSaved: (bookmarksSaved: Post[]) => {
    set(() => ({ bookmarksSaved }));
  },
  addBookmark: (bookmarkSaved: Post) => {
    set((state) => ({ bookmarksSaved: [bookmarkSaved, ...(state.bookmarksSaved)] }));
  },
  removeBookmark: (postId: number) => {
    set((state) => ({
      bookmarksSaved: state.bookmarksSaved.filter((post) => post.id !== postId
      )
    }));
  }
}))

export { useBookmarksStore }