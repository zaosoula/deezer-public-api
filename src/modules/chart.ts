import { DeezerClient } from "../client.js";
import {
  DeezerPaginationResult,
  DeezerTrack,
  DeezerAlbum,
  DeezerArtist,
  DeezerPlaylist,
  DeezerPodcast,
  DeezerListOptions,
} from "../types/index.js";

export function createChartModule(client: DeezerClient) {
  const chart = async (options: DeezerListOptions = {}) => {
    return client.request<any>("chart", options);
  };

  return Object.assign(chart, {
    tracks: async (options: DeezerListOptions = {}) => {
      return client.request<DeezerPaginationResult<DeezerTrack>>("chart/0/tracks", options);
    },
    albums: async (options: DeezerListOptions = {}) => {
      return client.request<DeezerPaginationResult<DeezerAlbum>>("chart/0/albums", options);
    },
    artists: async (options: DeezerListOptions = {}) => {
      return client.request<DeezerPaginationResult<DeezerArtist>>("chart/0/artists", options);
    },
    playlists: async (options: DeezerListOptions = {}) => {
      return client.request<DeezerPaginationResult<DeezerPlaylist>>("chart/0/playlists", options);
    },
    podcasts: async (options: DeezerListOptions = {}) => {
      return client.request<DeezerPaginationResult<DeezerPodcast>>("chart/0/podcasts", options);
    },
  });
}
