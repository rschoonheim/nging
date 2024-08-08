# Nging - A simple game engine for Javascript

Nging, pronounced like `ngin` `g` like `nginx`, is a simple game engine for javascript.

# Documentation

## Table of Contents

- [Event System](#event-system)

# Event System
The event system is a fundamental part of nging. It allows us to create interactive behaviors between different things in
games. 

### Table of Contents
- [How the event system works](#how-the-event-system-works)
- [How to use the event system](#how-to-use-the-event-system)
    - [Resolving the event system in your game objects](#resolving-the-event-system-in-your-game-objects)

## How the event system works
In this section, we dive into the inner workings of the event system.

## How to use the event system  
In this section, we will learn how to use the event system effectively in your game objects.

### Resolving the event system in your game objects
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
