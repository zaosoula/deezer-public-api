import DeezerPublicApi from '../src/deezer-public-api.js';

const deezer = new DeezerPublicApi();

deezer.auth.setup({
  appId: '585884',
  redirectUri: 'http://localhost:3047',
});

console.log(deezer.auth.getLoginUrl());

console.log(await deezer.auth.waitForLoginCallback());
