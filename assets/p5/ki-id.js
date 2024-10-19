let ki;
let lengthSlider, offsetSlider, angleItopSlider, angleIbottomSlider, lineWeightSlider;
let showGridsCheckbox, showLinesCheckbox, showPointsCheckbox, referenceCheckbox;
let lastScrollPosition = 0;

function setup() {
  canvas = createCanvas(200, 40);
  canvas.parent('logo-sketch-container');
  ki = new Ki();
  angleMode(DEGREES);
  
  
  // Initialize sliders with responsive values
  let initialLength = calculateLength();
  
  lengthSlider = new Slider(
    config.length.values[0],
    config.length.values[config.length.values.length - 1],
    initialLength,
    1,
    14,
    20,
    "Length"
  );
  lineWeightSlider = new Slider(0.5, 3, 3, 0.1, 100, 240, "Offset");
  offsetSlider = new Slider(0, 40, 0, 0.1, 100, 240, "Offset");
  angleItopSlider = new Slider(0, 60, 0, 0.01, 100, 270, "Angle Itop");
  angleIbottomSlider = new Slider(0, 60, 0, 0.01, 100, 300, "Angle Ibottom");

  // Hide all sliders by default
  lengthSlider.hide();
  lineWeightSlider.hide();
  offsetSlider.hide();
  angleItopSlider.hide();
  angleIbottomSlider.hide();

  // Add scroll event listener
  window.addEventListener('scroll', updateSlidersFromScroll);
  clear();
}

function windowResized() {
  if (window.innerWidth <= 768) {
    resizeCanvas(160, 32);
  } else {
    resizeCanvas(200, 40);
  }
  
  let newLength = calculateLength();
  lengthSlider.slider.value(newLength);
  
}

function draw() {
  clear();
  
  let length = lengthSlider.getValue();
  // let lineWeight = calculateWeight(length);
  // lineWeightSlider.slider.value(lineWeight);
  let lineWeight = lineWeightSlider.getValue();
  let offset = offsetSlider.getValue();
  let angleItop = angleItopSlider.getValue();
  let angleIbottom = angleIbottomSlider.getValue();
  
  push();
  translate(length/2 + offset, lineWeight);
  
  ki.update(length, offset, angleItop, angleIbottom);
  ki.showCubeLines(lineWeight);
  ki.showCubePoints(lineWeight);
  ki.showLines(lineWeight);
  ki.showPoints(lineWeight);
  
  pop();
}

// Configuration for mapping window sizes to slider values
const config = {
  length: {
    windowWidths: [50, 100, 150, 200],
    values: [10, 15]
  },

  scroll: {
    breakpoints: {
      top: 0,
      mid: window.innerHeight / 2,
      bottom: window.innerHeight
    }
  }
};
// Function to calculate slider values based on scroll position
function updateSlidersFromScroll() {
  const scrollPos = window.scrollY;
  const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercentage = Math.min(Math.max(scrollPos / totalHeight, 0), 1);

// Update lineWeight
  if (scrollPercentage <= 0.33) {
    lineWeightSlider.slider.value(map(scrollPercentage, 0, 0.33, 3, 3));
  } else if (scrollPercentage <= 0.66) {
    lineWeightSlider.slider.value(map(scrollPercentage, 0.33, 0.66, 3, 0.5));
  } else {
    lineWeightSlider.slider.value(0.5);
  }

  // Update angleItopSlider
  if (scrollPercentage <= 0.33) {
    angleItopSlider.slider.value(map(scrollPercentage, 0, 0.33, 0, 30));
  } else if (scrollPercentage <= 0.66) {
    angleItopSlider.slider.value(map(scrollPercentage, 0.33, 0.66, 30, 60));
  } else {
    angleItopSlider.slider.value(60);
  }

  // Update angleIbottomSlider
  if (scrollPercentage <= 0.33) {
    angleIbottomSlider.slider.value(map(scrollPercentage, 0, 0.33, 0, 30));
  } else if (scrollPercentage <= 0.66) {
    angleIbottomSlider.slider.value(map(scrollPercentage, 0.33, 0.66, 30, 60));
  } else {
    angleIbottomSlider.slider.value(60);
  }

  // Update offsetSlider
  if (scrollPercentage <= 0.33) {
    offsetSlider.slider.value(0);
  } else if (scrollPercentage <= 0.66) {
    offsetSlider.slider.value(map(scrollPercentage, 0.33, 0.66, 0, 40));
  } else {
    offsetSlider.slider.value(150);
  }

  lastScrollPosition = scrollPos;
}


function calculateLength() {
  return map(
    windowWidth,
    0,
    displayWidth,
    config.length.values[0],
    config.length.values[config.length.values.length - 1]
  );
}

class Ki {
  constructor() {
    this.a = createVector(0, 0);
    this.b = createVector(0, 0);
    this.c = createVector(0, 0);
    this.d = createVector(0, 0);
    this.e = createVector(0, 0);
    this.f = createVector(0, 0);
    this.g = createVector(0, 0);
    this.h = createVector(0, 0);
    this.A = createVector(0, 0);
    this.B = createVector(0, 0);
    this.theta = 0;
    this.length = 0;
    this.offset = 0;
  }

  update(length, offset, angleItop, angleIbottom) {
    this.length = length;
    this.offset = offset;
    this.b = createVector(0 - offset, 0 + length);
    this.c = createVector(0 + length - offset, 0 + length);
    this.d = createVector(0 + length, 0);
    this.A = p5.Vector.sub(this.a, this.b);
    this.B = p5.Vector.sub(this.c, this.b);

    this.theta = this.A.angleBetween(this.B);
    this.e.x = this.b.x + cos(this.theta) * (this.A.mag() / 2);
    this.e.y = this.b.y - sin(this.theta) * (this.A.mag() / 2);

    this.f.x = cos(angleItop) * length;
    this.f.y = sin(angleItop) * length;
    this.f.add(this.d);

    this.g.x = cos(angleIbottom) * length;
    this.g.y = sin(angleIbottom) * length;
    this.g.add(this.c);

    this.h.x = this.g.x - this.B.mag();
    this.h.y = this.g.y;
  }

  showPoints(pointWeight) {
    push();
    strokeWeight(pointWeight);
    beginShape(POINTS);
    vertex(this.a.x, this.a.y);
    vertex(this.b.x, this.b.y);
    vertex(this.c.x, this.c.y);
    vertex(this.d.x, this.d.y);
    vertex(this.e.x, this.e.y);
    vertex(this.f.x, this.f.y);
    vertex(this.g.x, this.g.y);
    endShape();
    pop();
  }

  showLines(lineWeight) {
    push();
    strokeWeight(lineWeight); // K
    line(this.a.x, this.a.y, this.e.x, this.e.y); // a -> e
    line(this.e.x, this.e.y, this.b.x, this.b.y); // e -> b
    line(this.e.x, this.e.y, this.d.x, this.d.y); // e -> d
    line(this.e.x, this.e.y, this.c.x, this.c.y); // e -> c
    push();
    stroke(0, 0, 200); // I
    line(this.a.x, this.a.y, this.d.x, this.d.y); // a -> d
    line(this.d.x, this.d.y, this.f.x, this.f.y); // d -> f
    line(this.b.x, this.b.y, this.c.x, this.c.y); // b -> c
    line(this.c.x, this.c.y, this.g.x, this.g.y); // c -> g
    line(this.d.x, this.d.y, this.c.x, this.c.y); // d -> c
    pop();
    pop();
  }

  showCubePoints(lineWeight) {
    push();
    strokeWeight(lineWeight);
    stroke(200); // 
    beginShape(POINTS);
    vertex(this.h.x, this.h.y);
    endShape();
    pop();
  }

  showCubeLines(lineWeight) {
    push();
    strokeWeight(lineWeight);
    stroke(200); // I
    line(this.b.x, this.b.y, this.h.x, this.h.y); // b -> h
    line(this.h.x, this.h.y, this.g.x, this.g.y); // h -> g
    line(this.g.x, this.g.y, this.f.x, this.f.y); // g -> f
    pop();
  }

  showGrids(step) {
    push();
    stroke(255);
    // Draw horizontal lines
    for (let y = -height / 4; y <= height / 2; y += step) {
      line(-width / 2, y, width / 2, y);
    }
    // Draw vertical lines
    for (let x = -width / 2; x <= width / 2; x += step) {
      line(x, -height / 4, x, height / 2);
    }
    pop();
  }
  reference() {
    fill(255);
    textSize(30);
    text("a", this.a.x + 10, this.a.y + 20);
    text("b", this.b.x + 10, this.b.y + 20);
    text("c", this.c.x + 10, this.c.y + 20);
    text("d", this.d.x + 10, this.d.y + 20);
    text("e", this.e.x + 10, this.e.y + 20);
    text("f", this.f.x + 10, this.f.y + 20);
    text("g", this.g.x + 10, this.g.y + 20);
    text("h", this.h.x + 10, this.h.y + 20);
    push();
    stroke(255, 0, 0);
    strokeWeight(5);
    line(this.a.x, this.a.y, this.e.x, this.e.y); // a -> e
    line(this.e.x, this.e.y, this.b.x, this.b.y); // e -> b
    text("A", this.e.x - 30, this.e.y + 20);
    line(this.b.x, this.b.y, this.c.x, this.c.y); // b -> c
    text("B", (this.b.x + this.c.x) / 2, this.c.y + 20);
    pop();
  }
}


class Slider {
  constructor(min, max, value, step, x, y, label) {
    this.slider = createSlider(min, max, value, step);
    this.slider.position(x, y);
    this.label = label;
    this.x = x;
    this.y = y;
    this.step = step;
  }
  
  getValue() {
    return this.slider.value();
  }
  
  getStep() {
    return this.step;
  }

  // Method to hide the slider
  hide() {
    this.slider.hide();
  }

  display() {
    push();
    textAlign(LEFT, CENTER);
    textSize(16);
    fill(0);
    text(this.label + ": " + this.getValue(), 
         this.x + this.slider.width + 10, 
         this.y + this.slider.height / 2);
    pop();
  }
}
