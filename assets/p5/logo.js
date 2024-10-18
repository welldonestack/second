let canvas;

function setup() {
    canvas = createCanvas(100, 50); // Adjust size to fit the navbar
    canvas.parent('home-button-canvas'); // Attach to the div
    noLoop(); // Stop the draw loop if the sketch is static
}

function draw() {
    background(255); // White background to match the header
    stroke(0);
    strokeWeight(3);
    line(10, 10, 90, 40); // Example design
    textAlign(CENTER, CENTER);
    textSize(24);
    text('Ki', width / 2, height / 2); // Centered text replacement
}
