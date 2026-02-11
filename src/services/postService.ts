import type { PostListResponse } from "../types/post";

const BASE_URL = 'https://dev.codeleap.co.uk/careers/';


async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    throw new Error('Request Error');
  }
  return response.json();
}


export const postService = {

  list: async (): Promise<PostListResponse> => {
    const response = await fetch(BASE_URL);
    return handleResponse<PostListResponse>(response);
  },
  
}