import DeezerPublicApi from '../deezer-public-api.js';
export default class Auth {
    private api;
    constructor(api: DeezerPublicApi);
    setup({ appId, redirectUri, perms, }: {
        appId: string;
        redirectUri?: string;
        perms?: string | string[];
    }): void;
    getLoginUrl(): string;
    waitForLoginCallback(): Promise<unknown>;
}
