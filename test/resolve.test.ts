import { describe, it, expect, vi, beforeEach } from "vitest";
import { DeezerPublicApi } from "../src/index.js";
import * as utils from "../src/utils/index.js";

describe("DeezerPublicApi.resolve", () => {
  let deezer: DeezerPublicApi;

  beforeEach(() => {
    deezer = new DeezerPublicApi();
    // @ts-ignore - access private client for spying
    vi.spyOn(deezer.client, "request").mockResolvedValue({ id: "123", type: "track" });
  });

  it("should resolve a track URL", async () => {
    const data = await deezer.resolve("https://www.deezer.com/track/3135556");
    expect(data.id).toBe("123");
    // @ts-ignore
    expect(deezer.client.request).toHaveBeenCalledWith("track/3135556", {});
  });

  it("should resolve an album URL", async () => {
    await deezer.resolve("https://www.deezer.com/album/302127");
    // @ts-ignore
    expect(deezer.client.request).toHaveBeenCalledWith("album/302127", {});
  });

  it("should resolve an artist URL", async () => {
    await deezer.resolve("https://www.deezer.com/artist/27");
    // @ts-ignore
    expect(deezer.client.request).toHaveBeenCalledWith("artist/27", {});
  });

  it("should resolve a playlist URL", async () => {
    await deezer.resolve("https://www.deezer.com/playlist/908622995");
    // @ts-ignore
    expect(deezer.client.request).toHaveBeenCalledWith("playlist/908622995", {});
  });

  it("should resolve a podcast URL", async () => {
    await deezer.resolve("https://www.deezer.com/podcast/123");
    // @ts-ignore
    expect(deezer.client.request).toHaveBeenCalledWith("podcast/123", {});
  });

  it("should resolve an episode URL", async () => {
    await deezer.resolve("https://www.deezer.com/episode/456");
    // @ts-ignore
    expect(deezer.client.request).toHaveBeenCalledWith("episode/456", {});
  });

  it("should resolve a radio URL", async () => {
    await deezer.resolve("https://www.deezer.com/radio/6");
    // @ts-ignore
    expect(deezer.client.request).toHaveBeenCalledWith("radio/6", {});
  });

  it("should resolve a user URL", async () => {
    await deezer.resolve("https://www.deezer.com/user/2529");
    // @ts-ignore
    expect(deezer.client.request).toHaveBeenCalledWith("user/2529", {});
  });

  it("should throw for invalid URLs", async () => {
    await expect(deezer.resolve("https://google.com")).rejects.toThrow("Invalid Deezer URL");
  });

  it("should throw for unsupported entity types (safety catch)", async () => {
    vi.spyOn(utils, "parseDeezerUrl").mockReturnValue({ type: "invalid" as any, id: "123" });
    await expect(deezer.resolve("https://deezer.com/invalid/123")).rejects.toThrow("Unsupported entity type: invalid");
  });
});
