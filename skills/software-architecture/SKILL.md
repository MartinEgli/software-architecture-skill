---
name: software-architecture
description: >
  Software Architecture skill for system and service design, Domain-Driven
  Design, bounded contexts, Clean Architecture, Clean Coding review, ADRs,
  integration patterns, API and data ownership, quality attributes, deployment
  risks, modularity, maintainability, and Clean AI design for AI-enabled
  software systems.
---

# Software Architecture

## Purpose

Design and review software systems so domain boundaries, architecture decisions,
quality attributes, code structure, integration, and AI responsibilities remain
clear, testable, and maintainable.

## When to Use

Use when the user asks for:

- software or service architecture
- Domain-Driven Design
- bounded contexts or context maps
- Clean Architecture boundaries
- Clean Coding review
- ADRs
- API and integration design
- data ownership and module boundaries
- quality attributes
- AI-enabled software design

## Do Not Use When

Do not use for enterprise portfolio, capability, and roadmap work unless the
task is about concrete software systems. Use `enterprise-architecture` for EA.

Do not use for detailed security control approval. Use
`enterprise-security-architecture` for security architecture.

Do not use for deep DDD modeling when the main output is a context map,
subdomain classification, aggregate model, event storming summary, or
ubiquitous language glossary. Use `domain-driven-design` for that.

## Mandatory Rules

- Start from domain, use case, quality attributes, and constraints.
- Separate domain model, application/use-case layer, infrastructure, and UI/API
  boundaries when using Clean Architecture.
- Separate strategic DDD from tactical DDD.
- Preserve user-provided names, APIs, commands, schemas, and constraints.
- Mark assumptions and missing inputs.
- Tie recommendations to coupling, cohesion, changeability, testability,
  operability, and business value.
- Do not invent system behavior, ownership, compliance duties, or production
  facts.
- Escalate security-specific findings to `enterprise-security-architecture`.
- Escalate enterprise roadmap and capability questions to
  `enterprise-architecture`.

## Inputs Expected

- domain or business process
- use cases
- existing system or code structure
- APIs/events/data model
- quality attributes
- constraints
- team ownership
- deployment/runtime context
- AI model, prompt, data, or agent responsibilities when AI is involved

## Modes

### /sa design

Create software architecture from goals, constraints, quality attributes, and
known domain boundaries. Read `references/software-architecture-method.md`.

### /sa review

Review service or system architecture for coupling, cohesion, boundaries,
data ownership, quality attributes, and delivery risk.

### /sa ddd

Do a lightweight DDD check for software architecture. For deep domain modeling,
handoff to `domain-driven-design`. Read `references/domain-driven-design.md`.

### /sa clean-architecture

Review or design Clean Architecture layers, dependency rules, use cases,
ports/adapters, and infrastructure isolation. Read
`references/clean-architecture.md`.

### /sa clean-coding

Review code structure and design hygiene: naming, size, duplication, tests,
side effects, error handling, dependency direction, and maintainability. Read
`references/clean-coding.md`.

### /sa clean-ai

Review AI-enabled software for clean AI boundaries, data provenance, prompt and
model responsibilities, evaluation, observability, fallback, and human control.
Read `references/clean-ai.md`.

### /sa adr

Prepare or review an architecture decision record. Read `references/adr.md`.

### /sa integration

Review APIs, events, messaging, consistency, contract ownership, and integration
risks. Read `references/integration-patterns.md`.

## Evidence Handling

- Evidence: supplied code, diagram, API contract, ADR, schema, log, inventory,
  or explicit user fact.
- Inference: reasoned conclusion from evidence.
- Assumption: useful but unverified.
- Gap: missing input that can change architecture decision.

## Output Contracts

Use `assets/templates/software-architecture-output.md` unless user asks for
another format.

## Quality Gates

- Domain and use cases are explicit.
- Boundaries and ownership are visible.
- Dependencies point in a deliberate direction.
- Quality attributes are addressed.
- Data ownership is explicit.
- Risks and assumptions are visible.
- ADR or decision need is explicit.
- Clean AI concerns are separated when AI behavior is involved.

## Boundaries

- Do not replace security, legal, compliance, or production approval.
- Do not over-apply Clean Architecture when simple modular design is enough.
- Do not turn DDD into ceremony when domain complexity is low.
- Do not treat AI output as source of truth without evidence and evaluation.

## Output Style

- Structured, practical, design-oriented.
- Use diagrams only when requested or easy to express as text.
- Prefer concrete boundaries, responsibilities, decisions, and next steps.
