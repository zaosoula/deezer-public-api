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
    await search("Daft Punk");
    expect(client.request).toHaveBeenCalledWith("search", { q: "Daft Punk" });
  });

  it("should perform a track search", async () => {
    await search.track("One More Time");
    expect(client.request).toHaveBeenCalledWith("search/track", {
      q: "One More Time",
    });
  });

  it("should perform an album search", async () => {
    await search.album("Discovery");
    expect(client.request).toHaveBeenCalledWith("search/album", {
      q: "Discovery",
    });
  });

  it("should perform an artist search", async () => {
    await search.artist("Daft Punk");
    expect(client.request).toHaveBeenCalledWith("search/artist", {
      q: "Daft Punk",
    });
  });

  it("should perform a playlist search", async () => {
    await search.playlist("Electronic");
    expect(client.request).toHaveBeenCalledWith("search/playlist", {
      q: "Electronic",
    });
  });

  it("should perform a podcast search", async () => {
    await search.podcast("Tech");
    expect(client.request).toHaveBeenCalledWith("search/podcast", {
      q: "Tech",
    });
  });

  it("should perform a radio search", async () => {
    await search.radio("Rock");
    expect(client.request).toHaveBeenCalledWith("search/radio", { q: "Rock" });
  });

  it("should support SearchBuilder", async () => {
    const builder = new SearchBuilder("Daft Punk")
      .album("Discovery")
      .strict()
      .order("RANKING");
    await search(builder);
    expect(client.request).toHaveBeenCalledWith("search", {
      q: 'Daft Punk album:"Discovery"',
      strict: true,
      order: "RANKING",
    });
  });
});
