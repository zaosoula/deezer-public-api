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
    auth: Auth;
    search: Search;
    track: Track;
    album: Album;
    artist: Artist;
    deezerApiBaseUrl: string;
    config: Partial<{
        appId: string;
        redirectUri: string;
        perms: string[];
    }>;
    request({ uri, index, limit, order, strict, query, }: {
        uri: string;
        query?: string;
        strict?: boolean;
    } & GlobalParameters): Promise<any>;
}
