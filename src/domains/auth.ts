import * as http from 'node:http';
import DeezerPublicApi from '../deezer-public-api.js';

export default class Auth {
  private api;

  constructor(api: DeezerPublicApi) {
    this.api = api;
  }

  setup({
    appId,
    redirectUri,
    perms,
  }: { appId: string, redirectUri?: string, perms?: string | string[] }) {
    this.api.config = {
      ...this.api.config,
      appId,
      redirectUri,
      perms: typeof perms === 'string' ? [perms] : perms,
    };
  }

  getLoginUrl() {
    if (!this.api.config.appId || !this.api.config.redirectUri) {
      throw new Error('auth.setup(opts: { appId: string, redirectUri: string, perms?: string | string[] }) should be called before auth.getLoginUrl');
    }

    const url = new URL('https://connect.deezer.com/oauth/auth.php');
    url.searchParams.set('app_id', this.api.config.appId);
    url.searchParams.set('redirect_uri', this.api.config.redirectUri);
    url.searchParams.set('perms', (this.api.config.perms ?? []).join(','));
    return url.toString();
  }

  waitForLoginCallback() {
    return new Promise((resolve) => {
      if (!this.api.config.appId || !this.api.config.redirectUri) {
        throw new Error('auth.setup(opts: { appId: string, redirectUri: string, perms?: string | string[] }) should be called before auth.getLoginUrl');
      }

      const redirectUri = new URL(this.api.config.redirectUri);

      const server = http.createServer((req, res) => {
        const requestUrl = new URL(req.url ?? '/', `http://${req.headers.host}`);

        if (requestUrl.pathname === redirectUri.pathname && requestUrl.searchParams.has('code')) {
          resolve({
            code: requestUrl.searchParams.get('code'),
          });

          res.writeHead(200, { 'Content-Type': 'text/html' }).end('<html><body><div style="display: grid; place-content: center; font-family: sans-serif"><h1>Auth code received</h1><p>You can close this window and get back to your terminal</p></div></body></html>');

          server.close(() => {
            console.log('closed');
          });
        }
      });

      server.listen(redirectUri.port);
    });
  }
}
