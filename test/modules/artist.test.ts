import { describe, it, expect, vi, beforeEach } from "vitest";
import { DeezerPublicApi } from "@lib";

describe("Artist Module", () => {
  let api: DeezerPublicApi;

  beforeEach(() => {
    api = new DeezerPublicApi();
    vi.spyOn(api.client, "request").mockResolvedValue({ data: [] });
  });

  it("should fetch artist details", async () => {
    await api.artist({ id: 27 });
    expect(api.client.request).toHaveBeenCalledWith("artist/27", {});
  });

  it("should fetch artist top tracks", async () => {
    await api.artist.top({ id: 27 });
    expect(api.client.request).toHaveBeenCalledWith("artist/27/top", {});
  });

  it("should fetch artist albums", async () => {
    await api.artist.albums({ id: 27 });
    expect(api.client.request).toHaveBeenCalledWith("artist/27/albums", {});
  });

  it("should fetch artist fans", async () => {
    await api.artist.fans({ id: 27 });
    expect(api.client.request).toHaveBeenCalledWith("artist/27/fans", {});
  });

  it("should fetch artist related", async () => {
    await api.artist.related({ id: 27 });
    expect(api.client.request).toHaveBeenCalledWith("artist/27/related", {});
  });

  it("should fetch artist radio", async () => {
    await api.artist.radio({ id: 27 });
    expect(api.client.request).toHaveBeenCalledWith("artist/27/radio", {});
  });

  it("should fetch artist playlists", async () => {
    await api.artist.playlists({ id: 27 });
    expect(api.client.request).toHaveBeenCalledWith("artist/27/playlists", {});
  });

  it("should fetch artist comments", async () => {
    await api.artist.comments({ id: 27 });
    expect(api.client.request).toHaveBeenCalledWith("artist/27/comments", {});
  });
});
