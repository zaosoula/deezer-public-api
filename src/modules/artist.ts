import { DeezerClient } from "../client.js";
import {
  Artist,
  PaginationResult,
  Album,
  Comment,
  Playlist,
  Radio,
  Track,
  IdOptions,
} from "../types/index.js";

/**
 * Creates the Artist module for the Deezer API.
 * @param client The base DeezerClient instance.
 */
export function createArtistModule(client: DeezerClient) {
  /**
   * Get an artist's data.
   */
  const artist = async (options: IdOptions) => {
    const { id, ...params } = options;
    return client.request<Artist>(`artist/${id}`, params);
  };

  /**
   * Get an artist's top tracks.
   */
  artist.top = async (options: IdOptions) => {
    const { id, ...params } = options;
    return client.request<PaginationResult<Track>>(`artist/${id}/top`, params);
  };

  /**
   * Get an artist's albums.
   */
  artist.albums = async (options: IdOptions) => {
    const { id, ...params } = options;
    return client.request<PaginationResult<Album>>(`artist/${id}/albums`, params);
  };

  /**
   * Get an artist's comments.
   */
  artist.comments = async (options: IdOptions) => {
    const { id, ...params } = options;
    return client.request<PaginationResult<Comment>>(`artist/${id}/comments`, params);
  };

  /**
   * Get an artist's fans.
   */
  artist.fans = async (options: IdOptions) => {
    const { id, ...params } = options;
    return client.request<PaginationResult<Artist>>(`artist/${id}/fans`, params);
  };

  /**
   * Get an artist's related artists.
   */
  artist.related = async (options: IdOptions) => {
    const { id, ...params } = options;
    return client.request<PaginationResult<Artist>>(`artist/${id}/related`, params);
  };

  /**
   * Get an artist's radio tracks.
   */
  artist.radio = async (options: IdOptions) => {
    const { id, ...params } = options;
    return client.request<PaginationResult<Track>>(`artist/${id}/radio`, params);
  };

  /**
   * Get an artist's playlists.
   */
  artist.playlists = async (options: IdOptions) => {
    const { id, ...params } = options;
    return client.request<PaginationResult<Playlist>>(
      `artist/${id}/playlists`,
      params,
    );
  };

  return artist;
}
