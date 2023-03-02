import DeezerPublicApi, { GlobalParameters } from '../deezer-public-api.js';
import { DeezerSearch } from '../types.js';

export type AdvancedSearchOperator = 'artist' | 'album' | 'track' | 'label' | 'dur_min' | 'dur_max' | 'bpm_min' | 'bpm_max';

export default class Search {
  private api;

  constructor(api: DeezerPublicApi) {
    this.api = api;
  }

  all({
    query, order, limit, index, strict,
  }: {
    query: string | Record<AdvancedSearchOperator & 'term', string>
    strict?: boolean
  } & GlobalParameters) {
    let stringifiedQuery: string;
    if (typeof query === 'object') {
      stringifiedQuery = Object.entries(query).map(([operator, value]) => `${operator}:"${value}"`).join('');
    } else {
      stringifiedQuery = query;
    }

    return this.api.request({
      uri: 'search', query: stringifiedQuery, strict, order, index, limit,
    });
  }

  album({
    query, order, limit, index, strict,
  }: {
    query: string
    strict?: boolean
  } & GlobalParameters): Promise<DeezerSearch> {
    return this.api.request({
      uri: 'search/album', query, strict, order, index, limit,
    });
  }

  artist({
    query, order, limit, index, strict,
  }: {
    query: string
    strict?: boolean
  } & GlobalParameters): Promise<DeezerSearch> {
    return this.api.request({
      uri: 'search/artist', query, strict, order, index, limit,
    });
  }

  playlist({
    query, order, limit, index, strict,
  }: {
    query: string
    strict?: boolean
  } & GlobalParameters): Promise<DeezerSearch> {
    return this.api.request({
      uri: 'search/playlist', query, strict, order, index, limit,
    });
  }

  podcast({
    query, order, limit, index, strict,
  }: {
    query: string
    strict?: boolean
  } & GlobalParameters): Promise<DeezerSearch> {
    return this.api.request({
      uri: 'search/podcast', query, strict, order, index, limit,
    });
  }

  radio({
    query, order, limit, index, strict,
  }: {
    query: string
    strict?: boolean
  } & GlobalParameters): Promise<DeezerSearch> {
    return this.api.request({
      uri: 'search/radio', query, strict, order, index, limit,
    });
  }

  track({
    query, order, limit, index, strict,
  }: {
    query: string
    strict?: boolean
  } & GlobalParameters): Promise<DeezerSearch> {
    return this.api.request({
      uri: 'search/track', query, strict, order, index, limit,
    });
  }

  user({
    query, order, limit, index, strict,
  }: {
    query: string
    strict?: boolean
  } & GlobalParameters): Promise<DeezerSearch> {
    return this.api.request({
      uri: 'search/user', query, strict, order, index, limit,
    });
  }
}
