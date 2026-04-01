import { DeezerClient } from "../client.js";
import {
  User,
  PaginationResult,
  Album,
  Artist,
  Playlist,
  Podcast,
  Radio,
  Track,
  IdOptions,
} from "../types/index.js";

/**
 * Creates the User module for the Deezer API.
 * @param client The base DeezerClient instance.
 */
export function createUserModule(client: DeezerClient) {
  const user = async (options: IdOptions) => {
    const { id, ...params } = options;
    return client.request<User>(`user/${id}`, params);
  };

  const charts = Object.assign(
    async (options: IdOptions) => {
      const { id, ...params } = options;
      return client.request<any>(`user/${id}/charts`, params);
    },
    {
      tracks: async (options: IdOptions) => {
        const { id, ...params } = options;
        return client.request<PaginationResult<Track>>(
          `user/${id}/charts/tracks`,
          params,
        );
      },
      albums: async (options: IdOptions) => {
        const { id, ...params } = options;
        return client.request<PaginationResult<Album>>(
          `user/${id}/charts/albums`,
          params,
        );
      },
      playlists: async (options: IdOptions) => {
        const { id, ...params } = options;
        return client.request<PaginationResult<Playlist>>(
          `user/${id}/charts/playlists`,
          params,
        );
      },
      artists: async (options: IdOptions) => {
        const { id, ...params } = options;
        return client.request<PaginationResult<Artist>>(
          `user/${id}/charts/artists`,
          params,
        );
      },
    },
  );

  return Object.assign(user, {
    albums: async (options: IdOptions) => {
      const { id, ...params } = options;
      return client.request<PaginationResult<Album>>(`user/${id}/albums`, params);
    },
    artists: async (options: IdOptions) => {
      const { id, ...params } = options;
      return client.request<PaginationResult<Artist>>(`user/${id}/artists`, params);
    },
    flow: async (options: IdOptions) => {
      const { id, ...params } = options;
      return client.request<PaginationResult<Track>>(`user/${id}/flow`, params);
    },
    followings: async (options: IdOptions) => {
      const { id, ...params } = options;
      return client.request<PaginationResult<Artist>>(`user/${id}/followings`, params);
    },
    followers: async (options: IdOptions) => {
      const { id, ...params } = options;
      return client.request<PaginationResult<User>>(`user/${id}/followers`, params);
    },
    playlists: async (options: IdOptions) => {
      const { id, ...params } = options;
      return client.request<PaginationResult<Playlist>>(`user/${id}/playlists`, params);
    },
    podcasts: async (options: IdOptions) => {
      const { id, ...params } = options;
      return client.request<PaginationResult<Podcast>>(`user/${id}/podcasts`, params);
    },
    radios: async (options: IdOptions) => {
      const { id, ...params } = options;
      return client.request<PaginationResult<Radio>>(`user/${id}/radios`, params);
    },
    tracks: async (options: IdOptions) => {
      const { id, ...params } = options;
      return client.request<PaginationResult<Track>>(`user/${id}/tracks`, params);
    },
    charts,
  });
}
