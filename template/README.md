# Templates

This directory contains project templates used by the CLI.

## Structure

templates/
<language>/
<architecture>/

Example:

- ts/functional
- ts/oop
- js/functional
- js/oop

## Notes

- Templates should contain static files only
- Use placeholders like {{projectName}} where needed
- No runtime logic inside templates
