import { describe, it, expect, vi, beforeEach } from "vitest";
import { DeezerClient } from "../../src/client.js";
import { createSearchModule } from "../../src/modules/search.js";
import { SearchBuilder } from "../../src/search-builder.js";

describe("Search Module", () => {
  let client: DeezerClient;
  let search: any;

  beforeEach(() => {
    client = new DeezerClient();
    vi.spyOn(client, "request").mockResolvedValue({ data: [] });
    search = createSearchModule(client);
  });

  it("should perform a general search", async () => {
    await search({ q: "Daft Punk" });
    expect(client.request).toHaveBeenCalledWith("search", {
      q: "Daft Punk",
      order: undefined,
      limit: undefined,
      index: undefined,
      strict: undefined,
    });
  });

  it("should perform a track search", async () => {
    await search.track({ q: "One More Time" });
    expect(client.request).toHaveBeenCalledWith("search/track", {
      q: "One More Time",
      order: undefined,
      limit: undefined,
      index: undefined,
      strict: undefined,
    });
  });

  it("should perform an album search", async () => {
    await search.album({ q: "Discovery" });
    expect(client.request).toHaveBeenCalledWith("search/album", {
      q: "Discovery",
      order: undefined,
      limit: undefined,
      index: undefined,
      strict: undefined,
    });
  });

  it("should perform an artist search", async () => {
    await search.artist({ q: "Daft Punk" });
    expect(client.request).toHaveBeenCalledWith("search/artist", {
      q: "Daft Punk",
      order: undefined,
      limit: undefined,
      index: undefined,
      strict: undefined,
    });
  });

  it("should perform a playlist search", async () => {
    await search.playlist({ q: "Electronic" });
    expect(client.request).toHaveBeenCalledWith("search/playlist", {
      q: "Electronic",
      order: undefined,
      limit: undefined,
      index: undefined,
      strict: undefined,
    });
  });

  it("should perform a podcast search", async () => {
    await search.podcast({ q: "Tech" });
    expect(client.request).toHaveBeenCalledWith("search/podcast", {
      q: "Tech",
      order: undefined,
      limit: undefined,
      index: undefined,
      strict: undefined,
    });
  });

  it("should perform a radio search", async () => {
    await search.radio({ q: "Rock" });
    expect(client.request).toHaveBeenCalledWith("search/radio", {
      q: "Rock",
      order: undefined,
      limit: undefined,
      index: undefined,
      strict: undefined,
    });
  });

  it("should perform a user search", async () => {
    await search.user({ q: "guillaume" });
    expect(client.request).toHaveBeenCalledWith("search/user", {
      q: "guillaume",
      order: undefined,
      limit: undefined,
      index: undefined,
      strict: undefined,
    });
  });

  it("should support SearchBuilder with limit and index", async () => {
    const builder = new SearchBuilder("Daft Punk")
      .limit(10)
      .index(20);
    await search({ q: builder });
    expect(client.request).toHaveBeenCalledWith("search", {
      q: "Daft Punk",
      strict: undefined,
      order: undefined,
      limit: 10,
      index: 20,
    });
  });
});
