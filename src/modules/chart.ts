import { DeezerClient } from "../client.js";
import {
  PaginationResult,
  Track,
  Album,
  Artist,
  Playlist,
  Podcast,
} from "../types/index.js";

export function createChartModule(client: DeezerClient) {
  const chart = async (limit?: number, index?: number) => {
    return client.request<any>(`chart`, { limit, index });
  };

  chart.tracks = async (limit?: number, index?: number) => {
    return client.request<PaginationResult<Track>>(`chart/0/tracks`, {
      limit,
      index,
    });
  };

  chart.albums = async (limit?: number, index?: number) => {
    return client.request<PaginationResult<Album>>(`chart/0/albums`, {
      limit,
      index,
    });
  };

  chart.artists = async (limit?: number, index?: number) => {
    return client.request<PaginationResult<Artist>>(`chart/0/artists`, {
      limit,
      index,
    });
  };

  chart.playlists = async (limit?: number, index?: number) => {
    return client.request<PaginationResult<Playlist>>(`chart/0/playlists`, {
      limit,
      index,
    });
  };

  chart.podcasts = async (limit?: number, index?: number) => {
    return client.request<PaginationResult<Podcast>>(`chart/0/podcasts`, {
      limit,
      index,
    });
  };

  return chart;
}
