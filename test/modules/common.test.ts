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

describe("Common Modules (Individualized)", () => {
  let client: DeezerClient;

  beforeEach(() => {
    client = new DeezerClient();
    vi.spyOn(client, "request").mockResolvedValue({ data: [] });
  });

  describe("Editorial", () => {
    it("should fetch editorial details", async () => {
      const editorial = createEditorialModule(client);
      await editorial(0);
      expect(client.request).toHaveBeenCalledWith("editorial/0", {
        limit: undefined,
        index: undefined,
      });
    });
    it("should fetch list if no id", async () => {
      const editorial = createEditorialModule(client);
      await editorial();
      expect(client.request).toHaveBeenCalledWith("editorial/", {
        limit: undefined,
        index: undefined,
      });
    });
    it("should fetch selection", async () => {
      const editorial = createEditorialModule(client);
      await editorial.selection(0);
      expect(client.request).toHaveBeenCalledWith("editorial/0/selection", {
        date: undefined,
        limit: undefined,
        index: undefined,
      });
    });
    it("should fetch charts", async () => {
      const editorial = createEditorialModule(client);
      await editorial.charts(0);
      expect(client.request).toHaveBeenCalledWith("editorial/0/charts", {
        limit: undefined,
        index: undefined,
      });
    });
    it("should fetch releases", async () => {
      const editorial = createEditorialModule(client);
      await editorial.releases(0);
      expect(client.request).toHaveBeenCalledWith("editorial/0/releases", {
        limit: undefined,
        index: undefined,
      });
    });
  });

  describe("Genre", () => {
    it("should fetch genre details", async () => {
      const genre = createGenreModule(client);
      await genre(132);
      expect(client.request).toHaveBeenCalledWith("genre/132", {
        limit: undefined,
        index: undefined,
      });
    });
    it("should fetch genre list", async () => {
      const genre = createGenreModule(client);
      await genre();
      expect(client.request).toHaveBeenCalledWith("genre/", {
        limit: undefined,
        index: undefined,
      });
    });
    it("should fetch genre artists", async () => {
      const genre = createGenreModule(client);
      await genre.artists(132);
      expect(client.request).toHaveBeenCalledWith("genre/132/artists", {
        limit: undefined,
        index: undefined,
      });
    });
    it("should fetch genre podcasts", async () => {
      const genre = createGenreModule(client);
      await genre.podcasts(132);
      expect(client.request).toHaveBeenCalledWith("genre/132/podcasts", {
        limit: undefined,
        index: undefined,
      });
    });
    it("should fetch genre radios", async () => {
      const genre = createGenreModule(client);
      await genre.radios(132);
      expect(client.request).toHaveBeenCalledWith("genre/132/radios", {
        limit: undefined,
        index: undefined,
      });
    });
  });

  describe("Playlist", () => {
    it("should fetch playlist details", async () => {
      const playlist = createPlaylistModule(client);
      await playlist(4341978);
      expect(client.request).toHaveBeenCalledWith("playlist/4341978", {
        limit: undefined,
        index: undefined,
      });
    });
    it("should fetch playlist comments", async () => {
      const playlist = createPlaylistModule(client);
      await playlist.comments(4341978);
      expect(client.request).toHaveBeenCalledWith("playlist/4341978/comments", {
        limit: undefined,
        index: undefined,
      });
    });
    it("should fetch playlist fans", async () => {
      const playlist = createPlaylistModule(client);
      await playlist.fans(4341978);
      expect(client.request).toHaveBeenCalledWith("playlist/4341978/fans", {
        limit: undefined,
        index: undefined,
      });
    });
    it("should fetch playlist tracks", async () => {
      const playlist = createPlaylistModule(client);
      await playlist.tracks(4341978);
      expect(client.request).toHaveBeenCalledWith("playlist/4341978/tracks", {
        limit: undefined,
        index: undefined,
      });
    });
    it("should fetch playlist radio", async () => {
      const playlist = createPlaylistModule(client);
      await playlist.radio(4341978);
      expect(client.request).toHaveBeenCalledWith("playlist/4341978/radio", {
        limit: undefined,
        index: undefined,
      });
    });
  });

  describe("Radio", () => {
    it("should fetch radio details", async () => {
      const radio = createRadioModule(client);
      await radio(6);
      expect(client.request).toHaveBeenCalledWith("radio/6", {
        limit: undefined,
        index: undefined,
      });
    });
    it("should fetch radio genres", async () => {
      const radio = createRadioModule(client);
      await radio.genres();
      expect(client.request).toHaveBeenCalledWith("radio/genres", {
        limit: undefined,
        index: undefined,
      });
    });
    it("should fetch radio top", async () => {
      const radio = createRadioModule(client);
      await radio.top();
      expect(client.request).toHaveBeenCalledWith("radio/top", {
        limit: undefined,
        index: undefined,
      });
    });
    it("should fetch radio lists", async () => {
      const radio = createRadioModule(client);
      await radio.lists();
      expect(client.request).toHaveBeenCalledWith("radio/lists", {
        limit: undefined,
        index: undefined,
      });
    });
    it("should fetch radio tracks", async () => {
      const radio = createRadioModule(client);
      await radio.tracks(6);
      expect(client.request).toHaveBeenCalledWith("radio/6/tracks", {
        limit: undefined,
        index: undefined,
      });
    });
  });

  describe("Misc", () => {
    it("Track: should fetch track details", async () => {
      const track = createTrackModule(client);
      await track(3135556);
      expect(client.request).toHaveBeenCalledWith("track/3135556", {
        limit: undefined,
        index: undefined,
      });
    });

    it("Track: should fetch track alternative", async () => {
      const track = createTrackModule(client);
      await track.alternative(3135556);
      expect(client.request).toHaveBeenCalledWith("track/3135556/alternative", {
        limit: undefined,
        index: undefined,
      });
    });

    it("Comment: should fetch comment", async () => {
      const comment = createCommentModule(client);
      await comment(123);
      expect(client.request).toHaveBeenCalledWith("comment/123", {
        limit: undefined,
        index: undefined,
      });
    });

    it("Episode: should fetch episode", async () => {
      const episode = createEpisodeModule(client);
      await episode(456);
      expect(client.request).toHaveBeenCalledWith("episode/456", {
        limit: undefined,
        index: undefined,
      });
    });

    it("Podcast: should fetch podcast", async () => {
      const podcast = createPodcastModule(client);
      await podcast(789);
      expect(client.request).toHaveBeenCalledWith("podcast/789", {
        limit: undefined,
        index: undefined,
      });
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
