# Deezer Public API wrapper

This is **[Node.js](https://nodejs.org/en/download/)** wrapper for the [Deezer Public API](http://developers.deezer.com/api) that return promises.

This is forked from https://github.com/zaosoula/deezer-public-api, but it has modifications and uses a much faster HTTP library, giving you the most immediate results.

## Installation

    npm install @muhimur/deezer-public-api

## Usage example

```js
const DeezerPublicApi = require("@muhimur/deezer-public-api");
const deezer = new DeezerPublicApi();

// Search a track
deezer.track("493894782").then(result => console.log(result));

// Search an artist
deezer.search.artist("ILYSH").then(result => console.log(result));

// Get info for the given artist id
deezer.artist("58671252").then(result => console.log(result));

// Get album list for the given artist id
deezer.artist.albums("58671252").then(result => console.log(result));
```

## Available methods

##### Album

- album(`id`, `limit`, `index`)
- album.comments(`id`, `limit`, `index`)
- album.fans(`id`, `limit`, `index`)
- album.tracks(`id`, `limit`, `index`)

##### Artist

- artist(`id`, `limit`, `index`)
- artist.top(`id`, `limit`, `index`)
- artist.albums(`id`, `limit`, `index`)
- artist.comments(`id`, `limit`, `index`)
- artist.fans(`id`, `limit`, `index`)
- artist.related(`id`, `limit`, `index`)
- artist.radio(`id`, `limit`, `index`)
- artist.playlists(`id`, `limit`, `index`)

##### Chart

- chart(`limit`, `index`)
- chart.tracks(`limit`, `index`)
- chart.albums(`limit`, `index`)
- chart.artists(`limit`, `index`)
- chart.playlists(`limit`, `index`)
- chart.podcasts(`limit`, `index`)

##### Comment

- comment(`id`, `limit`, `index`)

##### Editorial

- editorial(`id`, `limit`, `index`)
- editorial.selection(`id`, `limit`, `index`)
- editorial.charts(`id`, `limit`, `index`)
- editorial.releases(`id`, `limit`, `index`)

##### Episode

- episode(`id`, `limit`, `index`)

##### Genre

- genre(`id`, `limit`, `index`)
- genre.artists(`id`, `limit`, `index`)
- genre.podcasts(`id`, `limit`, `index`)
- genre.radios(`id`, `limit`, `index`)

##### Infos

- infos()

##### Options

- options()

##### Playlist

- playlist(`id`, `limit`, `index`)
- playlist.comments(`id`, `limit`, `index`)
- playlist.fans(`id`, `limit`, `index`)
- playlist.tracks(`id`, `limit`, `index`)
- playlist.radio(`id`, `limit`, `index`)

##### Podcast

- podcast(`id`, `limit`, `index`)
- podcast.episodes(`id`, `limit`, `index`)

##### Radio

- radio(`id`, `limit`, `index`)
- radio.genres(`limit`, `index`)
- radio.top(`limit`, `index`)
- radio.lists(`limit`, `index`)
- radio.tracks(`id`, `limit`, `index`)

##### Track

- track(`id`, `limit`, `index`)

##### User

- user(`id`, `limit`, `index`)
- user.albums(`id`, `limit`, `index`)
- user.artists(`id`, `limit`, `index`)
- user.charts(`id`, `limit`, `index`)
- user.charts.tracks(`id`, `limit`, `index`)
- user.charts.albums(`id`, `limit`, `index`)
- user.charts.playlists(`id`, `limit`, `index`)
- user.charts.artists(`id`, `limit`, `index`)
- user.flow(`id`, `limit`, `index`)
- user.followings(`id`, `limit`, `index`)
- user.followers(`id`, `limit`, `index`)
- user.playlists(`id`, `limit`, `index`)
- user.podcasts(`id`, `limit`, `index`)
- user.radios(`id`, `limit`, `index`)
- user.tracks(`id`, `limit`, `index`)

##### Search

- search(`options`, `order`, `limit`, `index`)
- search.artist(`query`, `order`, `limit`, `index`, `strict`)
- search.playlist(`query`, `order`, `limit`, `index`, `strict`)
- search.podcast(`query`, `order`, `limit`, `index`, `strict`)
- search.radio(`query`, `order`, `limit`, `index`, `strict`)
- search.track(`query`, `order`, `limit`, `index`, `strict`)
- search.user(`query`, `order`, `limit`, `index`, `strict`)