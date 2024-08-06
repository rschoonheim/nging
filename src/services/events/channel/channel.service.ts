import type {Event} from "../event.types";
import {Subscription} from "./subscription.service";

export class Channel {
    private readonly name: string;

    /**
     * @description Subscriptions on this channel.
     */
    private readonly subscriptions: Subscription[] = [];

    private queueState: "running" | "stopped" = "stopped";

    /**
     * @description Message queue for this channel.
     */
    private messageQueue: Event[][] = [];

    constructor(name: string) {
        this.name = name;

        this.messageQueue[1] = [];
        this.messageQueue[2] = [];
        this.messageQueue[3] = [];
        this.messageQueue[4] = [];
        this.messageQueue[5] = [];

        // Start the event queue processor.
        this.queueState = "running";
        this.queueProcessor();
    }

    /**
     * @description Dispatches the event to all subscribers in the channel.
     */
    private async queueProcessor() {
        while (this.queueState === "running") {
            for (let i = 1; i <= 5; i++) {
                if (this.messageQueue[i].length > 0) {
                    const event = this.messageQueue[i].shift();
                    if (!event) {
                        continue;
                    }

                    this.subscriptions.forEach(subscription => {
                        subscription.publish(event);
                    });
                }
            }
            await new Promise(resolve => setTimeout(resolve, 0));
        }
    }

    /**
     * @description Subscribes to the channel.
     *
     * @param {Function} callback - The callback to call when an event is published to the channel
     *
     * @returns {this}
     */
    public subscribe(callback: (event: Event) => void): this {
        this.subscriptions.push(new Subscription(callback));
        return this;
    }

    publish(event: Event) {
        this.messageQueue[event.priority].push(event);
    }
}