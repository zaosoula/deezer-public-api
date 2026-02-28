import { DeezerClient } from "../client.js";
import { Podcast } from "../types/index.js";

/**
 * Creates the Podcast module.
 * @param client The base DeezerClient instance.
 */
export function createPodcastModule(client: DeezerClient) {
  return async (id?: number | string, limit?: number, index?: number) => {
    return client.request<Podcast>(`podcast/${id !== undefined ? id : ""}`, {
      limit,
      index,
    });
  };
}
