import { describe, it, expectTypeOf } from "vitest";
import { DeezerPublicApi } from "../src/index.js";
import {
  Album,
  Artist,
  Track,
  Playlist,
  Genre,
  Radio,
  Editorial,
  PaginationResult,
} from "../src/types/index.js";

describe("Type Definitions", () => {
  const deezer = new DeezerPublicApi();

  it("Album type structure", () => {
    expectTypeOf<Album["id"]>().toBeNumber();
    expectTypeOf<Album["title"]>().toBeString();
    expectTypeOf<Album["tracks"]>().toEqualTypeOf<
      { data: Track[] } | undefined
    >();
  });

  it("Album module types", () => {
    expectTypeOf(deezer.album).returns.resolves.toEqualTypeOf<Album>();
    expectTypeOf(deezer.album.tracks(123)).resolves.toEqualTypeOf<
      PaginationResult<Track>
    >();
  });

  it("Artist module types", () => {
    expectTypeOf(deezer.artist(123)).resolves.toEqualTypeOf<Artist>();
    expectTypeOf(deezer.artist.top(123)).resolves.toEqualTypeOf<
      PaginationResult<Track>
    >();
    expectTypeOf(deezer.artist.albums(123)).resolves.toEqualTypeOf<
      PaginationResult<Album>
    >();
  });

  it("Search module types", () => {
    expectTypeOf(deezer.search("query")).resolves.toEqualTypeOf<
      PaginationResult<any>
    >();
    expectTypeOf(deezer.search.track("query")).resolves.toEqualTypeOf<
      PaginationResult<Track>
    >();
    expectTypeOf(deezer.search.album("query")).resolves.toEqualTypeOf<
      PaginationResult<Album>
    >();
  });

  it("Common module types", () => {
    expectTypeOf(deezer.playlist(123)).resolves.toEqualTypeOf<Playlist>();
    expectTypeOf(deezer.genre(123)).resolves.toEqualTypeOf<Genre>();
    expectTypeOf(deezer.radio(123)).resolves.toEqualTypeOf<Radio>();
    expectTypeOf(deezer.editorial(123)).resolves.toEqualTypeOf<Editorial>();
    expectTypeOf(deezer.track(123)).resolves.toEqualTypeOf<Track>();
  });

  it("Pagination wrapping types", () => {
    expectTypeOf<PaginationResult<any>>().toEqualTypeOf<{
      data: any[];
      total?: number;
      next?: () => Promise<PaginationResult<any>>;
      prev?: () => Promise<PaginationResult<any>>;
    }>();
  });
});
