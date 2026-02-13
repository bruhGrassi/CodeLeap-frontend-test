import type {
  PostListResponse,
  PostCreate,
  Post,
  PostUpdate,
} from "../types/post";
import { BASE_URL } from "../constants/api";

async function handleResponse<T>(
  response: Response,
  errorMessage: string,
): Promise<T> {
  if (!response.ok) throw new Error(errorMessage);
  return response.json();
}

export const postService = {
  list: async (pageParam?: unknown): Promise<PostListResponse> => {
    const url = typeof pageParam === "string" ? pageParam : BASE_URL;
    const response = await fetch(url);
    return handleResponse<PostListResponse>(response, "Failed to fetch posts");
  },

  create: async (postData: PostCreate): Promise<Post> => {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postData),
    });
    return handleResponse<Post>(response, "Failed to create post.");
  },

  update: async (id: number, postData: PostUpdate): Promise<Post> => {
    const response = await fetch(`${BASE_URL}${id}/`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postData),
    });
    return handleResponse<Post>(response, "Failed to update post.");
  },

  delete: async (id: number): Promise<void> => {
    const response = await fetch(`${BASE_URL}${id}/`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to delete post.");
  },
};
