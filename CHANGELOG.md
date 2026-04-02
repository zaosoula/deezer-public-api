# Changelog

All notable changes to this project will be documented in this file.

## [2.1.2] - Modernization Era (2026-04-02)

This version represents a complete ground-up rewrite of the library to provide a modern, type-safe, and high-performance experience.

### ⚠️ BREAKING CHANGES

- **Namespace Safety**: All public-facing interfaces and types are now prefixed with `Deezer` to prevent naming collisions (e.g., `Album` → `DeezerAlbum`, `Track` → `DeezerTrack`).
- **Search Builder Rename**: The `SearchBuilder` class has been renamed to `DeezerSearchBuilder`.
- **API Entry Point**: The `DeezerClient` class is no longer directly exported for instantiation; use the `DeezerPublicApi` class instead. `DeezerClient` is now exported as a Type only.
- **Arguments Refactor**: All methods have been migrated from positional arguments to a single options object (e.g., `api.album({ id: '123' })`).
- **ESM Conversion**: The library is now ESM-first, utilizing native `fetch` and modern JavaScript features.

### 🚀 Features & Enhancements

- **TypeScript Engine**: Full TypeScript rewrite for 100% type safety and excellent developer experience (IntelliSense).
- **Native Fetch (Node 18+)**: Replaced `axios` and other HTTP dependencies with native `fetch` support.
- **Smart Pagination**: Introduced `.next()` and `.prev()` methods on paginated responses for effortless navigation.
- **Fluent Search Builder**: A powerful, chainable API for building complex search queries via `api.search.builder()`.
- **Custom Fetch Injection**: Support for custom `fetch` implementations, allowing for proxies, logging, or specialized headers.
- **Image Utilities**: Added `deezer.utils.changeImageSize()` for dynamic entity image resizing.
- **Version Awareness**: Static `VERSION` property on the main class and automated User-Agent reporting.

### 💅 Development & Infrastructure

- **Modern Build System**: Powered by `unbuild` for standard, optimized ESM/CJS distribution.
- **Testing Standard**: Entire test suite (160+ tests) standardized to verify both source and distribution bundles using Vitest.
- **Clean Architecture**: Refactored internal modules into a maintainable, extensible structure.

### 🩹 Fixes

- Fixed serialization of numeric parameters (e.g., ensuring `dur_min: 0` is correctly sent to the API).
- Standardized error handling with specialized `DeezerError`, `DeezerResponseError`, and `DeezerRateLimitError`.
- Improved rate limit handling with an internal queue to respect Deezer's 50 requests / 5 seconds threshold.
