import DeezerPublicApi from '../deezer-public-api.js';
export default class Album {
    private api;
    constructor(api: DeezerPublicApi);
    get({ id, }: {
        id: number;
    }): Promise<Album>;
    fans({ id, }: {
        id: number;
    }): Promise<any>;
    tracks({ id, }: {
        id: number;
    }): Promise<any>;
}
