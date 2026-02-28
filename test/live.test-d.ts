import { describe, it, expectTypeOf } from "vitest";
import { DeezerPublicApi } from "../src/index.js";
import {
  Album,
  Artist,
  Track,
  Playlist,
  PaginationResult,
} from "../src/types/index.js";

describe("Live API Types Generation Validation", () => {
  const deezer = new DeezerPublicApi();

  it("validates Album endpoint data structure", async () => {
    const liveAlbum = await deezer.album(302127);
    expectTypeOf(liveAlbum).toEqualTypeOf<Album>();
  });

  it("validates Artist endpoint data structure", async () => {
    const liveArtist = await deezer.artist(27);
    expectTypeOf(liveArtist).toEqualTypeOf<Artist>();
  });

  it("validates Search endpoint data structure", async () => {
    const liveSearchTrack = await deezer.search.track("eminem", "RANKING", 1);
    expectTypeOf(liveSearchTrack).toEqualTypeOf<PaginationResult<Track>>();
  });

  it("validates Playlist endpoint data structure", async () => {
    const livePlaylist = await deezer.playlist(908622995);
    expectTypeOf(livePlaylist).toEqualTypeOf<Playlist>();
  });
});
