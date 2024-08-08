# Nging - A simple game engine for Javascript

Nging, pronounced like `ngin` `g` like `nginx`, is a simple game engine for javascript.

## Documentation

### Table of Contents

- [Event System](#event-system)

## Event System

### Using the event system
Define the `resolveDependencies` hook in your class and add the `EventService` class as a dependency.

**Example**
```typescript
import EventService from "./event.service";

class Example {
    private events: EventService;

    resolveDependencies(container) {
        this.events = container.get(EventService);
    }
}
```
