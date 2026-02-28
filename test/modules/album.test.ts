import { describe, it, expect, vi, beforeEach } from "vitest";
import { DeezerClient } from "../../src/client.js";
import { createAlbumModule } from "../../src/modules/album.js";

describe("Album Module", () => {
  let client: DeezerClient;
  let album: any;

  beforeEach(() => {
    client = new DeezerClient();
    vi.spyOn(client, "request").mockResolvedValue({ data: [] });
    album = createAlbumModule(client);
  });

  it("should fetch album details", async () => {
    await album(302127);
    expect(client.request).toHaveBeenCalledWith("album/302127", {});
  });

  it("should fetch album fans", async () => {
    await album.fans(302127);
    expect(client.request).toHaveBeenCalledWith("album/302127/fans", {});
  });

  it("should fetch album tracks", async () => {
    await album.tracks(302127);
    expect(client.request).toHaveBeenCalledWith("album/302127/tracks", {});
  });
});
