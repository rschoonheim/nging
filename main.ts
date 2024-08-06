import {createCanvas} from "./src/html/canvas";
import Nging from "./src/nging";

const canvas = createCanvas("canvas");
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
    console.error(error);
});


