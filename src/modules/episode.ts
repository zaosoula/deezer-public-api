import { DeezerClient } from "../client.js";
import { Episode, IdOptions } from "../types/index.js";

/**
 * Creates the Episode module.
 * @param client The base DeezerClient instance.
 */
export function createEpisodeModule(client: DeezerClient) {
  return async (options: IdOptions) => {
    const { id, ...params } = options;
    return client.request<Episode>(`episode/${id}`, params);
  };
}
