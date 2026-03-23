# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project follows [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.0] - 2026-03-23

### Added
- Added an interactive CLI prompt system to collect backend project setup details.
- Added prompts for project name, language selection, architecture style, package manager, and setup preferences.
- Added project name validation and automatic formatting to keep scaffold names package-safe.
- Added CLI build and distribution support through `tsup` and package `bin` configuration.

### Changed
- Updated the CLI flow from a startup placeholder to a prompt-driven configuration experience.
- Improved package metadata with description, author, license, keywords, distributable files, and executable command mapping.
- Added TypeScript path aliases to simplify internal imports across prompts, types, and utilities.

### Fixed
- Prevented invalid or empty project names from being accepted during setup.
- Normalized user-provided project names into kebab-case before generating the final config.

## [0.2.0] - 2026-03-19

### Added
- Added the initial TypeScript CLI project structure for `backforge`.
- Added a CLI entry file with centralized error handling and startup logging.
- Added development tooling with ESLint, Prettier, TypeScript configuration, and repository ignore rules.
- Added package scripts and dependency configuration for local CLI development.

### Changed
- Evolved the repository from a docs-only project into an executable CLI codebase foundation.
- Standardized formatting, linting, and project structure for future scaffold features.

## [0.1.0] - 2026-03-18

### Added
- Added the initial repository documentation and project description.
- Added the MIT license for project distribution and reuse.

[Unreleased]: https://github.com/vishal-jagamani/backforge/compare/99491863c7858eb179b5fe00807c85e868cfdb14...HEAD
[1.0.0]: https://github.com/vishal-jagamani/backforge/compare/c6a1f1d3d2f81829512f4055e34f2113581bf7b4...99491863c7858eb179b5fe00807c85e868cfdb14
[0.2.0]: https://github.com/vishal-jagamani/backforge/compare/12ab16178e9894622e3f24488e9b38f81864066f...c6a1f1d3d2f81829512f4055e34f2113581bf7b4
[0.1.0]: https://github.com/vishal-jagamani/backforge/commit/12ab16178e9894622e3f24488e9b38f81864066f
