import type {Canvas} from "./utilities/html/canvas";
import EventService from "./services/events/event.service";
import InputService from "./services/input/input.service";
import WebglService from "./services/webgl/webgl.service";
import ServiceContainer from "./serviceContainer";

export default class Nging {

    /**
     * @description List of services that will be registered by default.
     * @type {{[key: string]: any}}
     */
    private readonly defaultServices: {[key: string]: any} = {
        "events": EventService,
        "input": InputService,
        "webgl": WebglService
    }

    /**
     * @description Service Container
     * @type {ServiceContainer}
     */
    private readonly services: ServiceContainer = new ServiceContainer();

    /**
     * @description The canvas where we will draw on.
     * @type {Canvas}
     */
    private canvas: Canvas;

    constructor(canvas: Canvas) {
        this.canvas = canvas;
        this.registerDefaultServices();
    }

    private registerDefaultServices(): void {
        for (const [name, service] of Object.entries(this.defaultServices)) {
            this.services.add(name, this.services.make(service));
        }
    }

    public events(): EventService {
        return this.services.get("events") as EventService;
    }

    public input(): InputService {
        return this.services.get("input") as InputService;
    }

    public webgl(): WebglService {
        return this.services.get("webgl") as WebglService;
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

    public async start(): Promise<void> {
        // Start services
        //
        const startServices = async () => {
            await this.services.get("events").start(this);
            await this.services.get("input").start(this);
            await this.services.get("webgl").start(this);
        }
        await startServices();

        return Promise.resolve();
    }

    public async render(): Promise<void> {

        requestAnimationFrame(() => this.render());
    }

    public addCanvasEventListener(mousemove: string, handleMousemove1: OmitThisParameter<(event: Event) => void>) {
        this.canvas.element.html.addEventListener(mousemove, handleMousemove1);
    }
}