import { DeezerClient } from "../client.js";
import {
  PaginationResult,
  Album,
  Artist,
  Playlist,
  Podcast,
  Radio,
  Track,
  User,
  SearchRequestOptions,
} from "../types/index.js";
import { SearchBuilder } from "../search-builder.js";

export function createSearchModule(client: DeezerClient) {
  /**
   * Internal helper to execute search requests with builder support.
   */
  const executeSearch = async <T>(
    endpoint: string,
    options: SearchRequestOptions,
  ): Promise<PaginationResult<T>> => {
    const { q, order, limit, index, strict } = options;
    let finalQuery: string;
    let finalOrder = order;
    let finalStrict = strict;
    let finalLimit = limit;
    let finalIndex = index;

    if (q instanceof SearchBuilder) {
      finalQuery = q.build();
      finalOrder = q.getOrder() || order;
      finalStrict = q.getStrictMode() || strict;
      finalLimit = q.getLimit() || limit;
      finalIndex = q.getIndex() || index;
    } else {
      finalQuery = q;
    }

    return client.request<PaginationResult<T>>(endpoint, {
      q: finalQuery,
      order: finalOrder,
      limit: finalLimit,
      index: finalIndex,
      strict: finalStrict,
    });
  };

  /**
   * Search for anything (defaults to tracks).
   */
  const search = async (options: SearchRequestOptions) => {
    return executeSearch<any>("search", options);
  };

  /**
   * Specialized search methods.
   */
  return Object.assign(search, {
    /**
     * Get a fluent search query builder.
     * @param query Initial query string.
     */
    builder: (query?: string) => new SearchBuilder(query),

    /**
     * Search for artists.
     */
    artist: async (options: SearchRequestOptions) => {
      return executeSearch<Artist>("search/artist", options);
    },

    /**
     * Search for playlists.
     */
    playlist: async (options: SearchRequestOptions) => {
      return executeSearch<Playlist>("search/playlist", options);
    },

    /**
     * Search for podcasts.
     */
    podcast: async (options: SearchRequestOptions) => {
      return executeSearch<Podcast>("search/podcast", options);
    },

    /**
     * Search for radios.
     */
    radio: async (options: SearchRequestOptions) => {
      return executeSearch<Radio>("search/radio", options);
    },

    /**
     * Search for tracks.
     */
    track: async (options: SearchRequestOptions) => {
      return executeSearch<Track>("search/track", options);
    },

    /**
     * Search for albums.
     */
    album: async (options: SearchRequestOptions) => {
      return executeSearch<Album>("search/album", options);
    },

    /**
     * Search for users.
     */
    user: async (options: SearchRequestOptions) => {
      return executeSearch<User>("search/user", options);
    },
  });
}
