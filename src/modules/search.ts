import { DeezerClient } from "../client.js";
import {
  PaginationResult,
  Album,
  Artist,
  Playlist,
  Podcast,
  Radio,
  Track,
  SearchOptions,
  SearchOrder,
} from "../types/index.js";
import { SearchBuilder } from "../search-builder.js";

/**
 * Creates the Search module for the Deezer API.
 * @param client The base DeezerClient instance.
 */
export function createSearchModule(client: DeezerClient) {
  /**
   * Search for anything.
   * @param options Search query string or options object.
   * @param order Sorting order.
   * @param limit The number of items to return.
   * @param index The index of the first item to return.
   */
  const search = async (
    query: string | SearchBuilder,
    order?: SearchOrder,
    limit?: number,
    index?: number,
    strict?: boolean,
  ) => {
    let q: string;
    let finalOrder = order;
    let finalStrict = strict;

    if (query instanceof SearchBuilder) {
      q = query.build();
      finalOrder = query.getOrder() || order;
      finalStrict = query.getStrictMode() || strict;
    } else {
      q = query;
    }

    return client.request<PaginationResult<any>>("search", {
      q,
      order: finalOrder,
      limit,
      index,
      strict: finalStrict,
    });
  };

  /**
   * Get a fluent search query builder.
   * @param query Initial query string.
   */
  search.builder = (query?: string) => new SearchBuilder(query);

  /**
   * Search for artists.
   * @param query Search query.
   * @param order Sorting order.
   * @param limit The number of items to return.
   * @param index The index of the first item to return.
   * @param strict Enable strict mode.
   */
  search.artist = async (
    query: string,
    order?: SearchOrder,
    limit?: number,
    index?: number,
    strict?: boolean,
  ) => {
    return client.request<PaginationResult<Artist>>(`search/artist`, {
      q: query,
      order,
      limit,
      index,
      strict,
    });
  };

  /**
   * Search for playlists.
   * @param query Search query.
   * @param order Sorting order.
   * @param limit The number of items to return.
   * @param index The index of the first item to return.
   * @param strict Enable strict mode.
   */
  search.playlist = async (
    query: string,
    order?: SearchOrder,
    limit?: number,
    index?: number,
    strict?: boolean,
  ) => {
    return client.request<PaginationResult<Playlist>>(`search/playlist`, {
      q: query,
      order,
      limit,
      index,
      strict,
    });
  };

  /**
   * Search for podcasts.
   * @param query Search query.
   * @param order Sorting order.
   * @param limit The number of items to return.
   * @param index The index of the first item to return.
   * @param strict Enable strict mode.
   */
  search.podcast = async (
    query: string,
    order?: SearchOrder,
    limit?: number,
    index?: number,
    strict?: boolean,
  ) => {
    return client.request<PaginationResult<Podcast>>(`search/podcast`, {
      q: query,
      order,
      limit,
      index,
      strict,
    });
  };

  /**
   * Search for radios.
   * @param query Search query.
   * @param order Sorting order.
   * @param limit The number of items to return.
   * @param index The index of the first item to return.
   * @param strict Enable strict mode.
   */
  search.radio = async (
    query: string,
    order?: SearchOrder,
    limit?: number,
    index?: number,
    strict?: boolean,
  ) => {
    return client.request<PaginationResult<Radio>>(`search/radio`, {
      q: query,
      order,
      limit,
      index,
      strict,
    });
  };

  /**
   * Search for tracks.
   * @param query Search query.
   * @param order Sorting order.
   * @param limit The number of items to return.
   * @param index The index of the first item to return.
   * @param strict Enable strict mode.
   */
  search.track = async (
    query: string,
    order?: SearchOrder,
    limit?: number,
    index?: number,
    strict?: boolean,
  ) => {
    return client.request<PaginationResult<Track>>(`search/track`, {
      q: query,
      order,
      limit,
      index,
      strict,
    });
  };

  /**
   * Search for albums.
   * @param query Search query.
   * @param order Sorting order.
   * @param limit The number of items to return.
   * @param index The index of the first item to return.
   * @param strict Enable strict mode.
   */
  search.album = async (
    query: string,
    order?: SearchOrder,
    limit?: number,
    index?: number,
    strict?: boolean,
  ) => {
    return client.request<PaginationResult<Album>>(`search/album`, {
      q: query,
      order,
      limit,
      index,
      strict,
    });
  };

  return search;
}
