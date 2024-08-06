import type {Canvas} from "./html/canvas";

export default class Nging {
    /**
     * @description The canvas where we will draw on.
     * @type {Canvas}
     */
    private canvas: Canvas;

    constructor(canvas: Canvas) {
        this.canvas = canvas;
    }

    /**
     * @description Updates the canvas dimensions.
     *
     * @param {number} width
     * @param {number} height
     *
     * @returns {this}
     */
    public canvasSetDimensions(width: number, height: number): this {
        this.canvas.dimensions.width = width;
        this.canvas.dimensions.height = height;

        this.canvasStyle("width", `${width}px`);
        this.canvasStyle("height", `${height}px`);

        return this;
    }

    /**
     * @description Modify the canvas style.
     *
     * @param {string} property
     * @param {string} value
     *
     * @returns {this}
     */
    public canvasStyle(property: string, value: string): this {
        // @ts-ignore
        this.canvas.element.style[property] = value as string;

        return this;
    }

    /**
     * @description Start nging processes.
     */
    public async start(): Promise<void> {
        return Promise.resolve();
    }

    /**
     * @description Render loop.
     */
    public async render(): Promise<void> {
        requestAnimationFrame(() => this.render());
    }

}