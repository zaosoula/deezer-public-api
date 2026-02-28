import { DeezerClient } from "../client.js";
import {
  PaginationResult,
  Track,
  Album,
  Artist,
  Playlist,
  Podcast,
  ListOptions,
} from "../types/index.js";

export function createChartModule(client: DeezerClient) {
  const chart = async (options: ListOptions = {}) => {
    return client.request<any>("chart", options);
  };

  return Object.assign(chart, {
    tracks: async (options: ListOptions = {}) => {
      return client.request<PaginationResult<Track>>("chart/0/tracks", options);
    },
    albums: async (options: ListOptions = {}) => {
      return client.request<PaginationResult<Album>>("chart/0/albums", options);
    },
    artists: async (options: ListOptions = {}) => {
      return client.request<PaginationResult<Artist>>("chart/0/artists", options);
    },
    playlists: async (options: ListOptions = {}) => {
      return client.request<PaginationResult<Playlist>>("chart/0/playlists", options);
    },
    podcasts: async (options: ListOptions = {}) => {
      return client.request<PaginationResult<Podcast>>("chart/0/podcasts", options);
    },
  });
}
