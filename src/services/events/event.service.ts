import ServiceInterface from "../../interfaces/service.interface";

export default class EventService implements ServiceInterface{
    start(): void {
        console.log("Event service started");
    }
}