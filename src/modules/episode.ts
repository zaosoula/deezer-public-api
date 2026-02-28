import { DeezerClient } from "../client.js";
import { Episode } from "../types/index.js";

/**
 * Creates the Episode module.
 * @param client The base DeezerClient instance.
 */
export function createEpisodeModule(client: DeezerClient) {
  return async (id: number | string, limit?: number, index?: number) => {
    return client.request<Episode>(`episode/${id}`, { limit, index });
  };
}
