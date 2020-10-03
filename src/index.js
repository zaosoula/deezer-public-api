const fetch = require('node-fetch');
const apiUrl = 'https://api.deezer.com/'

function DeezerPublicApi() {
  this.apiUrl = apiUrl;
}

/*
 *  ALBUM
 */
DeezerPublicApi.prototype.album = function(id, limit, index) {
  var url = 'album/' + id;
  return rq(url, index, limit);
};

DeezerPublicApi.prototype.album.comments = function(id, limit, index) {
  var url = 'album/' + id + '/comments';
  return rq(url, index, limit);
};

DeezerPublicApi.prototype.album.fans = function(id, limit, index) {
  var url = 'album/' + id + '/fans';
  return rq(url, index, limit);
};

DeezerPublicApi.prototype.album.tracks = function(id, limit, index) {
  var url = 'album/' + id + '/tracks';
  return rq(url, index, limit);
};

/*
 *  ARTIST
 */
DeezerPublicApi.prototype.artist = function(id, limit, index) {
  var url = 'artist/' + id;
  return rq(url, index, limit);
};

DeezerPublicApi.prototype.artist.top = function(id, limit, index) {
  var url = 'artist/' + id + '/top';
  return rq(url, index, limit);
};

DeezerPublicApi.prototype.artist.albums = function(id, limit, index) {
  var url = 'artist/' + id + '/albums';
  return rq(url, index, limit);
};

DeezerPublicApi.prototype.artist.comments = function(id, limit, index) {
  var url = 'artist/' + id + '/comments';
  return rq(url, index, limit);
};

DeezerPublicApi.prototype.artist.fans = function(id, limit, index) {
  var url = 'artist/' + id + '/fans';
  return rq(url, index, limit);
};

DeezerPublicApi.prototype.artist.related = function(id, limit, index) {
  var url = 'artist/' + id + '/related';
  return rq(url, index, limit);
};

DeezerPublicApi.prototype.artist.radio = function(id, limit, index) {
  var url = 'artist/' + id + '/radio';
  return rq(url, index, limit);
};

DeezerPublicApi.prototype.artist.playlists = function(id, limit, index) {
  var url = 'artist/' + id + '/playlists';
  return rq(url, index, limit);
};

/*
 *  CHART
 */
DeezerPublicApi.prototype.chart = function(limit, index) {
  var url = 'chart/';
  return rq(url, index, limit);
};

DeezerPublicApi.prototype.chart.tracks = function(limit, index) {
  var url = 'chart/0/tracks';
  return rq(url, index, limit);
};

DeezerPublicApi.prototype.chart.albums = function(limit, index) {
  var url = 'chart/0/albums';
  return rq(url, index, limit);
};

DeezerPublicApi.prototype.chart.artists = function(limit, index) {
  var url = 'chart/0/artists';
  return rq(url, index, limit);
};

DeezerPublicApi.prototype.chart.playlists = function(limit, index) {
  var url = 'chart/0/playlists';
  return rq(url, index, limit);
};

DeezerPublicApi.prototype.chart.podcasts = function(limit, index) {
  var url = 'chart/0/podcasts';
  return rq(url, index, limit);
};

/*
 *  COMMENT
 */
DeezerPublicApi.prototype.comment = function(id, limit, index) {
  var url = 'comment/' + id;
  return rq(url, index, limit);
};

/*
 *  EDITORIAL
 */
DeezerPublicApi.prototype.editorial = function(id, limit, index) {
  var url = 'editorial/' + ((id) ? id : '');
  return rq(url, index, limit);
};

DeezerPublicApi.prototype.editorial.selection = function(id, date, limit, index) {
  var url = 'editorial/' + id + '/selection';
  if (date) url = url + '&date=' + date;
  return rq(url, index, limit);
};

DeezerPublicApi.prototype.editorial.charts = function(id, limit, index) {
  var url = 'editorial/' + id + '/charts';
  return rq(url, index, limit);
};

DeezerPublicApi.prototype.editorial.releases = function(id, limit, index) {
  var url = 'editorial/' + id + '/releases';
  return rq(url, index, limit);
};

/*
 *  EPISODE
 */
DeezerPublicApi.prototype.episode = function(id, limit, index) {
  var url = 'episode/' + id;
  return rq(url, index, limit);
};

/*
 *  GENRE
 */
DeezerPublicApi.prototype.genre = function(id, limit, index) {
  var url = 'genre/' + ((id) ? id : '');
  return rq(url, index, limit);
};

DeezerPublicApi.prototype.genre.artists = function(id, limit, index) {
  var url = 'genre/' + id + '/artists';
  return rq(url, index, limit);
};

DeezerPublicApi.prototype.genre.podcasts = function(id, limit, index) {
  var url = 'genre/' + id + '/podcasts';
  return rq(url, index, limit);
};

DeezerPublicApi.prototype.genre.radios = function(id, limit, index) {
  var url = 'genre/' + id + '/radios';
  return rq(url, index, limit);
};

/*
 *  INFOS
 */
DeezerPublicApi.prototype.infos = function() {
  var url = 'infos';
  return rq(url);
};

/*
 *  OPTIONS
 */
DeezerPublicApi.prototype.options = function() {
  var url = 'options';
  return rq(url);
};

/*
 *  PLAYLIST
 */
DeezerPublicApi.prototype.playlist = function(id, limit, index) {
  var url = 'playlist/' + id;
  return rq(url, index, limit);
};

DeezerPublicApi.prototype.playlist.comments = function(id, limit, index) {
  var url = 'playlist/' + id + '/comments';
  return rq(url, index, limit);
};

DeezerPublicApi.prototype.playlist.fans = function(id, limit, index) {
  var url = 'playlist/' + id + '/fans';
  return rq(url, index, limit);
};

DeezerPublicApi.prototype.playlist.tracks = function(id, limit, index) {
  var url = 'playlist/' + id + '/tracks';
  return rq(url, index, limit);
};

DeezerPublicApi.prototype.playlist.radio = function(id, limit, index) {
  var url = 'playlist/' + id + '/radio';
  return rq(url, index, limit);
};

/*
 *  PODCAST
 */
DeezerPublicApi.prototype.podcast = function(id, limit, index) {
  var url = 'podcast/' + ((id) ? id : '');
  return rq(url, index, limit);
};

DeezerPublicApi.prototype.podcast.episodes = function(id, limit, index) {
  var url = 'podcast/' + id + '/episodes';
  return rq(url, index, limit);
};

/*
 *  RADIO
 */
DeezerPublicApi.prototype.radio = function(id, limit, index) {
  var url = 'radio/' + ((id) ? id : '');
  return rq(url, index, limit);
};

DeezerPublicApi.prototype.radio.genres = function(limit, index) {
  var url = 'radio/genres';
  return rq(url, index, limit);
};

DeezerPublicApi.prototype.radio.top = function(limit, index) {
  var url = 'radio/top';
  return rq(url, index, limit);
};

DeezerPublicApi.prototype.radio.lists = function(limit, index) {
  var url = 'radio/lists';
  return rq(url, index, limit);
};

DeezerPublicApi.prototype.radio.tracks = function(id, limit, index) {
  var url = 'radio/' + id + '/tracks';
  return rq(url, index, limit);
};

/*
 *  TRACK
 */
DeezerPublicApi.prototype.track = function(id, limit, index) {
  var url = 'track/' + id;
  return rq(url, index, limit);
};

/*
 *  USER
 */
DeezerPublicApi.prototype.user = function(id, limit, index) {
  var url = 'user/' + id;
  return rq(url, index, limit);
};

DeezerPublicApi.prototype.user.albums = function(id, limit, index) {
  var url = 'user/' + id + '/albums';
  return rq(url, index, limit);
};

DeezerPublicApi.prototype.user.artists = function(id, limit, index) {
  var url = 'user/' + id + '/artists';
  return rq(url, index, limit);
};

DeezerPublicApi.prototype.user.charts = function(id, limit, index) {
  var url = 'user/' + id + '/charts';
  return rq(url, index, limit);
};

DeezerPublicApi.prototype.user.charts.tracks = function(id, limit, index) {
  var url = 'user/' + id + '/charts/tracks';
  return rq(url, index, limit);
};

DeezerPublicApi.prototype.user.charts.albums = function(id, limit, index) {
  var url = 'user/' + id + '/charts/albums';
  return rq(url, index, limit);
};

DeezerPublicApi.prototype.user.charts.playlists = function(id, limit, index) {
  var url = 'user/' + id + '/charts/playlists';
  return rq(url, index, limit);
};

DeezerPublicApi.prototype.user.charts.artists = function(id, limit, index) {
  var url = 'user/' + id + '/charts/artists';
  return rq(url, index, limit);
};

DeezerPublicApi.prototype.user.flow = function(id, limit, index) {
  var url = 'user/' + id + '/flow';
  return rq(url, index, limit);
};

DeezerPublicApi.prototype.user.followings = function(id, limit, index) {
  var url = 'user/' + id + '/followings';
  return rq(url, index, limit);
};

DeezerPublicApi.prototype.user.followers = function(id, limit, index) {
  var url = 'user/' + id + '/followers';
  return rq(url, index, limit);
};

DeezerPublicApi.prototype.user.playlists = function(id, limit, index) {
  var url = 'user/' + id + '/playlists';
  return rq(url, index, limit);
};

DeezerPublicApi.prototype.user.podcasts = function(id, limit, index) {
  var url = 'user/' + id + '/podcasts';
  return rq(url, index, limit);
};

DeezerPublicApi.prototype.user.radios = function(id, limit, index) {
  var url = 'user/' + id + '/radios';
  return rq(url, index, limit);
};

DeezerPublicApi.prototype.user.tracks = function(id, limit, index) {
  var url = 'user/' + id + '/tracks';
  return rq(url, index, limit);
};



/*
 *  SEARCH
 */
DeezerPublicApi.prototype.search = function(options, order, limit, index) {
  var url = 'search?q=';
  var query = '';
  if (typeof options === 'object') {
    for (var key in options) {
      query = query + key + ':"' + options[key] + '" ';
    }
  } else {
    query = options;
  }
  url = url + query;

  return rq(url, index, limit, order);
};

DeezerPublicApi.prototype.search.artist = function(query, order, limit, index, strict) {
  var url = 'search/artist?q=' + query;
  return rq(url, index, limit, order, strict);
};

DeezerPublicApi.prototype.search.playlist = function(query, order, limit, index, strict) {
  var url = 'search/playlist?q=' + query;
  return rq(url, index, limit, order, strict);
};

DeezerPublicApi.prototype.search.podcast = function(query, order, limit, index, strict) {
  var url = 'search/podcast?q=' + query;
  return rq(url, index, limit, order, strict);
};

DeezerPublicApi.prototype.search.radio = function(query, order, limit, index, strict) {
  var url = 'search/radio?q=' + query;
  return rq(url, index, limit, order, strict);
};

DeezerPublicApi.prototype.search.track = function(query, order, limit, index, strict) {
  var url = 'search/track?q=' + query;
  return rq(url, index, limit, order, strict);
};

DeezerPublicApi.prototype.search.user = function(query, order, limit, index, strict) {
  var url = 'search/user?q=' + query;
  return rq(url, index, limit, order, strict);
};

function rq(url, index, limit, order, strict) {
  return new Promise((resolve, reject)=>{
    if (!url.includes("?")) url = url + '?';
    if (index && index !== 0) url = url + '&index=' + index;
    if (limit && limit !== 0) url = url + '&limit=' + limit;
    if (order) url = url + '&order=' + order;
    if (strict) url = url + '&strict=on';
    if (url.endsWith('?')) url = url.slice(0, -1);
    fetch(apiUrl + url, {
        json: true
      }).then(res => res.json())
      .then(json => {
        resolve(json)
        // console.log(json)
      }).catch((err) => reject(err));
  });
}

module.exports = DeezerPublicApi;
