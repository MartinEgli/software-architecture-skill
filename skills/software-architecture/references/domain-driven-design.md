# Domain-Driven Design

Use DDD when domain complexity, language, ownership, or service boundaries are
central.

## Strategic DDD

- domain
- subdomain
- core domain
- supporting domain
- generic domain
- bounded context
- ubiquitous language
- context map
- upstream/downstream relationship

## Tactical DDD

- aggregate
- entity
- value object
- domain service
- domain event
- repository
- invariant

## Checks

- Does each bounded context have clear language?
- Does each aggregate protect a real invariant?
- Are services split by domain boundary instead of technical layer only?
- Are domain events named from business facts?
- Is data ownership clear?
- Are integration contracts explicit?

Do not force DDD when CRUD or simple workflow is sufficient.
