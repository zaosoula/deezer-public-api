import { DeezerClient } from "../client.js";
import { Track, IdOptions, IsrcOptions } from "../types/index.js";

/**
 * Creates the Track module.
 * @param client The base DeezerClient instance.
 */
export function createTrackModule(client: DeezerClient) {
  /**
   * Get a track's data.
   */
  const track = async (options: IdOptions) => {
    const { id, ...params } = options;
    return client.request<Track>(`track/${id}`, params);
  };

  return Object.assign(track, {
    /**
     * Get a track's alternative.
     */
    alternative: async (options: IdOptions) => {
      const { id, ...params } = options;
      return client.request<Track>(`track/${id}/alternative`, params);
    },

    /**
     * Get a track's data by ISRC.
     */
    isrc: async (options: IsrcOptions) => {
      const { isrc, ...params } = options;
      return client.request<Track>(`track/isrc:${isrc}`, params);
    },
  });
}
