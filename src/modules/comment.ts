import { DeezerClient } from "../client.js";
import { Comment, IdOptions } from "../types/index.js";

/**
 * Creates the Comment module.
 * @param client The base DeezerClient instance.
 */
export function createCommentModule(client: DeezerClient) {
  return async (options: IdOptions) => {
    const { id, ...params } = options;
    return client.request<Comment>(`comment/${id}`, params);
  };
}
