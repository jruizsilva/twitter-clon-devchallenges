import { protectedInstance } from "api/axiosInstances";

const fetchAllPosts = async () => {
  const response = await protectedInstance.get<Post[]>("/posts");
  const posts = response.data;

  return posts
}

const fetchCreateOnePost = async (postRequest: PostRequest) => {
  const response = await protectedInstance.post<Post>("/posts", postRequest);
  const post = response.data;

  return post
}

const fetchDeletePostById = async (postId: string) => {
  await protectedInstance.delete(`/posts/${postId}`);
}

const fetchEditPost = async (postId: string, postRequest: PostRequest) => {
  const response = await protectedInstance.patch<Post>(`/posts/${postId}`, postRequest);
  const postUpdated = response.data;

  return postUpdated
}

const fetchAddLikeToPost = async (postId: string) => {
  const response = await protectedInstance.patch<Post>(`/posts/${postId}/like`);
  const postUpdated = response.data;

  return postUpdated
}

const fetchRemoveLikeToPost = async (postId: string) => {
  const response = await protectedInstance.patch<Post>(`/posts/${postId}/removeLike`);
  const postUpdated = response.data;

  return postUpdated
}

const fetchAllPostOfCurrentUser = async () => {
  const response = await protectedInstance.get<Post[]>(`/posts/user`);
  const posts = response.data;

  return posts
}

export {
  fetchAllPosts,
  fetchCreateOnePost,
  fetchDeletePostById,
  fetchEditPost,
  fetchAddLikeToPost,
  fetchRemoveLikeToPost,
  fetchAllPostOfCurrentUser
}