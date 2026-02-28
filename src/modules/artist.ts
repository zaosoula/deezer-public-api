import { DeezerClient } from "../client.js";
import {
  Artist,
  PaginationResult,
  Album,
  Comment,
  Playlist,
  Radio,
  Track,
} from "../types/index.js";

/**
 * Creates the Artist module for the Deezer API.
 * @param client The base DeezerClient instance.
 */
export function createArtistModule(client: DeezerClient) {
  /**
   * Get an artist's data.
   * @param id The artist ID.
   * @param limit The number of items to return.
   * @param index The index of the first item to return.
   */
  const artist = async (
    id: number | string,
    limit?: number,
    index?: number,
  ) => {
    return client.request<Artist>(`artist/${id}`, { limit, index });
  };

  /**
   * Get an artist's top tracks.
   * @param id The artist ID.
   * @param limit The number of items to return.
   * @param index The index of the first item to return.
   */
  artist.top = async (id: number | string, limit?: number, index?: number) => {
    return client.request<PaginationResult<Track>>(`artist/${id}/top`, {
      limit,
      index,
    });
  };

  /**
   * Get an artist's albums.
   * @param id The artist ID.
   * @param limit The number of items to return.
   * @param index The index of the first item to return.
   */
  artist.albums = async (
    id: number | string,
    limit?: number,
    index?: number,
  ) => {
    return client.request<PaginationResult<Album>>(`artist/${id}/albums`, {
      limit,
      index,
    });
  };

  /**
   * Get an artist's comments.
   * @param id The artist ID.
   * @param limit The number of items to return.
   * @param index The index of the first item to return.
   */
  artist.comments = async (
    id: number | string,
    limit?: number,
    index?: number,
  ) => {
    return client.request<PaginationResult<Comment>>(`artist/${id}/comments`, {
      limit,
      index,
    });
  };

  /**
   * Get an artist's fans.
   * @param id The artist ID.
   * @param limit The number of items to return.
   * @param index The index of the first item to return.
   */
  artist.fans = async (id: number | string, limit?: number, index?: number) => {
    return client.request<PaginationResult<Artist>>(`artist/${id}/fans`, {
      limit,
      index,
    });
  };

  /**
   * Get an artist's related artists.
   * @param id The artist ID.
   * @param limit The number of items to return.
   * @param index The index of the first item to return.
   */
  artist.related = async (
    id: number | string,
    limit?: number,
    index?: number,
  ) => {
    return client.request<PaginationResult<Artist>>(`artist/${id}/related`, {
      limit,
      index,
    });
  };

  /**
   * Get an artist's radio tracks.
   * @param id The artist ID.
   * @param limit The number of items to return.
   * @param index The index of the first item to return.
   */
  artist.radio = async (
    id: number | string,
    limit?: number,
    index?: number,
  ) => {
    return client.request<PaginationResult<Track>>(`artist/${id}/radio`, {
      limit,
      index,
    });
  };

  /**
   * Get an artist's playlists.
   * @param id The artist ID.
   * @param limit The number of items to return.
   * @param index The index of the first item to return.
   */
  artist.playlists = async (
    id: number | string,
    limit?: number,
    index?: number,
  ) => {
    return client.request<PaginationResult<Playlist>>(
      `artist/${id}/playlists`,
      {
        limit,
        index,
      },
    );
  };

  return artist;
}
