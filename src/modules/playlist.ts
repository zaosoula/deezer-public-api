import { DeezerClient } from "../client.js";
import {
  PaginationResult,
  Playlist,
  Comment,
  User,
  Track,
  IdOptions,
} from "../types/index.js";

/**
 * Creates the Playlist module for the Deezer API.
 * @param client The base DeezerClient instance.
 */
export function createPlaylistModule(client: DeezerClient) {
  /**
   * Get a playlist's data.
   */
  const playlist = async (options: IdOptions) => {
    const { id, ...params } = options;
    return client.request<Playlist>(`playlist/${id}`, params);
  };

  /**
   * Get a playlist's comments.
   */
  const comments = async (options: IdOptions) => {
    const { id, ...params } = options;
    return client.request<PaginationResult<Comment>>(
      `playlist/${id}/comments`,
      params,
    );
  };

  /**
   * Get a playlist's fans.
   */
  const fans = async (options: IdOptions) => {
    const { id, ...params } = options;
    return client.request<PaginationResult<User>>(`playlist/${id}/fans`, params);
  };

  /**
   * Get a playlist's tracks.
   */
  const tracks = async (options: IdOptions) => {
    const { id, ...params } = options;
    return client.request<PaginationResult<Track>>(`playlist/${id}/tracks`, params);
  };

  /**
   * Get a playlist's radio tracks.
   */
  const radio = async (options: IdOptions) => {
    const { id, ...params } = options;
    return client.request<PaginationResult<Track>>(`playlist/${id}/radio`, params);
  };

  return Object.assign(playlist, {
    comments,
    fans,
    tracks,
    radio,
  });
}
