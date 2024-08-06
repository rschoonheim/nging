import ServiceInterface from "../../interfaces/service.interface";
import {Channels} from "./channel/channels.service";
import type {Event} from "./event.types";
import Nging from "../../nging";

// Define constants for errors that can occur in the EventService class.
//
const EVENT_SERVICE_ERROR_CHANNEL_NAME_ALREADY_REGISTERED = `CHANNEL_NAME_ALREADY_REGISTERED`;

export default class EventService implements ServiceInterface{
    /**
     * @description Channels where events are broadcasted to.
     */
    private readonly channels: Channels = new Channels();

    async start(nging: Nging): Promise<void> {
        console.log("Event service started");
    }

    /**
     * @description Registers a new channel.
     *
     * @param {string} channelName - The channel to register
     *
     * @returns {this}
     */
    register(channelName: string): this {
        // Check if the channel is already registered
        //
        if (this.channels.exists(channelName)) {
            throw new Error(EVENT_SERVICE_ERROR_CHANNEL_NAME_ALREADY_REGISTERED);
        }

        this.channels.register(channelName);
        return this;
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