import type {Element} from "./element";
import {createElement} from "./element";

export type Canvas = {
    element: Element;
    dimensions: {
        width: number;
        height: number;
    };
}

/**
 * @description Creates a canvas object with the given id
 *
 * @param {string} id - The id of the canvas
 *
 * @returns {Canvas} - The canvas object
 */
export function createCanvas(id: string): Canvas {
    return {
        element: createElement(id),
        dimensions: {
            width: 0,
            height: 0,
        },
    } as Canvas;
}