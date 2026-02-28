import { describe, it, expect } from "vitest";
import { DeezerPublicApi } from "../src/index.js";

function getShape(obj: any): any {
  if (obj === null) return "null";
  if (Array.isArray(obj)) {
    return obj.length > 0 ? [getShape(obj[0])] : [];
  }
  if (typeof obj === "object") {
    const shape: any = {};
    for (const key of Object.keys(obj).sort()) {
      shape[key] = getShape(obj[key]);
    }
    return shape;
  }
  return typeof obj;
}

describe("Live API Runtime Validation (Snapshots)", () => {
  const deezer = new DeezerPublicApi();

  it("validates Album endpoint data structure", async () => {
    const album = await deezer.album(302127);
    expect(getShape(album)).toMatchSnapshot();
  });

  it("validates Artist endpoint data structure", async () => {
    const artist = await deezer.artist(27);
    expect(getShape(artist)).toMatchSnapshot();
  });

  it("validates Search endpoint data structure", async () => {
    const search = await deezer.search("eminem", "RANKING", 1);
    expect(getShape(search)).toMatchSnapshot();
  });

  it("validates Playlist endpoint data structure", async () => {
    const playlist = await deezer.playlist(908622995);
    expect(getShape(playlist)).toMatchSnapshot();
  });
});
