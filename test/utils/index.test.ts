import { describe, it, expect, vi } from "vitest";
import { DeezerPublicApi } from "@lib";

describe("Utils", () => {
  const api = new DeezerPublicApi();
  const utils = api.utils;
  const { changeImageSize, parseDeezerUrl, isShortUrl, resolveShortUrl } = utils;
  describe("changeImageSize", () => {
    it("should change the image size in a Deezer URL", () => {
      const original = "https://e-cdns-images.dzcdn.net/images/cover/123/250x250-000000-80-0-0.jpg";
      const expected = "https://e-cdns-images.dzcdn.net/images/cover/123/500x500-000000-80-0-0.jpg";
      expect(changeImageSize(original, 500)).toBe(expected);
    });

    it("should return the same URL if empty", () => {
      expect(changeImageSize("", 500)).toBe("");
    });
    
    it("should not change the URL if size pattern is not found", () => {
      const url = "https://example.com/image.jpg";
      expect(changeImageSize(url, 500)).toBe(url);
    });
  });

  describe("parseDeezerUrl", () => {
    it("should parse standard track URLs", () => {
      const url = "https://www.deezer.com/track/3135556";
      expect(parseDeezerUrl(url)).toEqual({ type: "track", id: "3135556" });
    });

    it("should parse URLs with language codes", () => {
      const url = "https://www.deezer.com/fr/album/302127";
      expect(parseDeezerUrl(url)).toEqual({ type: "album", id: "302127" });
    });

    it("should parse URLs with 'us' locale", () => {
      const url = "https://www.deezer.com/us/album/302127";
      expect(parseDeezerUrl(url)).toEqual({ type: "album", id: "302127" });
    });

    it("should parse URLs with multi-part language codes", () => {
      const url = "https://www.deezer.com/en-US/track/3135556";
      expect(parseDeezerUrl(url)).toEqual({ type: "track", id: "3135556" });
    });

    it("should parse artist URLs", () => {
      const url = "https://www.deezer.com/en/artist/27";
      expect(parseDeezerUrl(url)).toEqual({ type: "artist", id: "27" });
    });

    it("should return null for invalid URLs", () => {
      expect(parseDeezerUrl("https://google.com")).toBeNull();
      expect(parseDeezerUrl("not-a-url")).toBeNull();
      expect(parseDeezerUrl("https://www.deezer.com/invalid/123")).toBeNull();
    });

    it("should handle empty or null input", () => {
      expect(parseDeezerUrl("")).toBeNull();
    });

    it("should return null for non-Deezer hostnames", () => {
      expect(parseDeezerUrl("https://example.com/track/123")).toBeNull();
    });
  });

  describe("isShortUrl", () => {
    it("should return true for link.deezer.com", () => {
      expect(isShortUrl("https://link.deezer.com/s/123")).toBe(true);
    });

    it("should return true for deezer.page.link", () => {
      expect(isShortUrl("https://deezer.page.link/abc")).toBe(true);
    });

    it("should return false for regular deezer.com", () => {
      expect(isShortUrl("https://www.deezer.com/track/123")).toBe(false);
    });

    it("should return false for invalid URLs", () => {
      expect(isShortUrl("not-a-url")).toBe(false);
      expect(isShortUrl("")).toBe(false);
    });
  });

  describe("resolveShortUrl", () => {
    it("should follow redirects and return final URL", async () => {
      const mockFetch = vi.fn().mockResolvedValue({
        url: "https://www.deezer.com/track/123",
      });
      const finalUrl = await resolveShortUrl("https://link.deezer.com/s/123", mockFetch as any);
      expect(finalUrl).toBe("https://www.deezer.com/track/123");
      expect(mockFetch).toHaveBeenCalledWith("https://link.deezer.com/s/123", {
        method: "GET",
        redirect: "follow",
      });
    });
  });
});
