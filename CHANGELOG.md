# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project follows [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.0] - 2026-03-26

### Added
- Added an interactive CLI prompt system to collect backend project setup details.
- Added prompts for project name, language selection, architecture style, package manager, and setup preferences.
- Added project name validation and automatic formatting to keep scaffold names package-safe.
- Added CLI build and distribution support through `tsup` and package `bin` configuration.
- Added a reusable project template structure under `template/` for generated backend apps.
- Added a TypeScript functional backend starter template with Express, environment loading, health check routing, and a sample module.
- Added starter project config files for generated apps, including `package.json`, `tsconfig.json`, ESLint, Prettier, `.gitignore`, and environment files.
- Added placeholder template directories for future `ts/oop`, `js/functional`, and `js/oop` variants.
- Added generator utilities to resolve templates, copy template files, and replace template placeholders during project creation.
- Added dependency-installation support during project generation based on the selected package manager.
- Added a generator helper to run `npm`, `pnpm`, or `yarn` install inside the generated project directory.
- Added a CLI success state with next-step guidance after project generation completes.
- Added `chalk` for improved terminal output formatting.

### Changed
- Updated the CLI flow from a startup placeholder into an end-to-end scaffold generation experience.
- Improved package metadata with description, author, license, keywords, distributable files, and executable command mapping.
- Added TypeScript path aliases to simplify internal imports across prompts, types, and utilities.
- Expanded `backforge` from CLI-only setup toward scaffold generation by introducing reusable template assets.
- Documented the template directory convention and placeholder usage in `template/README.md`.
- Improved the post-generation UX by showing the project location and suggested follow-up commands.
- Updated project generation to optionally install dependencies automatically after template copy and placeholder replacement.
- Adjusted the success banner formatting to print a cleaner completion message in the CLI.
- Simplified setup preferences to focus on dependency installation and removed the Git initialization prompt/config field from the current flow.

### Fixed
- Prevented invalid or empty project names from being accepted during setup.
- Normalized user-provided project names into kebab-case before generating the final config.
- Prevented generation into an already existing target directory by failing early with a clear error.
- Replaced template placeholders across copied text files so generated project files use the selected project name.
- Added a graceful fallback when dependency installation fails so generation can still complete and the user gets manual next steps.
- Simplified the existing-directory error message to reference the requested project name directly.

## [0.3.0] - 2026-03-23

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
