import { DeezerClient } from "../client.js";
import {
  DeezerPaginationResult,
  DeezerGenre,
  DeezerArtist,
  DeezerPodcast,
  DeezerRadio,
  DeezerIdOptions,
} from "../types/index.js";

/**
 * Creates the Genre module for the Deezer API.
 * @param client The base DeezerClient instance.
 */
export function createGenreModule(client: DeezerClient) {
  /**
   * Get genre data.
   */
  const genre = async (options: Partial<DeezerIdOptions> = {}) => {
    const { id, ...params } = options;
    return client.request<DeezerGenre>(`genre/${id !== undefined ? id : ""}`, params);
  };

  /**
   * Get artists for a genre.
   */
  const artists = async (options: DeezerIdOptions) => {
    const { id, ...params } = options;
    return client.request<DeezerPaginationResult<DeezerArtist>>(`genre/${id}/artists`, params);
  };

  /**
   * Get podcasts for a genre.
   */
  const podcasts = async (options: DeezerIdOptions) => {
    const { id, ...params } = options;
    return client.request<DeezerPaginationResult<DeezerPodcast>>(`genre/${id}/podcasts`, params);
  };

  /**
   * Get radios for a genre.
   */
  const radios = async (options: DeezerIdOptions) => {
    const { id, ...params } = options;
    return client.request<DeezerPaginationResult<DeezerRadio>>(`genre/${id}/radios`, params);
  };

  return Object.assign(genre, {
    artists,
    podcasts,
    radios,
  });
}
