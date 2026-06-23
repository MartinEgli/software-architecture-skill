# Clean AI

Clean AI means AI-enabled software remains understandable, governable,
testable, observable, and accountable.

## Design Principles

- Separate AI responsibilities from deterministic business logic.
- Keep prompts, policies, tools, model calls, and evaluation artifacts
  versionable.
- Treat AI outputs as probabilistic until validated.
- Preserve data provenance and consent constraints.
- Define human override and escalation paths.
- Provide fallbacks for model failure, refusal, low confidence, and tool errors.
- Log decisions, inputs, outputs, and tool actions where privacy permits.
- Avoid hidden coupling between prompts and business-critical invariants.

## Checks

- What is the AI allowed to decide?
- What must remain deterministic?
- Which data can the AI see?
- How are prompts and tools versioned?
- How is output evaluated?
- What is the fallback?
- Who owns model, prompt, data, and risk?
- Which security or privacy review is needed?

Escalate high-risk AI governance and evidence questions to
`mournival-architecture`. Escalate security/privacy controls to
`enterprise-security-architecture`.
