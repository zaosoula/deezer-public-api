import DeezerPublicApi from '../deezer-public-api.js';

export default class Album {
  private api;

  constructor(api: DeezerPublicApi) {
    this.api = api;
  }

  get({
    id,
  }: {
    id: number
  }): Promise<Album> {
    return this.api.request({
      uri: `album/${id}`,
    });
  }

  fans({
    id,
  }: {
    id: number
  }) {
    return this.api.request({
      uri: `album/${id}/fans`,
    });
  }

  tracks({
    id,
  }: {
    id: number
  }) {
    return this.api.request({
      uri: `album/${id}/fans`,
    });
  }
}
