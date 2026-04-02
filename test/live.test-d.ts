import { describe, it, expectTypeOf } from "vitest";
import { DeezerPublicApi } from "@lib";
import type {
  DeezerAlbum,
  DeezerArtist,
  DeezerTrack,
  DeezerPlaylist,
  DeezerPaginationResult,
} from "@lib";

describe("Live API Types Generation Validation", () => {
  const deezer = new DeezerPublicApi();

  it("validates Album endpoint data structure", async () => {
    const liveAlbum = await deezer.album({ id: 302127 });
    expectTypeOf(liveAlbum).toEqualTypeOf<DeezerAlbum>();
  });

  it("validates Artist endpoint data structure", async () => {
    const liveArtist = await deezer.artist({ id: 27 });
    expectTypeOf(liveArtist).toEqualTypeOf<DeezerArtist>();
  });

  it("validates Search endpoint data structure", async () => {
    const liveSearchTrack = await deezer.search.track({ q: "eminem", order: "RANKING", limit: 1 });
    expectTypeOf(liveSearchTrack).toEqualTypeOf<DeezerPaginationResult<DeezerTrack>>();
  });

  it("validates Playlist endpoint data structure", async () => {
    const livePlaylist = await deezer.playlist({ id: 908622995 });
    expectTypeOf(livePlaylist).toEqualTypeOf<DeezerPlaylist>();
  });
});
