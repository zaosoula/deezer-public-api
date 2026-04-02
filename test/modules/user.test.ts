import { describe, it, expect, vi, beforeEach } from "vitest";
import { DeezerPublicApi } from "@lib";

describe("User Module", () => {
  let api: DeezerPublicApi;

  beforeEach(() => {
    api = new DeezerPublicApi();
    vi.spyOn(api.client, "request").mockResolvedValue({ data: [] });
  });

  it("should fetch user by ID", async () => {
    await api.user({ id: 2529 });
    expect(api.client.request).toHaveBeenCalledWith("user/2529", {});
  });

  it("should fetch user albums", async () => {
    await api.user.albums({ id: 2529 });
    expect(api.client.request).toHaveBeenCalledWith("user/2529/albums", {});
  });

  it("should fetch user playlists", async () => {
    await api.user.playlists({ id: 2529, limit: 10, index: 5 });
    expect(api.client.request).toHaveBeenCalledWith("user/2529/playlists", {
      limit: 10,
      index: 5,
    });
  });

  it("should fetch user artists", async () => {
    await api.user.artists({ id: 2529 });
    expect(api.client.request).toHaveBeenCalledWith("user/2529/artists", {});
  });

  it("should fetch user followings", async () => {
    await api.user.followings({ id: 2529 });
    expect(api.client.request).toHaveBeenCalledWith("user/2529/followings", {});
  });

  it("should fetch user followers", async () => {
    await api.user.followers({ id: 2529 });
    expect(api.client.request).toHaveBeenCalledWith("user/2529/followers", {});
  });

  it("should fetch user podcasts", async () => {
    await api.user.podcasts({ id: 2529 });
    expect(api.client.request).toHaveBeenCalledWith("user/2529/podcasts", {});
  });

  it("should fetch user radios", async () => {
    await api.user.radios({ id: 2529 });
    expect(api.client.request).toHaveBeenCalledWith("user/2529/radios", {});
  });

  it("should fetch user tracks", async () => {
    await api.user.tracks({ id: 2529 });
    expect(api.client.request).toHaveBeenCalledWith("user/2529/tracks", {});
  });

  it("should fetch user charts (generic)", async () => {
    await api.user.charts({ id: 2529 });
    expect(api.client.request).toHaveBeenCalledWith("user/2529/charts", {});
  });

  it("should fetch user charts tracks", async () => {
    await api.user.charts.tracks({ id: 2529 });
    expect(api.client.request).toHaveBeenCalledWith("user/2529/charts/tracks", {});
  });

  it("should fetch user charts albums", async () => {
    await api.user.charts.albums({ id: 2529 });
    expect(api.client.request).toHaveBeenCalledWith("user/2529/charts/albums", {});
  });

  it("should fetch user charts playlists", async () => {
    await api.user.charts.playlists({ id: 2529 });
    expect(api.client.request).toHaveBeenCalledWith("user/2529/charts/playlists", {});
  });

  it("should fetch user charts artists", async () => {
    await api.user.charts.artists({ id: 2529 });
    expect(api.client.request).toHaveBeenCalledWith("user/2529/charts/artists", {});
  });

  it("should fetch user flow", async () => {
    await api.user.flow({ id: 2529 });
    expect(api.client.request).toHaveBeenCalledWith("user/2529/flow", {});
  });
});
