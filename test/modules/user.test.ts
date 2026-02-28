import { describe, it, expect, vi, beforeEach } from "vitest";
import { DeezerClient } from "../../src/client.js";
import { createUserModule } from "../../src/modules/user.js";

describe("User Module", () => {
  let client: DeezerClient;
  let userModule: ReturnType<typeof createUserModule>;

  beforeEach(() => {
    client = new DeezerClient();
    vi.spyOn(client, "request").mockResolvedValue({ data: [] });
    userModule = createUserModule(client);
  });

  it("should fetch user by ID", async () => {
    await userModule({ id: 2529 });
    expect(client.request).toHaveBeenCalledWith("user/2529", {});
  });

  it("should fetch user albums", async () => {
    await userModule.albums({ id: 2529 });
    expect(client.request).toHaveBeenCalledWith("user/2529/albums", {});
  });

  it("should fetch user playlists", async () => {
    await userModule.playlists({ id: 2529, limit: 10, index: 5 });
    expect(client.request).toHaveBeenCalledWith("user/2529/playlists", {
      limit: 10,
      index: 5,
    });
  });

  it("should fetch user artists", async () => {
    await userModule.artists({ id: 2529 });
    expect(client.request).toHaveBeenCalledWith("user/2529/artists", {});
  });

  it("should fetch user followings", async () => {
    await userModule.followings({ id: 2529 });
    expect(client.request).toHaveBeenCalledWith("user/2529/followings", {});
  });

  it("should fetch user followers", async () => {
    await userModule.followers({ id: 2529 });
    expect(client.request).toHaveBeenCalledWith("user/2529/followers", {});
  });

  it("should fetch user podcasts", async () => {
    await userModule.podcasts({ id: 2529 });
    expect(client.request).toHaveBeenCalledWith("user/2529/podcasts", {});
  });

  it("should fetch user radios", async () => {
    await userModule.radios({ id: 2529 });
    expect(client.request).toHaveBeenCalledWith("user/2529/radios", {});
  });

  it("should fetch user tracks", async () => {
    await userModule.tracks({ id: 2529 });
    expect(client.request).toHaveBeenCalledWith("user/2529/tracks", {});
  });

  it("should fetch user charts (generic)", async () => {
    await userModule.charts({ id: 2529 });
    expect(client.request).toHaveBeenCalledWith("user/2529/charts", {});
  });

  it("should fetch user charts tracks", async () => {
    await userModule.charts.tracks({ id: 2529 });
    expect(client.request).toHaveBeenCalledWith("user/2529/charts/tracks", {});
  });

  it("should fetch user charts albums", async () => {
    await userModule.charts.albums({ id: 2529 });
    expect(client.request).toHaveBeenCalledWith("user/2529/charts/albums", {});
  });

  it("should fetch user charts playlists", async () => {
    await userModule.charts.playlists({ id: 2529 });
    expect(client.request).toHaveBeenCalledWith("user/2529/charts/playlists", {});
  });

  it("should fetch user charts artists", async () => {
    await userModule.charts.artists({ id: 2529 });
    expect(client.request).toHaveBeenCalledWith("user/2529/charts/artists", {});
  });

  it("should fetch user flow", async () => {
    await userModule.flow({ id: 2529 });
    expect(client.request).toHaveBeenCalledWith("user/2529/flow", {});
  });
});
