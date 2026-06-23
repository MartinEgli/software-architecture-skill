# Integration Patterns

Review integration by:

- synchronous API vs asynchronous messaging
- event ownership
- contract ownership
- idempotency
- consistency model
- retries and failure handling
- versioning
- backward compatibility
- observability
- data ownership

Common risks:

- shared database between services
- unclear event semantics
- chatty APIs
- hidden coupling through payloads
- missing idempotency
- unbounded retries
- no contract tests
- no owner for breaking changes
