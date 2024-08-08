import ServiceInterface from "../../interfaces/service.interface";
import Nging from "../../nging";
import EventService from "../events/event.service";
import type {Event as channelEvent} from "../events/event.types";

export default class InputService implements ServiceInterface {
    private eventService: EventService | null = null;

    // Keyboard event properties
    //
    public readonly keyboardEventChannel: string = "keyboard";

    // Mouse event properties
    //
    public readonly mouseEventChannel: string = "mouse";

    async start(nging: Nging): Promise<void> {
        this.eventService = nging.events();
        this.eventService.register(this.keyboardEventChannel);
        this.eventService.register(this.mouseEventChannel);
        window.addEventListener("keydown", this.handleKeydown.bind(this));

        nging.addCanvasEventListener("mousemove", this.handleMousemove.bind(this));
        nging.addCanvasEventListener("wheel", this.handleWheel.bind(this));

        console.log("Input service started");
    }

    handleWheel(event: Event): void {
        if (this.eventService === null) {
            throw new Error("Event service not initialized");
        }

        this.eventService.broadcast(this.mouseEventChannel, {
            priority: 1,
            type: "input",
            payload: {
                deltaY: (event as WheelEvent).deltaY,
            },
            timestamp: Date.now(),
        } as channelEvent);
    }


    handleMousemove(event: Event): void {
        if (this.eventService === null) {
            throw new Error("Event service not initialized");
        }

        // Get coordinates in parent element
        //
        const rect = (event.target as HTMLElement).getBoundingClientRect();
        const x = (event as MouseEvent).clientX - rect.left;
        const y = (event as MouseEvent).clientY - rect.top;

        this.eventService.broadcast(this.mouseEventChannel, {
            priority: 1,
            type: "input",
            payload: {
                x: x,
                y: y,
            },
            timestamp: Date.now(),
        } as channelEvent);
    }

    handleKeydown(event: Event): void {
        if (this.eventService === null) {
            throw new Error("Event service not initialized");
        }

        this.eventService.broadcast(this.keyboardEventChannel, {
            priority: 1,
            type: "input",
            payload: {
                key: (event as KeyboardEvent).key,
            },
            timestamp: Date.now(),
        } as channelEvent);
    }
}