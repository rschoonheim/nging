import ServiceInterface from "../../interfaces/service.interface";

export default class InputService implements ServiceInterface{
    async start(): Promise<void> {
        console.log("Input service started");
    }
}