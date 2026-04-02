import { describe, it, expect, vi, beforeEach } from "vitest";
import { DeezerPublicApi } from "@lib";

describe("Album Module", () => {
  let api: DeezerPublicApi;

  beforeEach(() => {
    api = new DeezerPublicApi();
    vi.spyOn(api.client, "request").mockResolvedValue({ data: [] });
  });

  it("should fetch album details", async () => {
    await api.album({ id: 302127 });
    expect(api.client.request).toHaveBeenCalledWith("album/302127", {});
  });

  it("should fetch album fans", async () => {
    await api.album.fans({ id: 302127 });
    expect(api.client.request).toHaveBeenCalledWith("album/302127/fans", {});
  });

  it("should fetch album tracks", async () => {
    await api.album.tracks({ id: 302127 });
    expect(api.client.request).toHaveBeenCalledWith("album/302127/tracks", {});
  });

  it("should fetch album by UPC", async () => {
    await api.album.upc({ upc: "724384960650" });
    expect(api.client.request).toHaveBeenCalledWith("album/upc:724384960650", {});
  });
});
