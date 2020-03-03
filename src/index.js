var rp = require('request-promise');
const apiUrl = 'https://api.deezer.com/'

function DeezerOpenApi() {
  this.apiUrl = apiUrl;
}
/*
 *  ALBUM
 */
DeezerOpenApi.prototype.album = function(id, limit, index) {
  var url = 'album/' + id;
  return rq(url, index, limit);
};

DeezerOpenApi.prototype.album.comments = function(id, limit, index) {
  var url = 'album/' + id + '/comments';
  return rq(url, index, limit);
};

DeezerOpenApi.prototype.album.fans = function(id, limit, index) {
  var url = 'album/' + id + '/fans';
  return rq(url, index, limit);
};

DeezerOpenApi.prototype.album.tracks = function(id, limit, index) {
  var url = 'album/' + id + '/tracks';
  return rq(url, index, limit);
};
/*
 *  CHART
 */
DeezerOpenApi.prototype.chart = function(limit, index) {
  var url = 'chart/';
  return rq(url, index, limit);
};

DeezerOpenApi.prototype.chart.tracks = function(limit, index) {
  var url = 'chart/0/tracks';
  return rq(url, index, limit);
};

DeezerOpenApi.prototype.chart.albums = function(limit, index) {
  var url = 'chart/0/albums';
  return rq(url, index, limit);
};

DeezerOpenApi.prototype.chart.artists = function(limit, index) {
  var url = 'chart/0/artists';
  return rq(url, index, limit);
};

DeezerOpenApi.prototype.chart.playlists = function(limit, index) {
  var url = 'chart/0/playlists';
  return rq(url, index, limit);
};


DeezerOpenApi.prototype.chart.podcasts = function(index, limit) {
  var url = 'chart/0/podcasts';
  return rq(url, index, limit);
};
