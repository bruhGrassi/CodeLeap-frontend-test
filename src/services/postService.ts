import type {
  PostListResponse,
  PostCreate,
  Post,
  PostUpdate,
} from "../types/post";
import { BASE_URL } from "../constants/api";

async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    throw new Error("Request Error");
  }
  return response.json();
}

export const postService = {
  list: async (pageParam?: unknown): Promise<PostListResponse> => {
    const url = typeof pageParam === "string" ? pageParam : BASE_URL;
    const response = await fetch(url);
    return handleResponse<PostListResponse>(response);
  },

  create: async (postData: PostCreate): Promise<Post> => {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postData),
    });
    return handleResponse<Post>(response);
  },

  update: async (id: number, postData: PostUpdate): Promise<Post> => {
    const response = await fetch(`${BASE_URL}${id}/`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postData),
    });
    return handleResponse<Post>(response);
  },

  delete: async (id: number): Promise<void> => {
    const response = await fetch(`${BASE_URL}${id}/`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Error on delete");
  },
};
