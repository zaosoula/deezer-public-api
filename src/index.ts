import { DeezerClient } from "./client.js";
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

  constructor(private client: DeezerClient = new DeezerClient()) {
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
  }
}

export * from "./client.js";
export * from "./errors.js";
export * from "./search-builder.js";
export * from "./types/index.js";
