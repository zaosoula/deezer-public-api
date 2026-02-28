import { DeezerClient } from "../client.js";
import { PaginationResult, Radio, Genre, Track } from "../types/index.js";

/**
 * Creates the Radio module for the Deezer API.
 * @param client The base DeezerClient instance.
 */
export function createRadioModule(client: DeezerClient) {
  /**
   * Get a radio's data.
   * @param id The radio ID.
   * @param limit The number of items to return.
   * @param index The index of the first item to return.
   */
  const radio = async (
    id?: number | string,
    limit?: number,
    index?: number,
  ) => {
    return client.request<Radio>(`radio/${id !== undefined ? id : ""}`, {
      limit,
      index,
    });
  };

  /**
   * Get radio genres.
   * @param limit The number of items to return.
   * @param index The index of the first item to return.
   */
  const genres = async (limit?: number, index?: number) => {
    return client.request<PaginationResult<Genre>>(`radio/genres`, {
      limit,
      index,
    });
  };

  /**
   * Get top radios.
   * @param limit The number of items to return.
   * @param index The index of the first item to return.
   */
  const top = async (limit?: number, index?: number) => {
    return client.request<PaginationResult<Radio>>(`radio/top`, {
      limit,
      index,
    });
  };

  /**
   * Get radio lists.
   * @param limit The number of items to return.
   * @param index The index of the first item to return.
   */
  const lists = async (limit?: number, index?: number) => {
    return client.request<PaginationResult<Radio>>(`radio/lists`, {
      limit,
      index,
    });
  };

  /**
   * Get tracks for a radio.
   * @param id The radio ID.
   * @param limit The number of items to return.
   * @param index The index of the first item to return.
   */
  const radioTracks = async (
    id: number | string,
    limit?: number,
    index?: number,
  ) => {
    return client.request<PaginationResult<Track>>(`radio/${id}/tracks`, {
      limit,
      index,
    });
  };

  return Object.assign(radio, {
    genres,
    top,
    lists,
    tracks: radioTracks,
  });
}
