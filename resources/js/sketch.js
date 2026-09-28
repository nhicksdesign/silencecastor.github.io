let canvas;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight, WEBGL);
    canvas.parent('preloader-container');
}

function draw() {
    background(256);
    circle(230);
}