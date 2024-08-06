import type {Event} from "../event.types";
import {Channel} from "./channel.service";

// Define constants for errors that can occur in the Channels class.
//
export const CHANNEL_ERROR_BROADCAST_FAILED_CHANNEL_NOT_FOUND = `BROADCAST_FAILED_CHANNEL_NOT_FOUND`;

export class Channels {

    private readonly channels: Map<string, Channel> = new Map();

    /**
     * @description Registers a new channel with the given name.
     *
     * @param {string} channelName - The name of the channel to register
     *
     * @return {this}
     */
    public register(channelName: string): this {
        this.channels.set(channelName, new Channel(channelName));
        return this;
    }

    /**
     * @description Subscribes to the given channel.
     *
     * @param {string} channelName - The channel to subscribe to
     * @param {Function} callback - The callback to call when an event is published to the channel
     *
     * @return {this}
     */
    public subscribe(channelName: string, callback: (event: Event) => void): this {
        const channel = this.channels.get(channelName);
        if (!channel) {
            throw new Error(CHANNEL_ERROR_BROADCAST_FAILED_CHANNEL_NOT_FOUND);
        }
        channel.subscribe(callback);
        return this;
    }


    /**
     * @description Broadcasts an event to the given channel.
     *
     * @param {string} channelName - The channel to broadcast the event to
     * @param {Event} event - The event to broadcast
     *
     * @return {this}
     */
    public broadcast(channelName: string, event: Event): this {
        const channel = this.channels.get(channelName);
        if (!channel) {
            throw new Error(CHANNEL_ERROR_BROADCAST_FAILED_CHANNEL_NOT_FOUND);
        }
        channel.publish(event);
        return this;
    }

    public exists(channel: string) {
        return this.channels.has(channel);
    }
}