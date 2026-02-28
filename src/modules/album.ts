import { DeezerClient } from "../client.js";
import {
  Album,
  PaginationResult,
  Track,
  Artist,
  Comment,
} from "../types/index.js";

/**
 * Creates the Album module for the Deezer API.
 * @param client The base DeezerClient instance.
 */
export function createAlbumModule(client: DeezerClient) {
  /**
   * Get an album's data.
   * @param id The album ID.
   * @param limit The number of items to return.
   * @param index The index of the first item to return.
   */
  const album = async (id: number | string, limit?: number, index?: number) => {
    return client.request<Album>(`album/${id}`, { limit, index });
  };

  /**
   * Get an album's comments.
   * @param id The album ID.
   * @param limit The number of items to return.
   * @param index The index of the first item to return.
   */
  album.comments = async (
    id: number | string,
    limit?: number,
    index?: number,
  ) => {
    return client.request<PaginationResult<Comment>>(`album/${id}/comments`, {
      limit,
      index,
    });
  };

  /**
   * Get an album's fans.
   * @param id The album ID.
   * @param limit The number of items to return.
   * @param index The index of the first item to return.
   */
  album.fans = async (id: number | string, limit?: number, index?: number) => {
    return client.request<PaginationResult<Artist>>(`album/${id}/fans`, {
      limit,
      index,
    });
  };

  /**
   * Get an album's tracks.
   * @param id The album ID.
   * @param limit The number of items to return.
   * @param index The index of the first item to return.
   */
  album.tracks = async (
    id: number | string,
    limit?: number,
    index?: number,
  ) => {
    return client.request<PaginationResult<Track>>(`album/${id}/tracks`, {
      limit,
      index,
    });
  };

  return album;
}
