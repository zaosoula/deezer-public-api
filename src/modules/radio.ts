import { DeezerClient } from "../client.js";
import {
  PaginationResult,
  Radio,
  Genre,
  Track,
  IdOptions,
  ListOptions,
} from "../types/index.js";

/**
 * Creates the Radio module for the Deezer API.
 * @param client The base DeezerClient instance.
 */
export function createRadioModule(client: DeezerClient) {
  /**
   * Get a radio's data.
   */
  const radio = async (options: Partial<IdOptions> = {}) => {
    const { id, ...params } = options;
    return client.request<Radio>(`radio/${id !== undefined ? id : ""}`, params);
  };

  /**
   * Get radio genres.
   */
  const genres = async (options: ListOptions = {}) => {
    return client.request<PaginationResult<Genre>>(`radio/genres`, options);
  };

  /**
   * Get top radios.
   */
  const top = async (options: ListOptions = {}) => {
    return client.request<PaginationResult<Radio>>(`radio/top`, options);
  };

  /**
   * Get radio lists.
   */
  const lists = async (options: ListOptions = {}) => {
    return client.request<PaginationResult<Radio>>(`radio/lists`, options);
  };

  /**
   * Get tracks for a radio.
   */
  const radioTracks = async (options: IdOptions) => {
    const { id, ...params } = options;
    return client.request<PaginationResult<Track>>(`radio/${id}/tracks`, params);
  };

  return Object.assign(radio, {
    genres,
    top,
    lists,
    tracks: radioTracks,
  });
}
