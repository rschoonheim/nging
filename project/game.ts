import {createCanvas} from "../src/utilities/html/canvas";
import Nging from "../src/nging";

// Define properties for nging.
//
const canvas = createCanvas("canvas");
if (!canvas) {
    throw new Error("Canvas could not be created.");
}
const nging = new Nging(canvas);



// Canvas setup
//
nging.canvasSetDimensions(800, 600);
nging.canvasStyle("backgroundColor", "#2f2f2f");

// Start nging processes, except rendering.
//
nging.start().then(() => {
    // Nging processes were started successfully,
    // start rendering.
    //
    nging.render();
}).catch((error: any) => {
    // Starting nging processes has failed,
    // log the error.
    console.error(error);
});
