import { DeezerClient } from "../client.js";
import {
  Album,
  PaginationResult,
  Track,
  Artist,
  Comment,
  IdOptions,
  UpcOptions,
} from "../types/index.js";

/**
 * Creates the Album module for the Deezer API.
 * @param client The base DeezerClient instance.
 */
export function createAlbumModule(client: DeezerClient) {
  /**
   * Get an album's data.
   */
  const album = async (options: IdOptions) => {
    const { id, ...params } = options;
    return client.request<Album>(`album/${id}`, params);
  };

  /**
   * Get an album's comments.
   */
  album.comments = async (options: IdOptions) => {
    const { id, ...params } = options;
    return client.request<PaginationResult<Comment>>(`album/${id}/comments`, params);
  };

  /**
   * Get an album's fans.
   */
  album.fans = async (options: IdOptions) => {
    const { id, ...params } = options;
    return client.request<PaginationResult<Artist>>(`album/${id}/fans`, params);
  };

  /**
   * Get an album's tracks.
   */
  album.tracks = async (options: IdOptions) => {
    const { id, ...params } = options;
    return client.request<PaginationResult<Track>>(`album/${id}/tracks`, params);
  };

  /**
   * Get an album's data by UPC.
   */
  album.upc = async (options: UpcOptions) => {
    const { upc, ...params } = options;
    return client.request<Album>(`album/upc:${upc}`, params);
  };

  return album;
}
