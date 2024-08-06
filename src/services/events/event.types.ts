/**
 * @description The event type describes an event that occurred at some point in time in the system.
 */
export type Event = {
    priority: 1 | 2 | 3 | 4 | 5;
    timestamp: number;
    type: string;
}

