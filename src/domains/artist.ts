import DeezerPublicApi from '../deezer-public-api.js';

export default class Artist {
  private api;

  constructor(api: DeezerPublicApi) {
    this.api = api;
  }

  get({
    id,
  }: {
    id: number
  }): Promise<Artist> {
    return this.api.request({
      uri: `artist/${id}`,
    });
  }

  top({
    id,
  }: {
    id: number
  }) {
    return this.api.request({
      uri: `artist/${id}/top`,
    });
  }

  albums({
    id,
  }: {
    id: number
  }) {
    return this.api.request({
      uri: `albums/${id}/top`,
    });
  }

  fans({
    id,
  }: {
    id: number
  }) {
    return this.api.request({
      uri: `artist/${id}/top`,
    });
  }

  related({
    id,
  }: {
    id: number
  }) {
    return this.api.request({
      uri: `artist/${id}/top`,
    });
  }

  radio({
    id,
  }: {
    id: number
  }) {
    return this.api.request({
      uri: `artist/${id}/top`,
    });
  }

  playlist({
    id,
  }: {
    id: number
  }) {
    return this.api.request({
      uri: `artist/${id}/top`,
    });
  }
}
