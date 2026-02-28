import { DeezerClient } from "../client.js";
import {
  PaginationResult,
  Genre,
  Artist,
  Podcast,
  Radio,
  IdOptions,
} from "../types/index.js";

/**
 * Creates the Genre module for the Deezer API.
 * @param client The base DeezerClient instance.
 */
export function createGenreModule(client: DeezerClient) {
  /**
   * Get genre data.
   */
  const genre = async (options: Partial<IdOptions> = {}) => {
    const { id, ...params } = options;
    return client.request<Genre>(`genre/${id !== undefined ? id : ""}`, params);
  };

  /**
   * Get artists for a genre.
   */
  const artists = async (options: IdOptions) => {
    const { id, ...params } = options;
    return client.request<PaginationResult<Artist>>(`genre/${id}/artists`, params);
  };

  /**
   * Get podcasts for a genre.
   */
  const podcasts = async (options: IdOptions) => {
    const { id, ...params } = options;
    return client.request<PaginationResult<Podcast>>(`genre/${id}/podcasts`, params);
  };

  /**
   * Get radios for a genre.
   */
  const radios = async (options: IdOptions) => {
    const { id, ...params } = options;
    return client.request<PaginationResult<Radio>>(`genre/${id}/radios`, params);
  };

  return Object.assign(genre, {
    artists,
    podcasts,
    radios,
  });
}
