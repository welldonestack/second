let x = [];
let y = [];
let r = [];
let colours = [];
let zf, noiseV, max;
let buffer = 90; // Increase this value to increase the buffer from the canvas edges
let firstRowHeight = 0;
let t1 = 0;
let t2 = 0;
let noiseX = 0;
let noiseY = 0;

function windowResize(){
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  // Get the height of the first row
  firstRowHeight = document.querySelector('.row:first-of-type').offsetHeight + 130;
  
  // Create canvas with limited height to match the first row
  canvas = createCanvas(windowWidth, firstRowHeight);
  canvas.position(0, 50);
  canvas.style('z-index','-1');

  zf = 0;
  noiseV = 0.3;
  max = floor(random(1, 2));
  noStroke();

  // Generate random positions and radii for polygons
  for (let i = 0; i < max; i++) {
    x.push(random(0, windowWidth));
    // Add random offset to y position within a range
    y.push(random(0, firstRowHeight) + random(-50, 50)); // Adjust offset range as needed
    r.push(random(10, 100));
  }

  // Fill the colours array with random colors with random opacity
  for (let i = 0; i < max; i++) {
    colours.push(color(63, 0, 255)); // Using p5.js color function for consistency
  }
}

function draw() {
  clear();
  for (let i = 0; i < max; i++) {
    // Attraction force towards the mouse position
    let attractionX = (mouseX - x[i]) * 0.02;
    let attractionY = (mouseY - y[i]) * 0.005;

    // Repulsion force from other polygons
    let repulsionX = 0;
    let repulsionY = 0;
    for (let j = 0; j < max; j++) {
      if (i != j) {
        let dx = x[i] - x[j];
        let dy = y[i] - y[j];
        let distance = sqrt(dx * dx + dy * dy);
        if (distance < 500) {  // Increased the threshold distance to 500
          let force = 300 / (distance * distance);  // Increased the repulsion force factor
          repulsionX += force * dx;
          repulsionY += force * dy;
        }
      }
    }

    // Update position based on attraction and repulsion
    x[i] += attractionX + repulsionX + noiseX; 
    y[i] += attractionY + repulsionY + noiseY; 

    // Update the radius based on the y position
    r[i] = map(x[i]/2 + y[i]*5, 0, (firstRowHeight + windowWidth), 5, (firstRowHeight + windowWidth)/50);
    

    // Ensure the polygon stays within canvas bounds with buffer
    x[i] = constrain(x[i], r[i] + buffer, windowWidth - r[i] - buffer);
    y[i] = constrain(y[i], r[i] + buffer, firstRowHeight - r[i] - buffer);

    new Polygon(x[i], y[i], r[i], zf * ((0.5 * i) + 1), colours[i]);
  }
  zf += 0.01;
  t1 = t1 + 0.001;
  t2 = t2 + 0.001;
  noiseX = map(noise(t1),0,1,-5,5);
  noiseY = map(noise(t2),0,1,-2,1);
}

class Polygon {
  constructor(xp, yp, radius, zn, c) {
    fill(c);
    let angle = TWO_PI / 100;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let xf = map(cos(a), -1, 1, 0, noiseV);
      let yf = map(sin(a), -1, 1, 0, noiseV);
      let sr = radius + map(noise(xf, yf, zn), 0, 1, 0, 100);
      let sx = xp + cos(a) * sr;
      let sy = yp + sin(a) * sr;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }
}
