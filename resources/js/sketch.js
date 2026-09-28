let canvas;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight, WEBGL);
    canvas.parent('preloader-container');
}

function draw() {
    background('#f6f6f6');
    circle('white');
}