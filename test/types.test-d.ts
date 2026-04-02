import { describe, it, expectTypeOf } from "vitest";
import { DeezerPublicApi } from "@lib";
import type {
  DeezerAlbum,
  DeezerArtist,
  DeezerTrack,
  DeezerPlaylist,
  DeezerGenre,
  DeezerRadio,
  DeezerEditorial,
  DeezerPaginationResult,
} from "@lib";

describe("Type Definitions", () => {
  const deezer = new DeezerPublicApi();

  it("Album type structure", () => {
    expectTypeOf<DeezerAlbum["id"]>().toBeNumber();
    expectTypeOf<DeezerAlbum["title"]>().toBeString();
    expectTypeOf<DeezerAlbum["tracks"]>().toEqualTypeOf<
      { data: DeezerTrack[] } | undefined
    >();
  });

  it("Album module types", () => {
    expectTypeOf(deezer.album).returns.resolves.toEqualTypeOf<DeezerAlbum>();
    expectTypeOf(deezer.album.tracks({ id: 123 })).resolves.toEqualTypeOf<
      DeezerPaginationResult<DeezerTrack>
    >();
  });

  it("Artist module types", () => {
    expectTypeOf(deezer.artist({ id: 123 })).resolves.toEqualTypeOf<DeezerArtist>();
    expectTypeOf(deezer.artist.top({ id: 123 })).resolves.toEqualTypeOf<
      DeezerPaginationResult<DeezerTrack>
    >();
    expectTypeOf(deezer.artist.albums({ id: 123 })).resolves.toEqualTypeOf<
      DeezerPaginationResult<DeezerAlbum>
    >();
  });

  it("Search module types", () => {
    expectTypeOf(deezer.search({ q: "query" })).resolves.toEqualTypeOf<
      DeezerPaginationResult<any>
    >();
    expectTypeOf(deezer.search.track({ q: "query" })).resolves.toEqualTypeOf<
      DeezerPaginationResult<DeezerTrack>
    >();
    expectTypeOf(deezer.search.album({ q: "query" })).resolves.toEqualTypeOf<
      DeezerPaginationResult<DeezerAlbum>
    >();
  });

  it("Common module types", () => {
    expectTypeOf(deezer.playlist({ id: 123 })).resolves.toEqualTypeOf<DeezerPlaylist>();
    expectTypeOf(deezer.genre({ id: 123 })).resolves.toEqualTypeOf<DeezerGenre>();
    expectTypeOf(deezer.radio({ id: 123 })).resolves.toEqualTypeOf<DeezerRadio>();
    expectTypeOf(deezer.editorial({ id: 123 })).resolves.toEqualTypeOf<DeezerEditorial>();
    expectTypeOf(deezer.track({ id: 123 })).resolves.toEqualTypeOf<DeezerTrack>();
  });

  it("Pagination wrapping types", () => {
    expectTypeOf<DeezerPaginationResult<any>>().toEqualTypeOf<{
      data: any[];
      total?: number;
      next?: () => Promise<DeezerPaginationResult<any>>;
      prev?: () => Promise<DeezerPaginationResult<any>>;
    }>();
  });
});
