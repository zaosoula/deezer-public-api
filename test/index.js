const DeezerPublicApi = require('');
let deezer = new DeezerPublicApi();
let artistName = 'ILYSH';
deezer.search.artist(artistName).then((artists) => {

  let artist = artists.data.find((artist) => {
    console.log(artist.name);
    return artist.name == artistName
  });

  console.log(artist);

  return deezer.artist.albums(artist.id, 1000);
}).then((result) => {

  result.data.map((i) => {
    console.log(i);
  })

  return deezer.album(result.data[0].id)
}).then((album) => {
  if (album.error) {
    console.log(album.error);
    return;
  }

  let albumData = {
    upc: album.upc,
    title: album.title,
    link: {
      deezer: album.link
    },
    cover: album.cover_xl,
    label: album.label,
    duration: album.duration,
    releaseDate: album.release_date,
    recordType: album.record_type,
    explicit: album.explicit_lyrics,
    fans: album.fans,
    rating: album.rating,
    mainArtist: {
      name: album.artist.name,
      picture: album.artist.picture_xl,
    },
    contributors: album.contributors.map((e) => {
      return {
        name: e.name,
        picture: e.picture_xl,
      }
    }),
    genres: album.genres.data.map((o) => {
      return {
        id: o.id,
        name: o.name
      }
    }),
    tracks: album.tracks.data.map((o) => {
      return {
        title: o.title,
        titleShort: o.title_short,
        link: o.link,
        name: o.name,
        explicit: o.explicit_lyrics,
      }
    }),
  }

  console.log(albumData);

}).catch((err) => {
  console.log("has an error:", err);
})
