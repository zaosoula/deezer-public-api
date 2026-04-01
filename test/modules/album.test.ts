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
    await album({ id: 302127 });
    expect(client.request).toHaveBeenCalledWith("album/302127", {});
  });

  it("should fetch album fans", async () => {
    await album.fans({ id: 302127 });
    expect(client.request).toHaveBeenCalledWith("album/302127/fans", {});
  });

  it("should fetch album tracks", async () => {
    await album.tracks({ id: 302127 });
    expect(client.request).toHaveBeenCalledWith("album/302127/tracks", {});
  });

  it("should fetch album by UPC", async () => {
    await album.upc({ upc: "724384960650" });
    expect(client.request).toHaveBeenCalledWith("album/upc:724384960650", {});
  });
});
