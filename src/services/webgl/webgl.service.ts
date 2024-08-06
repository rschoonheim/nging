import ServiceInterface from "../../interfaces/service.interface";

export default class WebglService  implements ServiceInterface{
    start(): void {
        console.log("Webgl service started");
    }
}