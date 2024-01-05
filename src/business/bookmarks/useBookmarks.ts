import { protectedInstance } from 'business/api/axiosInstances';
import { type Post, type PostWithoutChildren } from 'business/posts/usePost';
import { type UserWithOutChildren } from 'business/user/useUser';

export interface Bookmark {
  id: number,
  user: UserWithOutChildren,
  post: PostWithoutChildren
}

const useBookmarks = () => {
  return {
    fetchAllBookmarksByUsername: async (username: string) => {
      const response = await protectedInstance
        .get<Bookmark>(`/bookmarks?username=${username}`);
      const bookmarks = response.data;

      return bookmarks
    },
    fetchAddBookmark: async (postId: string, username: string) => {
      const response = await protectedInstance
        .post<Post>(`/bookmarks?postId=${postId}&username=${username}`);
      const bookmark = response.data;

      return bookmark
    },
    fetchRemoveBookmark: async (postId: string, username: string) => {
      await protectedInstance
        .delete<Bookmark>(`/bookmarks?postId=${postId}&username=${username}`);
    },
    fetchAllBookmarkedPostsByUsername: async (username: string) => {
      const response = await protectedInstance
        .get<Post>(`/bookmarks/posts?username=${username}`);
      const posts = response.data;

      return posts
    }

  }
}

export { useBookmarks }
