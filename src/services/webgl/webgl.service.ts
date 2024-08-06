import ServiceInterface from "../../interfaces/service.interface";
import Nging from "../../nging";

export default class WebglService  implements ServiceInterface{
    async start(nging: Nging): Promise<void> {
        console.log("Webgl service started");
    }
}