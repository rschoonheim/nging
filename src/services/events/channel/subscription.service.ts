import type {Event} from "../event.types";

export class Subscription {
    private readonly callback: (event: Event) => void;

    constructor(callback: (event: Event) => void) {
        this.callback = callback;
    }

    public publish(event: Event): void {
        this.callback(event);
    }
}