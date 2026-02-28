import fs from 'fs';
import path from 'path';
import { DeezerPublicApi } from '../src/index.ts';

const FIXTURES_DIR = path.resolve('test/fixtures');

if (!fs.existsSync(FIXTURES_DIR)) {
  fs.mkdirSync(FIXTURES_DIR, { recursive: true });
}

async function generate() {
  const deezer = new DeezerPublicApi();

  console.log('Generating fixtures...');

  const tasks = [
    { name: 'infos', fn: () => deezer.infos() },
    { name: 'options', fn: () => deezer.options() },
    { name: 'album', fn: () => deezer.album({ id: 302127 }) },
    { name: 'artist', fn: () => deezer.artist({ id: 27 }) },
    { name: 'user', fn: () => deezer.user({ id: 2529 }) },
    { name: 'track', fn: () => deezer.track({ id: 3135556 }) },
    { name: 'playlist', fn: () => deezer.playlist({ id: 908622995 }) },
    { name: 'search', fn: () => deezer.search({ q: "Daft Punk", limit: 1 }) },
    { name: 'chart', fn: () => deezer.chart() },
    { name: 'editorial', fn: () => deezer.editorial({ id: 0 }) },
    { name: 'genre', fn: () => deezer.genre({ id: 132 }) },
    { name: 'radio', fn: () => deezer.radio({ id: 6 }) },
    { name: 'podcast', fn: () => deezer.podcast({ id: 5777017 }) },
    { name: 'episode', fn: () => deezer.episode({ id: 489738067 }) },
  ];

  for (const task of tasks) {
    try {
      const data = await task.fn();
      fs.writeFileSync(path.join(FIXTURES_DIR, `${task.name}.json`), JSON.stringify(data, null, 2));
      console.log(`✓ ${task.name} generated`);
    } catch (e) {
      console.error(`✗ ${task.name} failed:`, e instanceof Error ? e.message : e);
    }
  }

  // Specialized searches for docs
  const searchTasks = [
    { name: 'search-artist', fn: () => deezer.search.artist({ q: 'Daft Punk', limit: 1 }) },
    { name: 'search-album', fn: () => deezer.search.album({ q: 'Discovery', limit: 1 }) },
    { name: 'search-playlist', fn: () => deezer.search.playlist({ q: 'Daft Punk', limit: 1 }) },
    { name: 'search-podcast', fn: () => deezer.search.podcast({ q: 'Daft Punk', limit: 1 }) },
    { name: 'search-radio', fn: () => deezer.search.radio({ q: 'Daft Punk', limit: 1 }) },
    { name: 'search-user', fn: () => deezer.search.user({ q: 'guillaume', limit: 1 }) },
  ];

  for (const task of searchTasks) {
    try {
      const data = await task.fn();
      fs.writeFileSync(path.join(FIXTURES_DIR, `${task.name}.json`), JSON.stringify(data, null, 2));
      console.log(`✓ ${task.name} generated`);
    } catch (e) {
      console.error(`✗ ${task.name} failed:`, e instanceof Error ? e.message : e);
    }
  }

  console.log('Fixtures generation complete!');
}

generate().catch(console.error);
