import { DeezerClient } from "../client.js";
import {
  DeezerPaginationResult,
  DeezerPlaylist,
  DeezerComment,
  DeezerUser,
  DeezerTrack,
  DeezerIdOptions,
} from "../types/index.js";

/**
 * Creates the Playlist module for the Deezer API.
 * @param client The base DeezerClient instance.
 */
export function createPlaylistModule(client: DeezerClient) {
  /**
   * Get a playlist's data.
   */
  const playlist = async (options: DeezerIdOptions) => {
    const { id, ...params } = options;
    return client.request<DeezerPlaylist>(`playlist/${id}`, params);
  };

  /**
   * Get a playlist's comments.
   */
  const comments = async (options: DeezerIdOptions) => {
    const { id, ...params } = options;
    return client.request<DeezerPaginationResult<DeezerComment>>(
      `playlist/${id}/comments`,
      params,
    );
  };

  /**
   * Get a playlist's fans.
   */
  const fans = async (options: DeezerIdOptions) => {
    const { id, ...params } = options;
    return client.request<DeezerPaginationResult<DeezerUser>>(`playlist/${id}/fans`, params);
  };

  /**
   * Get a playlist's tracks.
   */
  const tracks = async (options: DeezerIdOptions) => {
    const { id, ...params } = options;
    return client.request<DeezerPaginationResult<DeezerTrack>>(`playlist/${id}/tracks`, params);
  };

  /**
   * Get a playlist's radio tracks.
   */
  const radio = async (options: DeezerIdOptions) => {
    const { id, ...params } = options;
    return client.request<DeezerPaginationResult<DeezerTrack>>(`playlist/${id}/radio`, params);
  };

  return Object.assign(playlist, {
    comments,
    fans,
    tracks,
    radio,
  });
}
