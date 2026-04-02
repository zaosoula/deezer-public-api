import { describe, it, expect, vi, beforeEach } from "vitest";
import { DeezerPublicApi, DeezerSearchBuilder } from "@lib";

describe("Search Module", () => {
  let api: DeezerPublicApi;

  beforeEach(() => {
    api = new DeezerPublicApi();
    vi.spyOn(api.client, "request").mockResolvedValue({ data: [] });
  });

  it("should perform a general search", async () => {
    await api.search({ q: "Daft Punk" });
    expect(api.client.request).toHaveBeenCalledWith("search", {
      q: "Daft Punk",
      order: undefined,
      limit: undefined,
      index: undefined,
      strict: undefined,
    });
  });

  it("should perform a track search", async () => {
    await api.search.track({ q: "One More Time" });
    expect(api.client.request).toHaveBeenCalledWith("search/track", {
      q: "One More Time",
      order: undefined,
      limit: undefined,
      index: undefined,
      strict: undefined,
    });
  });

  it("should perform an album search", async () => {
    await api.search.album({ q: "Discovery" });
    expect(api.client.request).toHaveBeenCalledWith("search/album", {
      q: "Discovery",
      order: undefined,
      limit: undefined,
      index: undefined,
      strict: undefined,
    });
  });

  it("should perform an artist search", async () => {
    await api.search.artist({ q: "Daft Punk" });
    expect(api.client.request).toHaveBeenCalledWith("search/artist", {
      q: "Daft Punk",
      order: undefined,
      limit: undefined,
      index: undefined,
      strict: undefined,
    });
  });

  it("should perform a playlist search", async () => {
    await api.search.playlist({ q: "Electronic" });
    expect(api.client.request).toHaveBeenCalledWith("search/playlist", {
      q: "Electronic",
      order: undefined,
      limit: undefined,
      index: undefined,
      strict: undefined,
    });
  });

  it("should perform a podcast search", async () => {
    await api.search.podcast({ q: "Tech" });
    expect(api.client.request).toHaveBeenCalledWith("search/podcast", {
      q: "Tech",
      order: undefined,
      limit: undefined,
      index: undefined,
      strict: undefined,
    });
  });

  it("should perform a radio search", async () => {
    await api.search.radio({ q: "Rock" });
    expect(api.client.request).toHaveBeenCalledWith("search/radio", {
      q: "Rock",
      order: undefined,
      limit: undefined,
      index: undefined,
      strict: undefined,
    });
  });

  it("should perform a user search", async () => {
    await api.search.user({ q: "guillaume" });
    expect(api.client.request).toHaveBeenCalledWith("search/user", {
      q: "guillaume",
      order: undefined,
      limit: undefined,
      index: undefined,
      strict: undefined,
    });
  });

  it("should support SearchBuilder with limit and index", async () => {
    const builder = new DeezerSearchBuilder("Daft Punk")
      .limit(10)
      .index(20);
    await api.search({ q: builder });
    expect(api.client.request).toHaveBeenCalledWith("search", {
      q: "Daft Punk",
      strict: undefined,
      order: undefined,
      limit: 10,
      index: 20,
    });
  });
});
