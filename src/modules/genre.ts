import { DeezerClient } from "../client.js";
import {
  PaginationResult,
  Genre,
  Artist,
  Podcast,
  Radio,
} from "../types/index.js";

/**
 * Creates the Genre module for the Deezer API.
 * @param client The base DeezerClient instance.
 */
export function createGenreModule(client: DeezerClient) {
  /**
   * Get genre data.
   * @param id The genre ID.
   * @param limit The number of items to return.
   * @param index The index of the first item to return.
   */
  const genre = async (
    id?: number | string,
    limit?: number,
    index?: number,
  ) => {
    return client.request<Genre>(`genre/${id !== undefined ? id : ""}`, {
      limit,
      index,
    });
  };

  /**
   * Get artists for a genre.
   * @param id The genre ID.
   * @param limit The number of items to return.
   * @param index The index of the first item to return.
   */
  const artists = async (
    id: number | string,
    limit?: number,
    index?: number,
  ) => {
    return client.request<PaginationResult<Artist>>(`genre/${id}/artists`, {
      limit,
      index,
    });
  };

  /**
   * Get podcasts for a genre.
   * @param id The genre ID.
   * @param limit The number of items to return.
   * @param index The index of the first item to return.
   */
  const podcasts = async (
    id: number | string,
    limit?: number,
    index?: number,
  ) => {
    return client.request<PaginationResult<Podcast>>(`genre/${id}/podcasts`, {
      limit,
      index,
    });
  };

  /**
   * Get radios for a genre.
   * @param id The genre ID.
   * @param limit The number of items to return.
   * @param index The index of the first item to return.
   */
  const radios = async (
    id: number | string,
    limit?: number,
    index?: number,
  ) => {
    return client.request<PaginationResult<Radio>>(`genre/${id}/radios`, {
      limit,
      index,
    });
  };

  return Object.assign(genre, {
    artists,
    podcasts,
    radios,
  });
}
