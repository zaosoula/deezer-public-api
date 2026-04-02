import { DeezerClient } from "../client.js";
import {
  DeezerPaginationResult,
  DeezerAlbum,
  DeezerArtist,
  DeezerPlaylist,
  DeezerPodcast,
  DeezerRadio,
  DeezerTrack,
  DeezerUser,
  DeezerSearchRequestOptions,
} from "../types/index.js";
import { DeezerSearchBuilder } from "../search-builder.js";

export function createSearchModule(client: DeezerClient) {
  /**
   * Internal helper to execute search requests with builder support.
   */
  const executeSearch = async <T>(
    endpoint: string,
    options: DeezerSearchRequestOptions,
  ): Promise<DeezerPaginationResult<T>> => {
    const { q, order, limit, index, strict } = options;
    let finalQuery: string;
    let finalOrder = order;
    let finalStrict = strict;
    let finalLimit = limit;
    let finalIndex = index;

    if (q instanceof DeezerSearchBuilder) {
      finalQuery = q.build();
      finalOrder = q.getOrder() || order;
      finalStrict = q.getStrictMode() || strict;
      finalLimit = q.getLimit() || limit;
      finalIndex = q.getIndex() || index;
    } else {
      finalQuery = q;
    }

    return client.request<DeezerPaginationResult<T>>(endpoint, {
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
  const search = async (options: DeezerSearchRequestOptions) => {
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
    builder: (query?: string) => new DeezerSearchBuilder(query),

    /**
     * Search for artists.
     */
    artist: async (options: DeezerSearchRequestOptions) => {
      return executeSearch<DeezerArtist>("search/artist", options);
    },

    /**
     * Search for playlists.
     */
    playlist: async (options: DeezerSearchRequestOptions) => {
      return executeSearch<DeezerPlaylist>("search/playlist", options);
    },

    /**
     * Search for podcasts.
     */
    podcast: async (options: DeezerSearchRequestOptions) => {
      return executeSearch<DeezerPodcast>("search/podcast", options);
    },

    /**
     * Search for radios.
     */
    radio: async (options: DeezerSearchRequestOptions) => {
      return executeSearch<DeezerRadio>("search/radio", options);
    },

    /**
     * Search for tracks.
     */
    track: async (options: DeezerSearchRequestOptions) => {
      return executeSearch<DeezerTrack>("search/track", options);
    },

    /**
     * Search for albums.
     */
    album: async (options: DeezerSearchRequestOptions) => {
      return executeSearch<DeezerAlbum>("search/album", options);
    },

    /**
     * Search for users.
     */
    user: async (options: DeezerSearchRequestOptions) => {
      return executeSearch<DeezerUser>("search/user", options);
    },
  });
}
