import { DeezerClient } from "../client.js";
import {
  DeezerAlbum,
  DeezerPaginationResult,
  DeezerTrack,
  DeezerArtist,
  DeezerComment,
  DeezerIdOptions,
  DeezerUpcOptions,
} from "../types/index.js";

/**
 * Creates the Album module for the Deezer API.
 * @param client The base DeezerClient instance.
 */
export function createAlbumModule(client: DeezerClient) {
  /**
   * Get an album's data.
   */
  const album = async (options: DeezerIdOptions) => {
    const { id, ...params } = options;
    return client.request<DeezerAlbum>(`album/${id}`, params);
  };

  /**
   * Get an album's comments.
   */
  album.comments = async (options: DeezerIdOptions) => {
    const { id, ...params } = options;
    return client.request<DeezerPaginationResult<DeezerComment>>(`album/${id}/comments`, params);
  };

  /**
   * Get an album's fans.
   */
  album.fans = async (options: DeezerIdOptions) => {
    const { id, ...params } = options;
    return client.request<DeezerPaginationResult<DeezerArtist>>(`album/${id}/fans`, params);
  };

  /**
   * Get an album's tracks.
   */
  album.tracks = async (options: DeezerIdOptions) => {
    const { id, ...params } = options;
    return client.request<DeezerPaginationResult<DeezerTrack>>(`album/${id}/tracks`, params);
  };

  /**
   * Get an album's data by UPC.
   */
  album.upc = async (options: DeezerUpcOptions) => {
    const { upc, ...params } = options;
    return client.request<DeezerAlbum>(`album/upc:${upc}`, params);
  };

  return album;
}
