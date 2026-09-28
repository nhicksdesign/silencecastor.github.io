let canvas;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight, WEBGL);
    canvas.parent('preloader-container');
}

function draw() {
    background(256);

    fill(255, 204, 0);
    circle(50, 50, 250);
}