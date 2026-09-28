let canvas;
let myFilter;


function setup() {
    canvas = createCanvas(windowWidth, windowHeight, WEBGL);
    myFilter = buildFilterShader(noiseShaderCallback);
    canvas.parent('preloader-container');
}

function noiseShaderCallback() {
  let time = millis();
  filterColor.begin();
  let coord = filterColor.texCoord;

  // Set the gap between the color channels (experiment with this value!)
  let delayAmount = 0.05; 

  // 1. Sample the noise at 3 different time steps to create the lag
  let noiseR = noise(coord.x, coord.y, (time / 5000) - delayAmount * 3);
  let noiseG = noise(coord.x, coord.y, (time / 5000) - delayAmount * 2);
  let noiseB = noise(coord.x, coord.y, (time / 5000) - delayAmount);

  // 2. Map each channel's noise value individually 
  // (using your original color mixing logic for each channel)
  let r = mix(1, 0, noiseR);
  let g = mix(1, 0, noiseG);
  let b = mix(1, 0, noiseB);

  // 3. Set the final composited color (keeping Alpha fully opaque at 1)
  filterColor.set([r, g, b, 1]);
  filterColor.end();
}

function setupAsciify() {
  // Fetch relevant objects from the library
  asciifier = p5asciify.asciifier();
  brightnessRenderer = asciifier
    .renderers() // get the renderer manager
    .get("brightness"); // get the "brightness" renderer

  // Update the font size of the rendering pipeline
  asciifier.fontSize(12);

  // Update properties of the brightness renderer
  brightnessRenderer.update({
    enabled: true, // redundant, but for clarity
    characters: " .C_S+*%@/",
    characterColor: "#000",
    characterColorMode: "sampled", // or "fixed"
    backgroundColor: "#000000",
    backgroundColorMode: "fixed", // or "sampled"
    invert: false, // swap char and bg colors
    rotation: 0, // rotation angle in degrees
    flipVertically: false, // flip chars vertically
    flipHorizontally: false, // flip chars horizontally
  });


}

function draw() {
    filter(myFilter);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}