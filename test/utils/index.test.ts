import { describe, it, expect } from "vitest";
import { changeImageSize, parseDeezerUrl } from "../../src/utils/index.js";

describe("Utils", () => {
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
  });
});
