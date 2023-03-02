import DeezerPublicApi from '../deezer-public-api.js';
export default class Artist {
    private api;
    constructor(api: DeezerPublicApi);
    get({ id, }: {
        id: number;
    }): Promise<Artist>;
    top({ id, }: {
        id: number;
    }): Promise<any>;
    albums({ id, }: {
        id: number;
    }): Promise<any>;
    fans({ id, }: {
        id: number;
    }): Promise<any>;
    related({ id, }: {
        id: number;
    }): Promise<any>;
    radio({ id, }: {
        id: number;
    }): Promise<any>;
    playlist({ id, }: {
        id: number;
    }): Promise<any>;
}
