// --- SKETCH ONE ---
const sketchOne = p => {
    let k = 0, r = 50;
    p.setup = () => {
        // Pass the target div ID directly as the second argument to createCanvas
        p.createCanvas(400, 400, "preloader-container");
    };
    p.draw = () => {
        background(0, 70);
        translate(width / 2, height / 2);
        rotate(PI / 2);
        noFill();
        stroke(100);
        ellipse(0, 0, 2 * r, 2 * r);
        for (let i = 0; i < 5; i++) {
            let ang = radians(180 * cos(radians(k + i * 10)));
            let x = r * cos(ang);
            let y = r * sin(ang);
            noStroke();
            fill(255);
            if (k + i * 10 < 182) ellipse(x, y, 5, 5);
        }
        if (k < 180) k += 1; else k = 0;
    };
};
// Instantiate the sketch and bind it to its HTML div element

new p5(sketchOne, "preloader-container");