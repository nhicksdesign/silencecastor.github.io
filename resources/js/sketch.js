// --- SKETCH ONE ---
const sketchOne = p => {
    let k = 0, r = 50;
    p.setup = () => {
        // Pass the target div ID directly as the second argument to createCanvas
        p.createCanvas(400, 400, "preloader-container");
    };
    p.draw = () => {
        p.background(0, 70);
        p.translate(width / 2, height / 2);
        p.rotate(PI / 2);
        p.noFill();
        p.stroke(100);
        p.ellipse(0, 0, 2 * r, 2 * r);
        for (let i = 0; i < 5; i++) {
            let ang = p.radians(180 * p.cos(p.radians(k + i * 10)));
            let x = r * p.cos(ang);
            let y = r * p.sin(ang);
            p.noStroke();
            p.fill(255);
            if (k + i * 10 < 182) p.ellipse(x, y, 5, 5);
        }
        if (k < 180) k += 1; else k = 0;
    };
};

// Instantiate the sketch and bind it to its HTML div element

