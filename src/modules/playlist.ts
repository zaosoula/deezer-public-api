import { DeezerClient } from "../client.js";
import {
  PaginationResult,
  Playlist,
  Comment,
  User,
  Track,
} from "../types/index.js";

/**
 * Creates the Playlist module for the Deezer API.
 * @param client The base DeezerClient instance.
 */
export function createPlaylistModule(client: DeezerClient) {
  /**
   * Get a playlist's data.
   * @param id The playlist ID.
   * @param limit The number of items to return.
   * @param index The index of the first item to return.
   */
  const playlist = async (
    id: number | string,
    limit?: number,
    index?: number,
  ) => {
    return client.request<Playlist>(`playlist/${id}`, { limit, index });
  };

  /**
   * Get a playlist's comments.
   * @param id The playlist ID.
   * @param limit The number of items to return.
   * @param index The index of the first item to return.
   */
  const comments = async (
    id: number | string,
    limit?: number,
    index?: number,
  ) => {
    return client.request<PaginationResult<Comment>>(
      `playlist/${id}/comments`,
      {
        limit,
        index,
      },
    );
  };

  /**
   * Get a playlist's fans.
   * @param id The playlist ID.
   * @param limit The number of items to return.
   * @param index The index of the first item to return.
   */
  const fans = async (id: number | string, limit?: number, index?: number) => {
    return client.request<PaginationResult<User>>(`playlist/${id}/fans`, {
      limit,
      index,
    });
  };

  /**
   * Get a playlist's tracks.
   * @param id The playlist ID.
   * @param limit The number of items to return.
   * @param index The index of the first item to return.
   */
  const tracks = async (
    id: number | string,
    limit?: number,
    index?: number,
  ) => {
    return client.request<PaginationResult<Track>>(`playlist/${id}/tracks`, {
      limit,
      index,
    });
  };

  /**
   * Get a playlist's radio tracks.
   * @param id The playlist ID.
   * @param limit The number of items to return.
   * @param index The index of the first item to return.
   */
  const radio = async (id: number | string, limit?: number, index?: number) => {
    return client.request<PaginationResult<Track>>(`playlist/${id}/radio`, {
      limit,
      index,
    });
  };

  return Object.assign(playlist, {
    comments,
    fans,
    tracks,
    radio,
  });
}
