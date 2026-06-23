# Maintainer Instructions

## Source Of Truth

- `skills/example-skill/SKILL.md` defines behavior.
- `skills/example-skill/references/` explains method and terms.
- `skills/example-skill/assets/` contains reusable output structures.
- `skills/example-skill/examples/` shows expected outputs.
- `templates/` defines generated starter files.

## Do Not Edit Generated Output

Do not hand-edit files under `dist/`. Regenerate them with:

```powershell
npm run package
```

## Before Commit

Run:

```powershell
npm run validate
npm run test
```

## Adding A Skill

Use:

```powershell
npm run scaffold -- new-skill-name
```

Then update:

- `SKILL.md`
- `README.md`
- reference files
- examples
- assets

## Skill Writing Rules

- Keep behavior in `SKILL.md`.
- Keep supporting method in references.
- Keep examples realistic and concise.
- Avoid hidden rules in README files.
- Use exact terms for APIs, standards, commands, and error strings.
- State boundaries clearly.
- Prefer short mandatory rules over broad advice.

## Release Rules

- Update `CHANGELOG.md`.
- Run validation and tests.
- Package with `npm run package`.
- Tag with semantic versioning once the template is stable.
