import DeezerPublicApi from '../deezer-public-api.js';
export default class Track {
    private api;
    constructor(api: DeezerPublicApi);
    get({ id, }: {
        id: number;
    }): Promise<Track>;
}
