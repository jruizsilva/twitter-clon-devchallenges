interface Post {
  id: number;
  content: string;
  createdAt: string;
  author: UserWithOutChildren;
  likes: LikeWithoutChildren[]
}
interface LikeWithoutChildren {
  post: PostWithoutChildren,
  user: UserWithOutChildren
}

interface PostRequest {
  content: string;
}

type PostWithoutChildren = Omit<Post, "author" | "likes">;