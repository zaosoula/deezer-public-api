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
    await artist({ id: 27 });
    expect(client.request).toHaveBeenCalledWith("artist/27", {});
  });

  it("should fetch artist top tracks", async () => {
    await artist.top({ id: 27 });
    expect(client.request).toHaveBeenCalledWith("artist/27/top", {});
  });

  it("should fetch artist albums", async () => {
    await artist.albums({ id: 27 });
    expect(client.request).toHaveBeenCalledWith("artist/27/albums", {});
  });

  it("should fetch artist fans", async () => {
    await artist.fans({ id: 27 });
    expect(client.request).toHaveBeenCalledWith("artist/27/fans", {});
  });

  it("should fetch artist related", async () => {
    await artist.related({ id: 27 });
    expect(client.request).toHaveBeenCalledWith("artist/27/related", {});
  });

  it("should fetch artist radio", async () => {
    await artist.radio({ id: 27 });
    expect(client.request).toHaveBeenCalledWith("artist/27/radio", {});
  });

  it("should fetch artist playlists", async () => {
    await artist.playlists({ id: 27 });
    expect(client.request).toHaveBeenCalledWith("artist/27/playlists", {});
  });

  it("should fetch artist comments", async () => {
    await artist.comments({ id: 27 });
    expect(client.request).toHaveBeenCalledWith("artist/27/comments", {});
  });
});
