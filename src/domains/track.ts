import DeezerPublicApi from '../deezer-public-api.js';

export default class Track {
  private api;

  constructor(api: DeezerPublicApi) {
    this.api = api;
  }

  get({
    id,
  }: {
    id: number
  }): Promise<Track> {
    return this.api.request({
      uri: `track/${id}`,
    });
  }
}
