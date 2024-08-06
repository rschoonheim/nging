import ServiceInterface from "../../interfaces/service.interface";

export default class WebglService  implements ServiceInterface{
    async start(): Promise<void> {
        console.log("Webgl service started");
    }
}