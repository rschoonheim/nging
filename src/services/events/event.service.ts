import ServiceInterface from "../../interfaces/service.interface";
import {Channels} from "./channel/channels.service";
import type {Event} from "./event.types";

export default class EventService implements ServiceInterface{
    /**
     * @description Channels where events are broadcasted to.
     */
    private readonly channels: Channels = new Channels();

    async start(): Promise<void> {
        this.channels.register("input");
        this.channels.register("webgl");
    }

    /**
     * @description Subscribes to the given channel.
     *
     * @param {string} channel - The channel to subscribe to
     * @param {Function} callback - The callback to call when an event is published to the channel
     *
     * @returns {this}
     */
    subscribe(channel: string, callback: (event: Event) => void): this {
        this.channels.subscribe(channel, callback);
        return this;
    }

    /**
     * @description Broadcasts an event to the given channel.
     *
     * @param {string} channel - The channel to broadcast the event to
     * @param {Event} event - The event to broadcast
     *
     * @returns {this}
     */
    broadcast(channel: string, event: Event): this {
        this.channels.broadcast(channel, event);
        return this;
    }


}