export interface Post {
  id: number;
  username: string;
  created_datetime: string;
  title: string;
  content: string;
}

export interface PostListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Post[];
}

export interface PostCreate {
  username: string;
  title: string;
  content: string;
}