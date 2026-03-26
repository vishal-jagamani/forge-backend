# Backforge

Backforge is a CLI for scaffolding backend projects with an opinionated structure, practical defaults, and minimal setup.

Version `1.0.0` currently supports generating a TypeScript functional backend starter from interactive prompts.

## Features

- Interactive CLI prompt flow for project setup
- Project name validation and normalization
- Template-based project generation
- TypeScript functional backend starter template
- Optional dependency installation after generation
- Ready-to-run Express starter with env config, health route, and sample module

## Current Support

Backforge currently supports:

- Language: `TypeScript`
- Architecture: `Functional`
- Package managers: `pnpm`, `npm`

Planned template structure:

- `ts/functional`
- `ts/oop`
- `js/functional`
- `js/oop`

## Installation

Install dependencies for this project:

```bash
pnpm install
```

Run the CLI locally:

```bash
pnpm dev
```

Build the CLI:

```bash
pnpm build
```

## Usage

Start the CLI:

```bash
pnpm dev
```

Or pass a default project name:

```bash
pnpm dev my-backend-app
```

The CLI will guide you through:

- project name
- language selection
- architecture selection
- package manager selection
- dependency installation preference

After confirmation, Backforge will:

1. Resolve the matching template.
2. Create the target project directory.
3. Copy template files into the new project.
4. Replace placeholders like `{{projectName}}`.
5. Optionally install dependencies.
6. Print next-step commands for running the generated app.

## Generated Project

The current starter template includes:

- Express app bootstrap
- environment config with `dotenv`
- `/api/health` route
- sample module with controller, service, and routes
- TypeScript, ESLint, and Prettier setup
- starter `.env` and `.env.example`

## Example Flow

```text
$ pnpm dev my-service
? Project name: my-service
? Select language: TypeScript
? Select architecture style: Functional
? Select package manager: pnpm
? Install dependencies? Yes
```

Output:

```text
Project created successfully!
Location: /path/to/my-service

Next steps:
  cd my-service
  pnpm run dev
```

## Project Structure

```text
src/
  cli.ts
  constants/
  generator/
  prompts/
  types/
  utils/
template/
  ts/
    functional/
```

## Development

Useful commands:

```bash
pnpm dev
pnpm build
```

Generated template docs live in:

- `template/README.md`

Project reference docs:

- `CHANGELOG.md`
- `CODEBASE_INDEX.md`

## Notes

- The current release focuses on the TypeScript functional starter.
- `ts/oop`, `js/functional`, and `js/oop` folders exist as placeholders for future templates.
- If dependency installation fails, Backforge still finishes generation and prints manual install commands.

## License

MIT
