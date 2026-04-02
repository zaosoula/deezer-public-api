import { DeezerClient } from "../client.js";
import { DeezerComment, DeezerIdOptions } from "../types/index.js";

/**
 * Creates the Comment module.
 * @param client The base DeezerClient instance.
 */
export function createCommentModule(client: DeezerClient) {
  return async (options: DeezerIdOptions) => {
    const { id, ...params } = options;
    return client.request<DeezerComment>(`comment/${id}`, params);
  };
}
