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

### Class Diagram
![event_system_structure.png](docs%2Fevent_system_structure.png)

#### Event Service
The `EventService` acts as a facade-like class that provides a easy-to-use interface to interact with the
event system. It is responsible for providing access to the following services:
- Registering channels
- Subscribing to channels
- Broadcasting events to channels

#### Channels Service
The `ChannelsService` acts as a collection of channels. It holds all the channels registered to the event system. 

**Note:** right now the `ChannelsService` does not introduce any new functionality making it a redundant class. Might
be removed in the future, might be kept for future extensibility.

#### Channel Service
The `ChannelService` is responsible for managing a single channel. It holds all the subscribers to the channel and
broadcasts events to them. 

When a event is broadcasted to a channel, the channel will put the events in a queue based on the priority of the event.
The channel will then process the events in the queue in order of their priority and in order of their arrival.

#### Subscription Service
Class for calling the callback function when an event is broadcasted to the channel.

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
