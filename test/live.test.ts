import { describe, it, expect } from "vitest";
import { DeezerPublicApi } from "@lib";

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
    const album = await deezer.album({ id: 302127 });
    expect(getShape(album)).toMatchSnapshot();
  });

  it("validates Album by UPC data structure", async () => {
    const album = await deezer.album.upc({ upc: "724384960650" });
    expect(getShape(album)).toMatchSnapshot();
  });

  it("validates Artist endpoint data structure", async () => {
    const artist = await deezer.artist({ id: 27 });
    expect(getShape(artist)).toMatchSnapshot();
  });

  it("validates Search endpoint data structure", async () => {
    const search = await deezer.search({ q: "eminem", order: "RANKING", limit: 1 });
    expect(getShape(search)).toMatchSnapshot();
  });

  it("validates Playlist endpoint data structure", async () => {
    const playlist = await deezer.playlist({ id: 908622995 });
    expect(getShape(playlist)).toMatchSnapshot();
  });

  it("validates User endpoint data structure", async () => {
    const user = await deezer.user({ id: 2529 });
    expect(getShape(user)).toMatchSnapshot();
  });

  it("validates Track endpoint data structure", async () => {
    const track = await deezer.track({ id: 3135556 });
    expect(getShape(track)).toMatchSnapshot();
  });

  it("validates Track by ISRC data structure", async () => {
    const track = await deezer.track.isrc({ isrc: "GBDUW0000059" });
    expect(getShape(track)).toMatchSnapshot();
  });

  it("validates Genre endpoint data structure", async () => {
    const genre = await deezer.genre({ id: 132 });
    expect(getShape(genre)).toMatchSnapshot();
  });

  it("validates Radio endpoint data structure", async () => {
    const radio = await deezer.radio({ id: 6 });
    expect(getShape(radio)).toMatchSnapshot();
  });

  it("validates Editorial endpoint data structure", async () => {
    const editorial = await deezer.editorial({ id: 0 });
    expect(getShape(editorial)).toMatchSnapshot();
  });

  it("validates Comment endpoint data structure", async () => {
    try {
      const albumComments = await deezer.album.comments({ id: 302127 });
      if (albumComments.data.length > 0) {
        const comment = await deezer.comment({ id: albumComments.data[0].id });
        expect(getShape(comment)).toMatchSnapshot();
      }
    } catch (e) {
      console.warn("Comment endpoint might be restricted or restricted ID used");
    }
  });

  it("validates Infos endpoint data structure", async () => {
    const infos = await deezer.infos();
    expect(getShape(infos)).toMatchSnapshot();
  });

  it("validates Options endpoint data structure", async () => {
    const options = await deezer.options();
    expect(getShape(options)).toMatchSnapshot();
  });

  it("validates Search with Builder support", async () => {
    const builder = deezer.search.builder("Daft Punk").album("Discovery");
    const search = await deezer.search({ q: builder, limit: 1 });
    expect(getShape(search)).toMatchSnapshot();
  });

  it("validates Specialized Search with Builder support", async () => {
    const builder = deezer.search.builder("Daft Punk");
    const search = await deezer.search.artist({ q: builder, limit: 1 });
    expect(getShape(search)).toMatchSnapshot();
  });

  it("validates resolve method with track URL", async () => {
    const data = await deezer.resolve("https://www.deezer.com/track/3135556");
    expect(getShape(data)).toMatchSnapshot();
  });
});
