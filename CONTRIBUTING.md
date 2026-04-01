# Contributing to Deezer Public API

First off, thank you for considering contributing to `deezer-public-api`!

## Development Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Build the project: `npm run build`
4. Run tests: `npm test`

## Project Structure

- `src/`: Core library logic
  - `modules/`: Individual Deezer API resource wrappers
  - `types/`: TypeScript definitions
- `test/`: Unit and integration tests
- `docs/`: Docus documentation site

## Syncing Documentation

Web documentation is partially automated. If you change a TypeScript interface in `src/types/index.ts`, run:

```bash
npm run sync-docs
```

To update JSON response examples from the live API:

```bash
npm run update-fixtures
npm run sync-docs
```

## Pull Request Guidelines

- Ensure all tests pass.
- Update documentation if you add or change an endpoint.
- Use [Conventional Commits](https://www.conventionalcommits.org/).
