import { DeezerClient } from "../client.js";
import {
  DeezerArtist,
  DeezerPaginationResult,
  DeezerAlbum,
  DeezerComment,
  DeezerPlaylist,
  DeezerRadio,
  DeezerTrack,
  DeezerIdOptions,
} from "../types/index.js";

/**
 * Creates the Artist module for the Deezer API.
 * @param client The base DeezerClient instance.
 */
export function createArtistModule(client: DeezerClient) {
  /**
   * Get an artist's data.
   */
  const artist = async (options: DeezerIdOptions) => {
    const { id, ...params } = options;
    return client.request<DeezerArtist>(`artist/${id}`, params);
  };

  /**
   * Get an artist's top tracks.
   */
  artist.top = async (options: DeezerIdOptions) => {
    const { id, ...params } = options;
    return client.request<DeezerPaginationResult<DeezerTrack>>(`artist/${id}/top`, params);
  };

  /**
   * Get an artist's albums.
   */
  artist.albums = async (options: DeezerIdOptions) => {
    const { id, ...params } = options;
    return client.request<DeezerPaginationResult<DeezerAlbum>>(`artist/${id}/albums`, params);
  };

  /**
   * Get an artist's comments.
   */
  artist.comments = async (options: DeezerIdOptions) => {
    const { id, ...params } = options;
    return client.request<DeezerPaginationResult<DeezerComment>>(`artist/${id}/comments`, params);
  };

  /**
   * Get an artist's fans.
   */
  artist.fans = async (options: DeezerIdOptions) => {
    const { id, ...params } = options;
    return client.request<DeezerPaginationResult<DeezerArtist>>(`artist/${id}/fans`, params);
  };

  /**
   * Get an artist's related artists.
   */
  artist.related = async (options: DeezerIdOptions) => {
    const { id, ...params } = options;
    return client.request<DeezerPaginationResult<DeezerArtist>>(`artist/${id}/related`, params);
  };

  /**
   * Get an artist's radio tracks.
   */
  artist.radio = async (options: DeezerIdOptions) => {
    const { id, ...params } = options;
    return client.request<DeezerPaginationResult<DeezerTrack>>(`artist/${id}/radio`, params);
  };

  /**
   * Get an artist's playlists.
   */
  artist.playlists = async (options: DeezerIdOptions) => {
    const { id, ...params } = options;
    return client.request<DeezerPaginationResult<DeezerPlaylist>>(
      `artist/${id}/playlists`,
      params,
    );
  };

  return artist;
}
