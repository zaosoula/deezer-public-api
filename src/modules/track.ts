import { DeezerClient } from "../client.js";
import {
  DeezerTrack,
  DeezerIdOptions,
  DeezerIsrcOptions,
} from "../types/index.js";

/**
 * Creates the Track module.
 * @param client The base DeezerClient instance.
 */
export function createTrackModule(client: DeezerClient) {
  /**
   * Get a track's data.
   */
  const track = async (options: DeezerIdOptions) => {
    const { id, ...params } = options;
    return client.request<DeezerTrack>(`track/${id}`, params);
  };

  return Object.assign(track, {
    /**
     * Get a track's alternative.
     */
    alternative: async (options: DeezerIdOptions) => {
      const { id, ...params } = options;
      return client.request<DeezerTrack>(`track/${id}/alternative`, params);
    },

    /**
     * Get a track's data by ISRC.
     */
    isrc: async (options: DeezerIsrcOptions) => {
      const { isrc, ...params } = options;
      return client.request<DeezerTrack>(`track/isrc:${isrc}`, params);
    },
  });
}
