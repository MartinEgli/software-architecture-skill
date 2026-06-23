# Clean Architecture

Use Clean Architecture when the system needs strong separation between domain,
use cases, interface adapters, and infrastructure.

## Dependency Rule

Dependencies should point inward toward business rules. Inner layers should not
depend on outer-layer details such as databases, UI frameworks, message brokers,
or external APIs.

## Typical Layers

- Entities or domain model
- Use cases or application services
- Interface adapters, controllers, presenters, gateways
- Frameworks, database, UI, messaging, external systems

## Checks

- Are business rules isolated from infrastructure?
- Can use cases be tested without database or framework?
- Are ports/interfaces owned by inner layers?
- Are adapters replaceable?
- Are dependencies inverted where needed?
- Is complexity justified by change pressure?

## Warning

Do not create ceremony for small or simple systems. Clean Architecture is useful
when boundaries and independent testability matter.
