import { DeezerClient } from "../client.js";
import { DeezerPodcast, DeezerIdOptions } from "../types/index.js";

/**
 * Creates the Podcast module.
 * @param client The base DeezerClient instance.
 */
export function createPodcastModule(client: DeezerClient) {
  return async (options: Partial<DeezerIdOptions> = {}) => {
    const { id, ...params } = options;
    return client.request<DeezerPodcast>(`podcast/${id !== undefined ? id : ""}`, params);
  };
}
