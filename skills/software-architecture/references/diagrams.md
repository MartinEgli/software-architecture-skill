# Software Architecture Diagrams

Use this reference for `/sa diagram` or when the user asks for a software
architecture diagram.

## Scope

Create diagrams for software-level design:

- C4 system context, container, and component diagrams
- Clean Architecture layers, dependency direction, ports, adapters, and use
  cases
- module/package dependency diagrams
- API, event, and integration flows
- sequence diagrams for key runtime scenarios
- deployment/runtime diagrams when they affect software quality attributes
- data ownership and consistency boundary diagrams
- Clean AI workflow diagrams: prompt, model, tools, data, evaluation,
  observability, fallback, and human control

Hand enterprise capability, portfolio, or roadmap diagrams to
`enterprise-architecture`. Hand deep bounded-context, aggregate, and event
storming diagrams to `domain-driven-design`. Hand threat/control diagrams to
`enterprise-security-architecture`.

## Notation Choice

- Mermaid `flowchart` for boundaries, modules, Clean Architecture, and
  integration sketches.
- Mermaid `sequenceDiagram` for runtime interactions.
- Mermaid `classDiagram` only when the model is stable enough; avoid designing
  code prematurely.
- PlantUML sequence/component/deployment diagrams when the user requests
  PlantUML or wants architecture-as-code.
- C4 notation when audience needs system context, containers, components, and
  external dependencies.

## Diagram Rules

- Label responsibilities, ownership, dependency direction, and data boundaries.
- Show assumptions and unknowns instead of inventing flows.
- Keep diagrams at the right depth: one diagram per concern when needed.
- Do not use diagrams as a substitute for ADRs when a decision is still open.
- For Clean Architecture, dependencies point inward toward domain/use-case
  rules unless a local exception is explicitly justified.

## Output Pattern

1. State diagram purpose and abstraction level.
2. State notation used and why.
3. Provide diagram code.
4. Add boundary and dependency notes.
5. List assumptions, gaps, and ADR candidates.
