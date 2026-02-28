import { DeezerClient } from "../client.js";
import { Comment } from "../types/index.js";

/**
 * Creates the Comment module.
 * @param client The base DeezerClient instance.
 */
export function createCommentModule(client: DeezerClient) {
  return async (id: number | string, limit?: number, index?: number) => {
    return client.request<Comment>(`comment/${id}`, { limit, index });
  };
}
