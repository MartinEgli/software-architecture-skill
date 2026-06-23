# Evidence And Traceability

Use this reference whenever software architecture findings, diagrams, ADRs, or
recommendations depend on supplied inputs.

## Input Register

Track meaningful inputs by source type:

- User fact: stated directly by the user.
- Artifact: source file, project tree, diagram, API contract, schema, ADR, test,
  log, benchmark, or document supplied in the task.
- Tool result: command output, test result, build result, static analysis, query
  output, or generated report.
- External source: cited framework documentation, standard, architecture
  reference, or public source.
- Assumption: useful but unverified working premise.

## Traceability Rules

- Preserve project names, paths, APIs, schemas, commands, class names, service
  names, and error strings exactly.
- Tie each important design finding to code, an artifact, a tool result, a
  source, or an assumption.
- Do not infer production behavior from architecture preference alone.
- Mark missing runtime, workload, team ownership, and quality-attribute inputs
  as gaps.
- Keep decision trade-offs traceable to quality attributes or constraints.

## Evidence Receipt

For substantial outputs, include a compact receipt:

| Finding Or Decision | Source/Input | Type | Confidence | Gap Or Follow-up |
| --- | --- | --- | --- | --- |

Use `not supplied` when the input is missing. Use `assumption` when proceeding
with a working premise.

## Verification Pattern

Follow the small-loop pattern:

1. Locate relevant code, contracts, diagrams, tests, and constraints.
2. Make the smallest scoped design recommendation.
3. Verify the output against evidence, assumptions, quality attributes, and
   skill boundaries.

Avoid drive-by refactors and new abstractions unless they directly solve the
observed design problem.
