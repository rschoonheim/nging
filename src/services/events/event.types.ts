/**
 * @description The event type describes an event that occurred at some point in time in the system.
 */
export type Event = {
    type: string;
    priority: 1 | 2 | 3 | 4 | 5;
    payload: Payload;
    timestamp: number;
}

export type Payload = {
    [key: string]: any;
}

