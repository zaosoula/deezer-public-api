# Changelog

All notable changes to this project will be documented in this file.

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
