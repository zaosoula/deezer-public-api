import { DeezerClient } from "../client.js";
import { Podcast, IdOptions } from "../types/index.js";

/**
 * Creates the Podcast module.
 * @param client The base DeezerClient instance.
 */
export function createPodcastModule(client: DeezerClient) {
  return async (options: Partial<IdOptions> = {}) => {
    const { id, ...params } = options;
    return client.request<Podcast>(`podcast/${id !== undefined ? id : ""}`, params);
  };
}
