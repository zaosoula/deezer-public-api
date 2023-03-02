import DeezerPublicApi, { GlobalParameters } from '../deezer-public-api.js';
import { DeezerSearch } from '../types.js';
export type AdvancedSearchOperator = 'artist' | 'album' | 'track' | 'label' | 'dur_min' | 'dur_max' | 'bpm_min' | 'bpm_max';
export default class Search {
    private api;
    constructor(api: DeezerPublicApi);
    all({ query, order, limit, index, strict, }: {
        query: string | Record<AdvancedSearchOperator & 'term', string>;
        strict?: boolean;
    } & GlobalParameters): Promise<any>;
    album({ query, order, limit, index, strict, }: {
        query: string;
        strict?: boolean;
    } & GlobalParameters): Promise<DeezerSearch>;
    artist({ query, order, limit, index, strict, }: {
        query: string;
        strict?: boolean;
    } & GlobalParameters): Promise<DeezerSearch>;
    playlist({ query, order, limit, index, strict, }: {
        query: string;
        strict?: boolean;
    } & GlobalParameters): Promise<DeezerSearch>;
    podcast({ query, order, limit, index, strict, }: {
        query: string;
        strict?: boolean;
    } & GlobalParameters): Promise<DeezerSearch>;
    radio({ query, order, limit, index, strict, }: {
        query: string;
        strict?: boolean;
    } & GlobalParameters): Promise<DeezerSearch>;
    track({ query, order, limit, index, strict, }: {
        query: string;
        strict?: boolean;
    } & GlobalParameters): Promise<DeezerSearch>;
    user({ query, order, limit, index, strict, }: {
        query: string;
        strict?: boolean;
    } & GlobalParameters): Promise<DeezerSearch>;
}
