import { DeezerClient } from "../client.js";
import { DeezerEpisode, DeezerIdOptions } from "../types/index.js";

/**
 * Creates the Episode module.
 * @param client The base DeezerClient instance.
 */
export function createEpisodeModule(client: DeezerClient) {
  return async (options: DeezerIdOptions) => {
    const { id, ...params } = options;
    return client.request<DeezerEpisode>(`episode/${id}`, params);
  };
}
