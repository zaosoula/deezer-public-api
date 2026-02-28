import { describe, it, expect, vi, beforeEach } from "vitest";
import { DeezerClient } from "../../src/client.js";
import { createEditorialModule } from "../../src/modules/editorial.js";
import { createGenreModule } from "../../src/modules/genre.js";
import { createPlaylistModule } from "../../src/modules/playlist.js";
import { createRadioModule } from "../../src/modules/radio.js";
import { createTrackModule } from "../../src/modules/track.js";
import { createCommentModule } from "../../src/modules/comment.js";
import { createEpisodeModule } from "../../src/modules/episode.js";
import { createPodcastModule } from "../../src/modules/podcast.js";
import { createInfosModule } from "../../src/modules/infos.js";
import { createOptionsModule } from "../../src/modules/options.js";

import { createChartModule } from "../../src/modules/chart.js";

describe("Common Modules (Individualized)", () => {
  let client: DeezerClient;

  beforeEach(() => {
    client = new DeezerClient();
    vi.spyOn(client, "request").mockResolvedValue({ data: [] });
  });

  describe("Chart", () => {
    it("should fetch global charts", async () => {
      const chart = createChartModule(client);
      await chart();
      expect(client.request).toHaveBeenCalledWith("chart", {});
    });
    it("should fetch tracks charts", async () => {
      const chart = createChartModule(client);
      await chart.tracks();
      expect(client.request).toHaveBeenCalledWith("chart/0/tracks", {});
    });
    it("should fetch albums charts", async () => {
      const chart = createChartModule(client);
      await chart.albums();
      expect(client.request).toHaveBeenCalledWith("chart/0/albums", {});
    });
    it("should fetch artists charts", async () => {
      const chart = createChartModule(client);
      await chart.artists();
      expect(client.request).toHaveBeenCalledWith("chart/0/artists", {});
    });
    it("should fetch playlists charts", async () => {
      const chart = createChartModule(client);
      await chart.playlists();
      expect(client.request).toHaveBeenCalledWith("chart/0/playlists", {});
    });
    it("should fetch podcasts charts", async () => {
      const chart = createChartModule(client);
      await chart.podcasts();
      expect(client.request).toHaveBeenCalledWith("chart/0/podcasts", {});
    });
  });

  describe("Editorial", () => {
    it("should fetch editorial details", async () => {
      const editorial = createEditorialModule(client);
      await editorial({ id: 0 });
      expect(client.request).toHaveBeenCalledWith("editorial/0", {});
    });
    it("should fetch list if no id", async () => {
      const editorial = createEditorialModule(client);
      await editorial();
      expect(client.request).toHaveBeenCalledWith("editorial/", {});
    });
    it("should fetch selection", async () => {
      const editorial = createEditorialModule(client);
      await editorial.selection({ id: 0 });
      expect(client.request).toHaveBeenCalledWith("editorial/0/selection", {});
    });
    it("should fetch charts", async () => {
      const editorial = createEditorialModule(client);
      await editorial.charts({ id: 0 });
      expect(client.request).toHaveBeenCalledWith("editorial/0/charts", {});
    });
    it("should fetch releases", async () => {
      const editorial = createEditorialModule(client);
      await editorial.releases({ id: 0 });
      expect(client.request).toHaveBeenCalledWith("editorial/0/releases", {});
    });
  });

  describe("Genre", () => {
    it("should fetch genre details", async () => {
      const genre = createGenreModule(client);
      await genre({ id: 132 });
      expect(client.request).toHaveBeenCalledWith("genre/132", {});
    });
    it("should fetch genre list", async () => {
      const genre = createGenreModule(client);
      await genre();
      expect(client.request).toHaveBeenCalledWith("genre/", {});
    });
    it("should fetch genre artists", async () => {
      const genre = createGenreModule(client);
      await genre.artists({ id: 132 });
      expect(client.request).toHaveBeenCalledWith("genre/132/artists", {});
    });
    it("should fetch genre podcasts", async () => {
      const genre = createGenreModule(client);
      await genre.podcasts({ id: 132 });
      expect(client.request).toHaveBeenCalledWith("genre/132/podcasts", {});
    });
    it("should fetch genre radios", async () => {
      const genre = createGenreModule(client);
      await genre.radios({ id: 132 });
      expect(client.request).toHaveBeenCalledWith("genre/132/radios", {});
    });
  });

  describe("Playlist", () => {
    it("should fetch playlist details", async () => {
      const playlist = createPlaylistModule(client);
      await playlist({ id: 4341978 });
      expect(client.request).toHaveBeenCalledWith("playlist/4341978", {});
    });
    it("should fetch playlist comments", async () => {
      const playlist = createPlaylistModule(client);
      await playlist.comments({ id: 4341978 });
      expect(client.request).toHaveBeenCalledWith("playlist/4341978/comments", {});
    });
    it("should fetch playlist fans", async () => {
      const playlist = createPlaylistModule(client);
      await playlist.fans({ id: 4341978 });
      expect(client.request).toHaveBeenCalledWith("playlist/4341978/fans", {});
    });
    it("should fetch playlist tracks", async () => {
      const playlist = createPlaylistModule(client);
      await playlist.tracks({ id: 4341978 });
      expect(client.request).toHaveBeenCalledWith("playlist/4341978/tracks", {});
    });
    it("should fetch playlist radio", async () => {
      const playlist = createPlaylistModule(client);
      await playlist.radio({ id: 4341978 });
      expect(client.request).toHaveBeenCalledWith("playlist/4341978/radio", {});
    });
  });

  describe("Radio", () => {
    it("should fetch radio details", async () => {
      const radio = createRadioModule(client);
      await radio({ id: 6 });
      expect(client.request).toHaveBeenCalledWith("radio/6", {});
    });
    it("should fetch radio genres", async () => {
      const radio = createRadioModule(client);
      await radio.genres();
      expect(client.request).toHaveBeenCalledWith("radio/genres", {});
    });
    it("should fetch radio top", async () => {
      const radio = createRadioModule(client);
      await radio.top();
      expect(client.request).toHaveBeenCalledWith("radio/top", {});
    });
    it("should fetch radio lists", async () => {
      const radio = createRadioModule(client);
      await radio.lists();
      expect(client.request).toHaveBeenCalledWith("radio/lists", {});
    });
    it("should fetch radio list if no id provided", async () => {
      const radio = createRadioModule(client);
      await radio();
      expect(client.request).toHaveBeenCalledWith("radio/", {});
    });
    it("should fetch radio tracks", async () => {
      const radio = createRadioModule(client);
      await radio.tracks({ id: 6 });
      expect(client.request).toHaveBeenCalledWith("radio/6/tracks", {});
    });
  });

  describe("Misc", () => {
    it("Track: should fetch track details", async () => {
      const track = createTrackModule(client);
      await track({ id: 3135556 });
      expect(client.request).toHaveBeenCalledWith("track/3135556", {});
    });

    it("Track: should fetch track alternative", async () => {
      const track = createTrackModule(client);
      await track.alternative({ id: 3135556 });
      expect(client.request).toHaveBeenCalledWith("track/3135556/alternative", {});
    });

    it("Track: should fetch track by ISRC", async () => {
      const track = createTrackModule(client);
      await track.isrc({ isrc: "GBDUW0000059" });
      expect(client.request).toHaveBeenCalledWith("track/isrc:GBDUW0000059", {});
    });

    it("Comment: should fetch comment", async () => {
      const comment = createCommentModule(client);
      await comment({ id: 123 });
      expect(client.request).toHaveBeenCalledWith("comment/123", {});
    });

    it("Episode: should fetch episode", async () => {
      const episode = createEpisodeModule(client);
      await episode({ id: 456 });
      expect(client.request).toHaveBeenCalledWith("episode/456", {});
    });

    it("Podcast: should fetch podcast", async () => {
      const podcast = createPodcastModule(client);
      await podcast({ id: 789 });
      expect(client.request).toHaveBeenCalledWith("podcast/789", {});
    });

    it("Podcast: should fetch podcast list if no id provided", async () => {
      const podcast = createPodcastModule(client);
      await podcast();
      expect(client.request).toHaveBeenCalledWith("podcast/", {});
    });

    it("Infos: should fetch infos", async () => {
      const infos = createInfosModule(client);
      await infos();
      expect(client.request).toHaveBeenCalledWith("infos");
    });

    it("Options: should fetch options", async () => {
      const options = createOptionsModule(client);
      await options();
      expect(client.request).toHaveBeenCalledWith("options");
    });
  });
});
