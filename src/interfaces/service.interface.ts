import Nging from "../nging";

export default interface ServiceInterface {
    start(nging: Nging): void;
}