<<<<<<< Updated upstream
# Deezer Public API wrapper

This is *Nodejs* wrapper for the [Deezer Public API](http://developers.deezer.com/api) that return promises.

## Installation
    npm install deezer-public-api --save
=======
<div id="top"></div>

<!-- PROJECT SHIELDS -->
<!--
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/zaosoula/deezer-public-api">
    <img src="./docs/deezer.svg" alt="Logo" height="80">
  </a>

<h3 align="center">Deezer Public API wrapper</h3>

  <p align="center">
    <i>Nodejs</i> wrapper for the <a href="http://developers.deezer.com/api" target="_blank">Deezer Public API</a> that return promises.
    <br />
    <a href="https://github.com/zaosoula/deezer-public-api"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="http://developers.deezer.com/api" target="_blank">Deezer Docs</a>
    ·
    <a href="https://github.com/zaosoula/deezer-public-api/issues">Report Bug</a>
    ·
    <a href="https://github.com/zaosoula/deezer-public-api/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  
  
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Yarn (recommended)](#yarn-recommended)
  - [NPM](#npm)
- [Usage](#usage)
  - [Promise](#promise)
  - [Async/await](#asyncawait)
- [Available methods](#available-methods)
      - [Album](#album)
      - [Artist](#artist)
      - [Chart](#chart)
      - [Comment](#comment)
      - [Editorial](#editorial)
      - [Episode](#episode)
      - [Genre](#genre)
      - [Infos](#infos)
      - [Options](#options)
      - [Playlist](#playlist)
      - [Podcast](#podcast)
      - [Radio](#radio)
      - [Track](#track)
      - [User](#user)
      - [Search](#search)
- [Contributors](#contributors)
- [Contributing](#contributing)
- [License](#license)



</details>




<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Installation

### Yarn (recommended)
```bash
yarn add deezer-public-api
```

### NPM
```bash
npm install deezer-public-api
```


<p align="right">(<a href="#top">back to top</a>)</p>
>>>>>>> Stashed changes

<!-- USAGE EXAMPLES -->
## Usage

### Promise
```js
<<<<<<< Updated upstream
const DeezerPublicApi = require('deezer-public-api');
let deezer = new DeezerPublicApi();

//Search an artist
deezer.search.artist('ILYSH').then(function(result) {
   console.log(result);
});

//Get info for the given artist id
deezer.artist('58671252').then(function(result) {
   console.log(result);
});

//Get album list for the given artist id
deezer.artist.albums('58671252').then(function(result) {
   console.log(result);
});
```
=======
const DeezerPublicApi = require("deezer-public-api");
const deezer = new DeezerPublicApi();

// Get a track
deezer.track("493894782").then(result => console.log(result));

// Search an artist
deezer.search.artist("ILYSH").then(result => console.log(result));

// Get info for the given artist id
deezer.artist("58671252").then(result => console.log(result));

// Get album list for the given artist id
deezer.artist.albums("58671252").then(result => console.log(result));
```

### Async/await
```js
const DeezerPublicApi = require("deezer-public-api");
const deezer = new DeezerPublicApi();

(async ()=>{
  // Get a track
  const track = await deezer.track("493894782");

  // Search an artist
  const artists = await deezer.search.artist("ILYSH");

  // Get info for the given artist id
  const artist = await deezer.artist("58671252");

    // Get album list for the given artist id
  const albums = await deezer.artist.albums("58671252")

})();
```



<!-- ROADMAP -->
>>>>>>> Stashed changes
## Available methods


##### Album
* album(`id`, `limit`, `index`)
* album.comments(`id`, `limit`, `index`)
* album.fans(`id`, `limit`, `index`)
* album.tracks(`id`, `limit`, `index`)

##### Artist
* artist(`id`, `limit`, `index`)
* artist.top(`id`, `limit`, `index`)
* artist.albums(`id`, `limit`, `index`)
* artist.comments(`id`, `limit`, `index`)
* artist.fans(`id`, `limit`, `index`)
* artist.related(`id`, `limit`, `index`)
* artist.radio(`id`, `limit`, `index`)
* artist.playlists(`id`, `limit`, `index`)

##### Chart
* chart(`limit`, `index`)
* chart.tracks(`limit`, `index`)
* chart.albums(`limit`, `index`)
* chart.artists(`limit`, `index`)
* chart.playlists(`limit`, `index`)
* chart.podcasts(`limit`, `index`)

##### Comment
* comment(`id`, `limit`, `index`)

##### Editorial
* editorial(`id`, `limit`, `index`)
* editorial.selection(`id`, `limit`, `index`)
* editorial.charts(`id`, `limit`, `index`)
* editorial.releases(`id`, `limit`, `index`)

##### Episode
* episode(`id`, `limit`, `index`)

##### Genre
* genre(`id`, `limit`, `index`)
* genre.artists(`id`, `limit`, `index`)
* genre.podcasts(`id`, `limit`, `index`)
* genre.radios(`id`, `limit`, `index`)

##### Infos
* infos()

##### Options
* options()

##### Playlist
* playlist(`id`, `limit`, `index`)
* playlist.comments(`id`, `limit`, `index`)
* playlist.fans(`id`, `limit`, `index`)
* playlist.tracks(`id`, `limit`, `index`)
* playlist.radio(`id`, `limit`, `index`)

##### Podcast
* podcast(`id`, `limit`, `index`)
* podcast.episodes(`id`, `limit`, `index`)

##### Radio
* radio(`id`, `limit`, `index`)
* radio.genres(`limit`, `index`)
* radio.top(`limit`, `index`)
* radio.lists(`limit`, `index`)
* radio.tracks(`id`, `limit`, `index`)

##### Track
* track(`id`, `limit`, `index`)

##### User
* user(`id`, `limit`, `index`)
* user.albums(`id`, `limit`, `index`)
* user.artists(`id`, `limit`, `index`)
* user.charts(`id`, `limit`, `index`)
* user.charts.tracks(`id`, `limit`, `index`)
* user.charts.albums(`id`, `limit`, `index`)
* user.charts.playlists(`id`, `limit`, `index`)
* user.charts.artists(`id`, `limit`, `index`)
* user.flow(`id`, `limit`, `index`)
* user.followings(`id`, `limit`, `index`)
* user.followers(`id`, `limit`, `index`)
* user.playlists(`id`, `limit`, `index`)
* user.podcasts(`id`, `limit`, `index`)
* user.radios(`id`, `limit`, `index`)
* user.tracks(`id`, `limit`, `index`)

##### Search
<<<<<<< Updated upstream
* search(`options`, `order`, `limit`, `index`)
* search.artist(`query`, `order`, `limit`, `index`, `strict`)
* search.playlist(`query`, `order`, `limit`, `index`, `strict`)
* search.podcast(`query`, `order`, `limit`, `index`, `strict`)
* search.radio(`query`, `order`, `limit`, `index`, `strict`)
* search.track(`query`, `order`, `limit`, `index`, `strict`)
* search.user(`query`, `order`, `limit`, `index`, `strict`)
=======

- search(`options`, `order`, `limit`, `index`)
- search.artist(`query`, `order`, `limit`, `index`, `strict`)
- search.playlist(`query`, `order`, `limit`, `index`, `strict`)
- search.podcast(`query`, `order`, `limit`, `index`, `strict`)
- search.radio(`query`, `order`, `limit`, `index`, `strict`)
- search.track(`query`, `order`, `limit`, `index`, `strict`)
- search.user(`query`, `order`, `limit`, `index`, `strict`)

<p align="right">(<a href="#top">back to top</a>)</p>


## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://www.zaosoula.fr/"><img src="https://avatars.githubusercontent.com/u/1884246?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Zao Soula</b></sub></a><br /><a href="https://github.com/zaosoula/deezer-public-api/commits?author=zaosoula" title="Code">💻</a> <a href="https://github.com/zaosoula/deezer-public-api/commits?author=zaosoula" title="Documentation">📖</a></td>
    <td align="center"><a href="https://twitter.com/Muhimur_"><img src="https://avatars.githubusercontent.com/u/52611945?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Muh</b></sub></a><br /><a href="https://github.com/zaosoula/deezer-public-api/commits?author=Muh9049" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/zaosoula/deezer-public-api.svg?style=for-the-badge
[contributors-url]: https://github.com/zaosoula/deezer-public-api/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/zaosoula/deezer-public-api.svg?style=for-the-badge
[forks-url]: https://github.com/zaosoula/deezer-public-api/network/members
[stars-shield]: https://img.shields.io/github/stars/zaosoula/deezer-public-api.svg?style=for-the-badge
[stars-url]: https://github.com/zaosoula/deezer-public-api/stargazers
[issues-shield]: https://img.shields.io/github/issues/zaosoula/deezer-public-api.svg?style=for-the-badge
[issues-url]: https://github.com/zaosoula/deezer-public-api/issues
[license-shield]: https://img.shields.io/github/license/zaosoula/deezer-public-api.svg?style=for-the-badge
[license-url]: https://github.com/zaosoula/deezer-public-api/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[product-screenshot]: images/screenshot.png
>>>>>>> Stashed changes
