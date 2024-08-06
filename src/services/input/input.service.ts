import ServiceInterface from "../../interfaces/service.interface";

export default class InputService implements ServiceInterface{
    start(): void {
        console.log("Input service started");
    }
}