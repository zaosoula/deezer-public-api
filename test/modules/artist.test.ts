import { describe, it, expect, vi, beforeEach } from "vitest";
import { DeezerClient } from "../../src/client.js";
import { createArtistModule } from "../../src/modules/artist.js";

describe("Artist Module", () => {
  let client: DeezerClient;
  let artist: any;

  beforeEach(() => {
    client = new DeezerClient();
    vi.spyOn(client, "request").mockResolvedValue({ data: [] });
    artist = createArtistModule(client);
  });

  it("should fetch artist details", async () => {
    await artist(27);
    expect(client.request).toHaveBeenCalledWith("artist/27", {});
  });

  it("should fetch artist top tracks", async () => {
    await artist.top(27);
    expect(client.request).toHaveBeenCalledWith("artist/27/top", {});
  });

  it("should fetch artist albums", async () => {
    await artist.albums(27);
    expect(client.request).toHaveBeenCalledWith("artist/27/albums", {});
  });

  it("should fetch artist fans", async () => {
    await artist.fans(27);
    expect(client.request).toHaveBeenCalledWith("artist/27/fans", {});
  });

  it("should fetch artist related", async () => {
    await artist.related(27);
    expect(client.request).toHaveBeenCalledWith("artist/27/related", {});
  });

  it("should fetch artist radio", async () => {
    await artist.radio(27);
    expect(client.request).toHaveBeenCalledWith("artist/27/radio", {});
  });

  it("should fetch artist playlists", async () => {
    await artist.playlists(27);
    expect(client.request).toHaveBeenCalledWith("artist/27/playlists", {});
  });
});
