import type {Canvas} from "./utilities/html/canvas";
import EventService from "./services/events/event.service";
import InputService from "./services/input/input.service";
import WebglService from "./services/webgl/webgl.service";
import ServiceInterface from "./interfaces/service.interface";

export default class Nging {
    /**
     * @description The canvas where we will draw on.
     * @type {Canvas}
     */
    private canvas: Canvas;

    /**
     * @description Collection of services running.
     * @type {Object}
     */
    private services: {
        events: EventService,
        input: InputService,
        webgl: WebglService,
    };

    constructor(canvas: Canvas) {
        this.canvas = canvas;
        this.services = {
            events: new EventService(),
            input: new InputService(),
            webgl: new WebglService(),
        }
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
        // Start services
        //
        const startServices = async () => {
            await this.services.events.start();
            await this.services.input.start();
            await this.services.webgl.start();
        }
        await startServices();

        return Promise.resolve();
    }

    /**
     * @description Render loop.
     */
    public async render(): Promise<void> {

        requestAnimationFrame(() => this.render());
    }

}