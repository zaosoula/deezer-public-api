import { DeezerClient } from "../client.js";
import {
  DeezerUser,
  DeezerPaginationResult,
  DeezerAlbum,
  DeezerArtist,
  DeezerPlaylist,
  DeezerPodcast,
  DeezerRadio,
  DeezerTrack,
  DeezerIdOptions,
} from "../types/index.js";

/**
 * Creates the User module for the Deezer API.
 * @param client The base DeezerClient instance.
 */
export function createUserModule(client: DeezerClient) {
  const user = async (options: DeezerIdOptions) => {
    const { id, ...params } = options;
    return client.request<DeezerUser>(`user/${id}`, params);
  };

  const charts = Object.assign(
    async (options: DeezerIdOptions) => {
      const { id, ...params } = options;
      return client.request<any>(`user/${id}/charts`, params);
    },
    {
      tracks: async (options: DeezerIdOptions) => {
        const { id, ...params } = options;
        return client.request<DeezerPaginationResult<DeezerTrack>>(
          `user/${id}/charts/tracks`,
          params,
        );
      },
      albums: async (options: DeezerIdOptions) => {
        const { id, ...params } = options;
        return client.request<DeezerPaginationResult<DeezerAlbum>>(
          `user/${id}/charts/albums`,
          params,
        );
      },
      playlists: async (options: DeezerIdOptions) => {
        const { id, ...params } = options;
        return client.request<DeezerPaginationResult<DeezerPlaylist>>(
          `user/${id}/charts/playlists`,
          params,
        );
      },
      artists: async (options: DeezerIdOptions) => {
        const { id, ...params } = options;
        return client.request<DeezerPaginationResult<DeezerArtist>>(
          `user/${id}/charts/artists`,
          params,
        );
      },
    },
  );

  return Object.assign(user, {
    albums: async (options: DeezerIdOptions) => {
      const { id, ...params } = options;
      return client.request<DeezerPaginationResult<DeezerAlbum>>(`user/${id}/albums`, params);
    },
    artists: async (options: DeezerIdOptions) => {
      const { id, ...params } = options;
      return client.request<DeezerPaginationResult<DeezerArtist>>(`user/${id}/artists`, params);
    },
    flow: async (options: DeezerIdOptions) => {
      const { id, ...params } = options;
      return client.request<DeezerPaginationResult<DeezerTrack>>(`user/${id}/flow`, params);
    },
    followings: async (options: DeezerIdOptions) => {
      const { id, ...params } = options;
      return client.request<DeezerPaginationResult<DeezerArtist>>(`user/${id}/followings`, params);
    },
    followers: async (options: DeezerIdOptions) => {
      const { id, ...params } = options;
      return client.request<DeezerPaginationResult<DeezerUser>>(`user/${id}/followers`, params);
    },
    playlists: async (options: DeezerIdOptions) => {
      const { id, ...params } = options;
      return client.request<DeezerPaginationResult<DeezerPlaylist>>(`user/${id}/playlists`, params);
    },
    podcasts: async (options: DeezerIdOptions) => {
      const { id, ...params } = options;
      return client.request<DeezerPaginationResult<DeezerPodcast>>(`user/${id}/podcasts`, params);
    },
    radios: async (options: DeezerIdOptions) => {
      const { id, ...params } = options;
      return client.request<DeezerPaginationResult<DeezerRadio>>(`user/${id}/radios`, params);
    },
    tracks: async (options: DeezerIdOptions) => {
      const { id, ...params } = options;
      return client.request<DeezerPaginationResult<DeezerTrack>>(`user/${id}/tracks`, params);
    },
    charts,
  });
}
