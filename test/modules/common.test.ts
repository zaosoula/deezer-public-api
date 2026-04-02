import { describe, it, expect, vi, beforeEach } from "vitest";
import { DeezerPublicApi } from "@lib";

describe("Common Modules (Individualized)", () => {
  let api: DeezerPublicApi;

  beforeEach(() => {
    api = new DeezerPublicApi();
    vi.spyOn(api.client, "request").mockResolvedValue({ data: [] });
  });

  describe("Chart", () => {
    it("should fetch global charts", async () => {
      await api.chart();
      expect(api.client.request).toHaveBeenCalledWith("chart", {});
    });
    it("should fetch tracks charts", async () => {
      await api.chart.tracks();
      expect(api.client.request).toHaveBeenCalledWith("chart/0/tracks", {});
    });
    it("should fetch albums charts", async () => {
      await api.chart.albums();
      expect(api.client.request).toHaveBeenCalledWith("chart/0/albums", {});
    });
    it("should fetch artists charts", async () => {
      await api.chart.artists();
      expect(api.client.request).toHaveBeenCalledWith("chart/0/artists", {});
    });
    it("should fetch playlists charts", async () => {
      await api.chart.playlists();
      expect(api.client.request).toHaveBeenCalledWith("chart/0/playlists", {});
    });
    it("should fetch podcasts charts", async () => {
      await api.chart.podcasts();
      expect(api.client.request).toHaveBeenCalledWith("chart/0/podcasts", {});
    });
  });

  describe("Editorial", () => {
    it("should fetch editorial details", async () => {
      await api.editorial({ id: 0 });
      expect(api.client.request).toHaveBeenCalledWith("editorial/0", {});
    });
    it("should fetch list if no id", async () => {
      await api.editorial();
      expect(api.client.request).toHaveBeenCalledWith("editorial/", {});
    });
    it("should fetch selection", async () => {
      await api.editorial.selection({ id: 0 });
      expect(api.client.request).toHaveBeenCalledWith("editorial/0/selection", {});
    });
    it("should fetch charts", async () => {
      await api.editorial.charts({ id: 0 });
      expect(api.client.request).toHaveBeenCalledWith("editorial/0/charts", {});
    });
    it("should fetch releases", async () => {
      await api.editorial.releases({ id: 0 });
      expect(api.client.request).toHaveBeenCalledWith("editorial/0/releases", {});
    });
  });

  describe("Genre", () => {
    it("should fetch genre details", async () => {
      await api.genre({ id: 132 });
      expect(api.client.request).toHaveBeenCalledWith("genre/132", {});
    });
    it("should fetch genre list", async () => {
      await api.genre();
      expect(api.client.request).toHaveBeenCalledWith("genre/", {});
    });
    it("should fetch genre artists", async () => {
      await api.genre.artists({ id: 132 });
      expect(api.client.request).toHaveBeenCalledWith("genre/132/artists", {});
    });
    it("should fetch genre podcasts", async () => {
      await api.genre.podcasts({ id: 132 });
      expect(api.client.request).toHaveBeenCalledWith("genre/132/podcasts", {});
    });
    it("should fetch genre radios", async () => {
      await api.genre.radios({ id: 132 });
      expect(api.client.request).toHaveBeenCalledWith("genre/132/radios", {});
    });
  });

  describe("Playlist", () => {
    it("should fetch playlist details", async () => {
      await api.playlist({ id: 4341978 });
      expect(api.client.request).toHaveBeenCalledWith("playlist/4341978", {});
    });
    it("should fetch playlist comments", async () => {
      await api.playlist.comments({ id: 4341978 });
      expect(api.client.request).toHaveBeenCalledWith("playlist/4341978/comments", {});
    });
    it("should fetch playlist fans", async () => {
      await api.playlist.fans({ id: 4341978 });
      expect(api.client.request).toHaveBeenCalledWith("playlist/4341978/fans", {});
    });
    it("should fetch playlist tracks", async () => {
      await api.playlist.tracks({ id: 4341978 });
      expect(api.client.request).toHaveBeenCalledWith("playlist/4341978/tracks", {});
    });
    it("should fetch playlist radio", async () => {
      await api.playlist.radio({ id: 4341978 });
      expect(api.client.request).toHaveBeenCalledWith("playlist/4341978/radio", {});
    });
  });

  describe("Radio", () => {
    it("should fetch radio details", async () => {
      await api.radio({ id: 6 });
      expect(api.client.request).toHaveBeenCalledWith("radio/6", {});
    });
    it("should fetch radio genres", async () => {
      await api.radio.genres();
      expect(api.client.request).toHaveBeenCalledWith("radio/genres", {});
    });
    it("should fetch radio top", async () => {
      await api.radio.top();
      expect(api.client.request).toHaveBeenCalledWith("radio/top", {});
    });
    it("should fetch radio lists", async () => {
      await api.radio.lists();
      expect(api.client.request).toHaveBeenCalledWith("radio/lists", {});
    });
    it("should fetch radio list if no id provided", async () => {
      await api.radio();
      expect(api.client.request).toHaveBeenCalledWith("radio/", {});
    });
    it("should fetch radio tracks", async () => {
      await api.radio.tracks({ id: 6 });
      expect(api.client.request).toHaveBeenCalledWith("radio/6/tracks", {});
    });
  });

  describe("Misc", () => {
    it("Track: should fetch track details", async () => {
      await api.track({ id: 3135556 });
      expect(api.client.request).toHaveBeenCalledWith("track/3135556", {});
    });

    it("Track: should fetch track alternative", async () => {
      await api.track.alternative({ id: 3135556 });
      expect(api.client.request).toHaveBeenCalledWith("track/3135556/alternative", {});
    });

    it("Track: should fetch track by ISRC", async () => {
      await api.track.isrc({ isrc: "GBDUW0000059" });
      expect(api.client.request).toHaveBeenCalledWith("track/isrc:GBDUW0000059", {});
    });

    it("Comment: should fetch comment", async () => {
      await api.comment({ id: 123 });
      expect(api.client.request).toHaveBeenCalledWith("comment/123", {});
    });

    it("Episode: should fetch episode", async () => {
      await api.episode({ id: 456 });
      expect(api.client.request).toHaveBeenCalledWith("episode/456", {});
    });

    it("Podcast: should fetch podcast", async () => {
      await api.podcast({ id: 789 });
      expect(api.client.request).toHaveBeenCalledWith("podcast/789", {});
    });

    it("Podcast: should fetch podcast list if no id provided", async () => {
      await api.podcast();
      expect(api.client.request).toHaveBeenCalledWith("podcast/", {});
    });

    it("Infos: should fetch infos", async () => {
      await api.infos();
      expect(api.client.request).toHaveBeenCalledWith("infos");
    });

    it("Options: should fetch options", async () => {
      await api.options();
      expect(api.client.request).toHaveBeenCalledWith("options");
    });
  });
});
