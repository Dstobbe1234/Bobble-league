const cnv = document.getElementById("cnv")
const ctx = cnv.getContext("2d")
cnv.width = 1000
cnv.height = 1000

const frictionCoeff = 0.5;

let mouse = {
    x:0,
    y:0,
}

document.addEventListener("mousemove", mousemoveListener);

function mousemoveListener(event) {
    mouse.x = event.x - cnv.getBoundingClientRect().x;
    mouse.y = event.y - cnv.getBoundingClientRect().y;
}

class bobble {
    constructor(x, y, v, d, m) {

    }
}