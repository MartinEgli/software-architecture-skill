# Example DDD And Clean Architecture Review

## Input

Review service decomposition for an order management domain.

## Output Shape

- Domain: order capture, payment, fulfillment, return handling
- Bounded contexts: Ordering, Payment, Fulfillment, Returns
- Aggregates: Order, PaymentIntent, Shipment, ReturnRequest
- Domain events: OrderPlaced, PaymentAuthorized, ShipmentCreated
- Clean Architecture check: use cases separated from database and message bus
- Integration check: events need ownership, schema versioning, idempotency
- ADR candidates: async fulfillment, payment boundary, order state ownership
- Risks: distributed consistency, over-splitting, unclear customer data ownership
