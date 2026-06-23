# Quality Attributes Reference

Use this reference for `/sa review` and whenever architecture quality trade-offs
drive the decision.

## Core Attributes

- Modifiability: how easily the system can change without broad regression.
- Testability: how design enables fast, reliable verification.
- Operability: how the system is deployed, observed, supported, and recovered.
- Reliability: how failures are isolated, retried, degraded, or recovered.
- Security: where confidentiality, integrity, availability, identity, and audit
  constraints affect design; hand detailed controls to
  `enterprise-security-architecture`.
- Performance and scalability: expected load, latency, throughput, bottlenecks,
  and capacity growth.
- Data consistency: transaction boundaries, eventual consistency, ownership, and
  conflict handling.
- Maintainability: cohesion, coupling, naming, size, duplication, dependency
  direction, and clarity.
- Evolvability: extension points, versioning, migration path, and avoidance of
  premature lock-in.

## Review Questions

- Which quality attributes are explicit requirements and which are assumptions?
- Which architectural decision improves one attribute while weakening another?
- Which trade-off needs an ADR?
- Which risk needs measurement, prototype, load test, security review, or
  operational rehearsal?
- Which concern belongs to enterprise, security, DDD, or Mournival governance
  instead of software architecture?

## Output Expectations

- Name the top quality attributes and rank them when possible.
- Tie findings to concrete components, boundaries, APIs, data ownership, or
  deployment/runtime choices.
- State trade-offs plainly.
- Identify missing evidence that could change the decision.
