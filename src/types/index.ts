export interface DeezerResponse<T> {
  data: T[];
  total?: number;
  next?: string;
  prev?: string;
}

export interface DeezerPaginationResult<T> {
  data: T[];
  total?: number;
  next?: () => Promise<DeezerPaginationResult<T>>;
  prev?: () => Promise<DeezerPaginationResult<T>>;
}

/**
 * Shared options for methods that support pagination.
 */
export interface DeezerListOptions {
  limit?: number;
  index?: number;
}

/**
 * Common structure for methods requiring an ID and optional pagination.
 */
export interface DeezerIdOptions extends DeezerListOptions {
  id: number | string;
}

/**
 * Options for ISRC lookup.
 */
export interface DeezerIsrcOptions extends DeezerListOptions {
  isrc: string;
}

/**
 * Options for UPC lookup.
 */
export interface DeezerUpcOptions extends DeezerListOptions {
  upc: string;
}

/**
 * Options for editorial selection.
 */
export interface DeezerEditorialSelectionOptions extends DeezerIdOptions {
  date?: string;
}

export interface DeezerApiError {
  error: {
    type: string;
    message: string;
    code: number;
  };
}

export interface DeezerChart {
  tracks: DeezerResponse<DeezerTrack>;
  albums: DeezerResponse<DeezerAlbum>;
  artists: DeezerResponse<DeezerArtist>;
  playlists: DeezerResponse<DeezerPlaylist>;
  podcasts: DeezerResponse<DeezerPodcast>;
}

export interface DeezerArtist {
  id: number;
  name: string;
  link: string;
  share: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  nb_album?: number;
  nb_fan?: number;
  radio?: boolean;
  tracklist: string;
  type: "artist";
}

export interface DeezerAlbum {
  id: number;
  title: string;
  upc?: string;
  link: string;
  share: string;
  cover: string;
  cover_small: string;
  cover_medium: string;
  cover_big: string;
  cover_xl: string;
  genre_id?: number;
  genres?: {
    data: DeezerGenre[];
  };
  label?: string;
  nb_tracks?: number;
  duration?: number;
  fans?: number;
  release_date: string;
  record_type: string;
  available?: boolean;
  tracklist: string;
  explicit_lyrics?: boolean;
  explicit_content_lyrics?: number;
  explicit_content_display?: number;
  type: "album";
  artist?: DeezerArtist;
  tracks?: {
    data: DeezerTrack[];
  };
}

export interface DeezerTrack {
  id: number;
  readable: boolean;
  title: string;
  title_short: string;
  title_version?: string;
  isrc?: string;
  link: string;
  share: string;
  duration: number;
  track_position?: number;
  disk_number?: number;
  rank: number;
  release_date?: string;
  explicit_lyrics: boolean;
  explicit_content_lyrics: number;
  explicit_content_display: number;
  preview: string;
  bpm?: number;
  gain?: number;
  available_countries?: string[];
  contributors?: DeezerArtist[];
  md5_image: string;
  artist: DeezerArtist;
  album?: DeezerAlbum;
  type: "track";
}

export interface DeezerPlaylist {
  id: number;
  title: string;
  description: string;
  duration: number;
  public: boolean;
  is_loved_track: boolean;
  collaborative: boolean;
  nb_tracks: number;
  unseen_track_count: number;
  fans: number;
  link: string;
  share: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  checksum: string;
  creator: {
    id: number;
    name: string;
    tracklist: string;
    type: "user";
  };
  type: "playlist";
  tracks?: {
    data: DeezerTrack[];
  };
}

export interface DeezerGenre {
  id: number;
  name: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  type: "genre";
}

export interface DeezerComment {
  id: number;
  text: string;
  date: number;
  author: {
    id: number;
    name: string;
    link: string;
    picture: string;
    picture_small: string;
    picture_medium: string;
    picture_big: string;
    picture_xl: string;
    type: "user";
  };
  type: "comment";
}

export interface DeezerUser {
  id: number;
  name: string;
  link: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  country: string;
  tracklist: string;
  type: "user";
}

export interface DeezerEditorial {
  id: number;
  name: string;
  type: "editorial";
}

export interface DeezerEpisode {
  id: number;
  title: string;
  description: string;
  available: boolean;
  release_date: string;
  duration: number;
  link: string;
  share: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  type: "episode";
}

export interface DeezerPodcast {
  id: number;
  title: string;
  description: string;
  available: boolean;
  fans: number;
  link: string;
  share: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  type: "podcast";
}

export interface DeezerRadio {
  id: number;
  title: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  tracklist: string;
  type: "radio";
}

export interface DeezerSearchOptions {
  artist?: string;
  album?: string;
  track?: string;
  label?: string;
  dur_min?: number;
  dur_max?: number;
  bpm_min?: number;
  bpm_max?: number;
}

export type DeezerSearchOrder =
  | "RANKING"
  | "TRACK_ASC"
  | "TRACK_DESC"
  | "ARTIST_ASC"
  | "ARTIST_DESC"
  | "ALBUM_ASC"
  | "ALBUM_DESC"
  | "RATING_ASC"
  | "RATING_DESC"
  | "DURATION_ASC"
  | "DURATION_DESC";

/**
 * Options for search requests.
 */
export interface DeezerSearchRequestOptions extends DeezerListOptions {
  q: string | import("../search-builder.js").DeezerSearchBuilder;
  order?: DeezerSearchOrder;
  strict?: boolean;
}

export interface DeezerInfos {
  country_iso: string;
  country: string;
  open: boolean;
  pop: string;
  upload_token: string;
  upload_token_lifetime: number;
  user_token: string | null;
  hosts: {
    stream: string;
    images: string;
  };
  ads: {
    audio?: {
      default: {
        start: number;
        interval: number;
        unit: string;
      };
    };
    display?: {
      interstitial: {
        start: number;
        interval: number;
        unit: string;
      };
    };
    [key: string]: any;
  };
  has_podcasts: boolean;
  offers: any[];
}

export interface DeezerOptions {
  streaming: boolean;
  streaming_duration: number;
  offline: boolean;
  hq: boolean;
  ads_display: boolean;
  ads_audio: boolean;
  too_many_devices: boolean;
  can_subscribe: boolean;
  radio_skips: number;
  lossless: boolean;
  preview: boolean;
  radio: boolean;
  type: "options";
}
