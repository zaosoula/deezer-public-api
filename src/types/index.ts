export interface DeezerResponse<T> {
  data: T[];
  total?: number;
  next?: string;
  prev?: string;
}

export interface PaginationResult<T> {
  data: T[];
  total?: number;
  next?: () => Promise<PaginationResult<T>>;
  prev?: () => Promise<PaginationResult<T>>;
}

export interface DeezerApiError {
  error: {
    type: string;
    message: string;
    code: number;
  };
}

export interface Artist {
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

export interface Album {
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
    data: Genre[];
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
  artist?: Artist;
  tracks?: {
    data: Track[];
  };
}

export interface Track {
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
  contributors?: Artist[];
  md5_image: string;
  artist: Artist;
  album?: Album;
  type: "track";
}

export interface Playlist {
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
    data: Track[];
  };
}

export interface Genre {
  id: number;
  name: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  type: "genre";
}

export interface Comment {
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

export interface User {
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

export interface Editorial {
  id: number;
  name: string;
  type: "editorial";
}

export interface Episode {
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

export interface Podcast {
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

export interface Radio {
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

export interface SearchOptions {
  artist?: string;
  album?: string;
  track?: string;
  label?: string;
  dur_min?: number;
  dur_max?: number;
  bpm_min?: number;
  bpm_max?: number;
}

export type SearchOrder =
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
