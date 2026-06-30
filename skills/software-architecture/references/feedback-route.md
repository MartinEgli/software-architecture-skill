# Feedback Route

Use this file to capture lessons without turning one-off feedback into hidden
behavior.

## Loop

1. Capture feedback from the user, task outcome, tool output, or review.
2. Classify it as evidence, inference, assumption, gap, rejected, deferred, or
   routed.
3. Decide whether the skill, template, examples, references, tests, README, or
   another skill should change.
4. Create an improvement proposal before editing behavior.
5. Validate the change with the repo checks.
6. Commit on a feature branch and push.

## Classification

| Type | Meaning | Action |
| --- | --- | --- |
| Evidence | Supported by user input, repo file, tool result, or cited source | May justify a change |
| Inference | Reasoned conclusion from evidence | Mark reasoning explicitly |
| Assumption | Useful but not verified | Do not make permanent without validation |
| Gap | Missing input that may change behavior | Capture as open question or test case |
| Rejected | Considered but intentionally not applied | Record reason |
| Deferred | Useful but not in current scope | Put in backlog |
| Routed | Belongs to another skill or repo | Name the owner |

## Rules

- Do not silently rewrite skill behavior from a single conversation.
- Do not treat model output as ground truth.
- Preserve exact user facts, file paths, commands, source labels, and examples.
- Add or update examples and tests when feedback changes expected behavior.
- Update changelog or version when the change affects released behavior.