# Changelog

All notable changes to this project will be documented in this file.

## v2.1.2

[compare changes](https://github.com/zaosoula/deezer-public-api/compare/v2.1.1...v2.1.2)

### 💅 Refactors

- Prefix all public types with Deezer ([101bf1e](https://github.com/zaosoula/deezer-public-api/commit/101bf1e))
- Apply Deezer prefix across all modules and core ([21c6ba8](https://github.com/zaosoula/deezer-public-api/commit/21c6ba8))

### 🏡 Chore

- Use correct command to create github release ([cd045fd](https://github.com/zaosoula/deezer-public-api/commit/cd045fd))
- Optimize build and release workflow ([1ea8515](https://github.com/zaosoula/deezer-public-api/commit/1ea8515))

### ✅ Tests

- Standardize all imports to use @lib alias ([2be60af](https://github.com/zaosoula/deezer-public-api/commit/2be60af))
- Refactor client tests to use DeezerPublicApi ([64f79ed](https://github.com/zaosoula/deezer-public-api/commit/64f79ed))

### ❤️ Contributors

- Zao Soula ([@zaosoula](https://github.com/zaosoula))

## v2.1.1

[compare changes](https://github.com/zaosoula/deezer-public-api/compare/v2.1.0...v2.1.1)

### 🏡 Chore

- Upgrade actions nodejs version ([b0f5ce5](https://github.com/zaosoula/deezer-public-api/commit/b0f5ce5))
- Upgrade all dev-deps ([8bccfe0](https://github.com/zaosoula/deezer-public-api/commit/8bccfe0))
- Install deps with --legacy-peer-deps ([fa75be3](https://github.com/zaosoula/deezer-public-api/commit/fa75be3))

### ❤️ Contributors

- Zao Soula ([@zaosoula](https://github.com/zaosoula))

## v2.1.0

[compare changes](https://github.com/zaosoula/deezer-public-api/compare/v2.0.0...v2.1.0)

### 🚀 Enhancements

- **search:** Add supports for index and limit parameters ([834911d](https://github.com/zaosoula/deezer-public-api/commit/834911d))
- **resolve:** Add supports for short-urls ([81371e2](https://github.com/zaosoula/deezer-public-api/commit/81371e2))
- Implement version helper and update vitest configuration to inject package version via environment variables ([49a024b](https://github.com/zaosoula/deezer-public-api/commit/49a024b))

### 🩹 Fixes

- Pass 0 value parameters into request ([e9fd84c](https://github.com/zaosoula/deezer-public-api/commit/e9fd84c))

### 💅 Refactors

- Inject version at build time ([4d5c643](https://github.com/zaosoula/deezer-public-api/commit/4d5c643))

### 🏡 Chore

- Unify release workflows and add manual trigger support ([c90135a](https://github.com/zaosoula/deezer-public-api/commit/c90135a))
- Configure Dependabot ([bed0d2c](https://github.com/zaosoula/deezer-public-api/commit/bed0d2c))
- Bump the all-actions group across 1 directory with 4 updates ([#15](https://github.com/zaosoula/deezer-public-api/pull/15))
- Configure git user identity for release workflow ([bf66f10](https://github.com/zaosoula/deezer-public-api/commit/bf66f10))

### ❤️ Contributors

- Zao Soula ([@zaosoula](https://github.com/zaosoula))

## [2.0.0](https://github.com/zaosoula/deezer-public-api/compare/v1.0.5...v2.0.0) (2026-04-01)


### ⚠ BREAKING CHANGES

* finalize v2.0.0 migration

### Features

* finalize v2.0.0 migration ([b3bbca9](https://github.com/zaosoula/deezer-public-api/commit/b3bbca9e717fc5855fd813628b3900f103afe044))

## [2.0.0] - 2026-04-01

### Added
- Complete **TypeScript rewrite** from the ground up for full type safety.
- Native `fetch` support (Node 18+), eliminating the need for heavy HTTP dependencies.
- **Object-based Arguments**: All methods now use named objects (e.g., `deezer.track({ id })`), providing better ergonomics and future-proofing.
- **Custom Fetch Injection**: Developers can now provide their own `fetch` implementation (useful for proxies or custom headers).
- **Image Resizing Utility**: `deezer.utils.changeImageSize()` to dynamically resize Deezer entity images.
- **Automated Reputation Tracking**: Standardized `User-Agent` prefix to help Deezer identify library versions and mitigate bad actors.
- **User Module**: Access public user profiles, playlists, and flow.
- **Search Module**: Expanded search with a fluent `SearchBuilder` and specialized methods.
- **Docus Documentation**: New high-performance documentation website with automatic schema sync.
- 100% test coverage for all core logic.

### Changed
- **Breaking**: Migrated all API signatures to accept a single options object instead of positional arguments.
- **Breaking**: Migrated from CommonJS to ESM-first dual build.
- **Breaking**: Renamed main class to `DeezerPublicApi`.
- Rate limiting now handles Deezer's 50 requests / 5 seconds rule using an internal queue.
- Unified response wrapping for consistent pagination across all modules.

### Fixed
- Improved error handling with specialized `DeezerError`, `DeezerResponseError`, and `DeezerRateLimitError` classes.
- Corrected pagination logic for nested endpoints (e.g., `album.tracks`).
- Fixed missing metadata fields in several entity interfaces.
