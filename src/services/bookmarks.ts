import { protectedInstance } from "api/axiosInstances";

const fetchAllBookmarksByUsername = async (username: string) => {
  const response = await protectedInstance
    .get<Bookmark>(`/bookmarks?username=${username}`);
  const bookmarks = response.data;

  return bookmarks
}

const fetchAddBookmark = async (postId: string, username: string) => {
  const response = await protectedInstance
    .post<Bookmark>(`/bookmarks?postId=${postId}&username=${username}`);
  const bookmark = response.data;

  return bookmark
}

const fetchRemoveBookmark = async (postId: string, username: string) => {
  await protectedInstance
    .delete<Bookmark>(`/bookmarks?postId=${postId}&username=${username}`);
}

const fetchAllBookmarkedPostsByUsername = async (username: string) => {
  const response = await protectedInstance
    .get<Post[]>(`/bookmarks/posts?username=${username}`);
  const posts = response.data;

  return posts
};

export { fetchAllBookmarksByUsername, fetchAddBookmark, fetchRemoveBookmark, fetchAllBookmarkedPostsByUsername }