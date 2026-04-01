import { DeezerClient, DeezerClientOptions } from "./client.js";
import { createAlbumModule } from "./modules/album.js";
import { createArtistModule } from "./modules/artist.js";
import { createSearchModule } from "./modules/search.js";
import { createEditorialModule } from "./modules/editorial.js";
import { createGenreModule } from "./modules/genre.js";
import { createPlaylistModule } from "./modules/playlist.js";
import { createRadioModule } from "./modules/radio.js";
import { createTrackModule } from "./modules/track.js";
import { createCommentModule } from "./modules/comment.js";
import { createEpisodeModule } from "./modules/episode.js";
import { createPodcastModule } from "./modules/podcast.js";
import { createInfosModule } from "./modules/infos.js";
import { createOptionsModule } from "./modules/options.js";
import { createChartModule } from "./modules/chart.js";
import { createUserModule } from "./modules/user.js";
import * as utils from "./utils/index.js";

/**
 * The main Deezer Public API class.
 */
export class DeezerPublicApi {
  public album: ReturnType<typeof createAlbumModule>;
  public artist: ReturnType<typeof createArtistModule>;
  public search: ReturnType<typeof createSearchModule>;
  public editorial: ReturnType<typeof createEditorialModule>;
  public genre: ReturnType<typeof createGenreModule>;
  public playlist: ReturnType<typeof createPlaylistModule>;
  public radio: ReturnType<typeof createRadioModule>;
  public track: ReturnType<typeof createTrackModule>;
  public comment: ReturnType<typeof createCommentModule>;
  public episode: ReturnType<typeof createEpisodeModule>;
  public podcast: ReturnType<typeof createPodcastModule>;
  public infos: ReturnType<typeof createInfosModule>;
  public options: ReturnType<typeof createOptionsModule>;
  public chart: ReturnType<typeof createChartModule>;
  public user: ReturnType<typeof createUserModule>;
  public utils = utils;

  private client: DeezerClient;

  constructor(options: DeezerClientOptions = {}) {
    this.client = new DeezerClient(options);
    this.album = createAlbumModule(this.client);
    this.artist = createArtistModule(this.client);
    this.search = createSearchModule(this.client);
    this.editorial = createEditorialModule(this.client);
    this.genre = createGenreModule(this.client);
    this.playlist = createPlaylistModule(this.client);
    this.radio = createRadioModule(this.client);
    this.track = createTrackModule(this.client);
    this.comment = createCommentModule(this.client);
    this.episode = createEpisodeModule(this.client);
    this.podcast = createPodcastModule(this.client);
    this.infos = createInfosModule(this.client);
    this.options = createOptionsModule(this.client);
    this.chart = createChartModule(this.client);
    this.user = createUserModule(this.client);
  }

  /**
   * Resolve a Deezer URL to its corresponding metadata.
   * Supports various URL formats including browser URLs.
   * 
   * @param url The Deezer URL to resolve.
   * @returns The resolved data, or throws if the URL is invalid or not found.
   */
  public async resolve(url: string): Promise<any> {
    const parsed = utils.parseDeezerUrl(url);
    if (!parsed) {
      throw new Error(`Invalid Deezer URL: ${url}`);
    }

    const { type, id } = parsed;

    switch (type) {
      case "track":
        return this.track({ id });
      case "album":
        return this.album({ id });
      case "artist":
        return this.artist({ id });
      case "playlist":
        return this.playlist({ id });
      case "podcast":
        return this.podcast({ id });
      case "episode":
        return this.episode({ id });
      case "radio":
        return this.radio({ id });
      case "user":
        return this.user({ id });
      default:
        throw new Error(`Unsupported entity type: ${type}`);
    }
  }
}

export * from "./client.js";
export * from "./errors.js";
export * from "./search-builder.js";
export * from "./types/index.js";
export * as utils from "./utils/index.js";
