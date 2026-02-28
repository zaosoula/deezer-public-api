import { DeezerClient } from "../client.js";
import { Track } from "../types/index.js";

/**
 * Creates the Track module.
 * @param client The base DeezerClient instance.
 */
export function createTrackModule(client: DeezerClient) {
  const track = async (id: number | string, limit?: number, index?: number) => {
    return client.request<Track>(`track/${id}`, { limit, index });
  };
  return Object.assign(track, {
    alternative: async (
      id: number | string,
      limit?: number,
      index?: number,
    ) => {
      return client.request<Track>(`track/${id}/alternative`, { limit, index });
    },
  });
}
