import { DeezerClient } from "../client.js";
import {
  DeezerPaginationResult,
  DeezerRadio,
  DeezerGenre,
  DeezerTrack,
  DeezerIdOptions,
  DeezerListOptions,
} from "../types/index.js";

/**
 * Creates the Radio module for the Deezer API.
 * @param client The base DeezerClient instance.
 */
export function createRadioModule(client: DeezerClient) {
  /**
   * Get a radio's data.
   */
  const radio = async (options: Partial<DeezerIdOptions> = {}) => {
    const { id, ...params } = options;
    return client.request<DeezerRadio>(`radio/${id !== undefined ? id : ""}`, params);
  };

  /**
   * Get radio genres.
   */
  const genres = async (options: DeezerListOptions = {}) => {
    return client.request<DeezerPaginationResult<DeezerGenre>>(`radio/genres`, options);
  };

  /**
   * Get top radios.
   */
  const top = async (options: DeezerListOptions = {}) => {
    return client.request<DeezerPaginationResult<DeezerRadio>>(`radio/top`, options);
  };

  /**
   * Get radio lists.
   */
  const lists = async (options: DeezerListOptions = {}) => {
    return client.request<DeezerPaginationResult<DeezerRadio>>(`radio/lists`, options);
  };

  /**
   * Get tracks for a radio.
   */
  const radioTracks = async (options: DeezerIdOptions) => {
    const { id, ...params } = options;
    return client.request<DeezerPaginationResult<DeezerTrack>>(`radio/${id}/tracks`, params);
  };

  return Object.assign(radio, {
    genres,
    top,
    lists,
    tracks: radioTracks,
  });
}
