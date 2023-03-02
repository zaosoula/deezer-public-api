import { request } from 'undici';
import Search from './domains/search.js';
import Track from './domains/track.js';
import Album from './domains/album.js';
import Artist from './domains/artist.js';
import Auth from './domains/auth.js';

export interface GlobalParameters {
  index?: number;
  limit?: number;
  order?: string;
}
export default class DeezerPublicApi {
  auth = new Auth(this);

  search = new Search(this);

  track = new Track(this);

  album = new Album(this);

  artist = new Artist(this);

  deezerApiBaseUrl = 'https://api.deezer.com/';

  config: Partial<{
    appId: string, redirectUri: string, perms: string[]
  }> = {};

  async request({
    uri, index, limit, order, strict, query,
  }: {
    uri: string;
    query?: string;
    strict?: boolean;
  } & GlobalParameters) {
    const url = new URL(uri, this.deezerApiBaseUrl);

    const setParam = (key: string, value?: unknown) => (typeof value !== 'undefined' ? url.searchParams.set(key, String(value)) : undefined);

    setParam('q', query);
    setParam('index', index);
    setParam('limit', limit);
    setParam('order', order);
    setParam('strict', strict ? 'on' : undefined);

    console.log(url.toString(), {
      uri, index, limit, order, strict, query,
    });

    const { body } = await request(url);

    return body.json();
  }
}
