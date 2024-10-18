let polygons = [];
let buffer = 80;
let firstRowHeight = 0;
let zf, noiseV, max;
let noiseX, noiseY, t1, t2;
let repeller;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  firstRowHeight = document.querySelector('.row:first-of-type').offsetHeight + 130;
  canvas = createCanvas(windowWidth, firstRowHeight);
  canvas.position(0, 50);
  canvas.style('z-index', '-1');
  
  zf = 0;
  noiseV = 0.3;
  max = floor(random(1, 2));
  noiseX = 0;
  noiseY = 0;
  t1 = 0;
  t2 = 0;
  noStroke();

  for (let i = 0; i < max; i++) {
    let x = random(0, windowWidth);
    let y = random(0, firstRowHeight) + random(-50, 50);
    let r = random(10, 100);
    let c = color(63, 0, 255);
    polygons.push(new Polygon(x, y, r, c));
  }

}

function draw() {
  let mouse = createVector(mouseX, mouseY);
  clear();
  
  for (let polygon of polygons) {
    polygon.boundaries(buffer);
    polygon.arrive(mouse);
    polygon.applyForce();
    polygon.update(noiseX, noiseY, mouse);
    polygon.show();
  }
  
  
  
  zf += 0.01;
  t1 = t1 + 0.001;
  t2 = t2 + 0.001;
  noiseX = map(noise(t1), 0, 1, -0.5, 0.5);
  noiseY = map(noise(t2), 0, 1, -0.2, 0.1);
}

class Polygon {
  constructor(x, y, radius, c) {
    this.position = createVector(x, y);
    this.velocity = createVector();
    this.acceleration = createVector();
    this.maxSpeed = 10;
    this.maxForce = 0.3;
    this.radius = radius;
    this.c = c;
    this.noise = createVector();
    this.squashX = 1;
    this.squashY = 1;
    this.squashFactor = 0.8;
    this.squashRecoveryRate = 0.1;
  }

  update(noiseX, noiseY, mouse) {
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxSpeed);
    this.position.add(this.velocity);
    this.noise.set(noiseX, noiseY);
    this.position.add(this.noise);

    this.radius = map(this.position.x/2 + this.position.y*5, 0, (firstRowHeight + windowWidth), 5, (firstRowHeight + windowWidth)/250);

    // Apply friction and bounce for all edges
    if (this.contactEdge()) {
      // Apply friction
      let cE = 0.01; // friction coefficient
      let friction = this.velocity.copy();
      friction.mult(-1);
      friction.normalize();
      friction.mult(cE);
      this.applyForce(friction);

      // Bounce off edges
      if (this.position.x < this.radius + buffer || this.position.x > windowWidth - this.radius - buffer) {
        this.velocity.x *= -0.5;
      }
      if (this.position.y < this.radius + buffer || this.position.y > firstRowHeight - this.radius - buffer) {
        this.velocity.y *= -0.5;
      }
    }

    // Apply squash effect only for top edge
    if (this.position.y < this.radius + buffer) {
      this.squashX = 1 / this.squashFactor;
      this.squashY = this.squashFactor;
    } else {
      // Gradually recover from squash
      this.squashX = lerp(this.squashX, 1, this.squashRecoveryRate);
      this.squashY = lerp(this.squashY, 1, this.squashRecoveryRate);
    }

    // // Constrain position
    // this.position.x = constrain(this.position.x, this.radius + buffer, windowWidth - this.radius - buffer);
    // this.position.y = constrain(this.position.y, this.radius + buffer, firstRowHeight - this.radius - buffer);

    this.acceleration.mult(0);
  }

  contactEdge() {
    return (
      this.position.x < this.radius + buffer ||
      this.position.x > windowWidth - this.radius - buffer ||
      this.position.y < this.radius + buffer ||
      this.position.y > firstRowHeight - this.radius - buffer
    );
  }

  boundaries(buffer) {
    let desired = null;

    if (this.position.x < buffer) {
      desired = createVector(this.maxSpeed, this.velocity.y);
    } else if (this.position.x > width - buffer) {
      desired = createVector(-this.maxSpeed, this.velocity.y);
    }

    if (this.position.y < buffer) {
      desired = createVector(this.velocity.x, this.maxSpeed);
    } else if (this.position.y > height - buffer) {
      desired = createVector(this.velocity.x, -this.maxSpeed);
    }

    if (desired !== null) {
      desired.normalize();
      desired.mult(this.maxSpeed);
      let steer = p5.Vector.sub(desired, this.velocity);
      steer.limit(this.maxForce);
      this.applyForce(steer);
    }
  }

  applyForce(force) {
    this.acceleration.add(force);
  }

  arrive(target) {
    let desired = p5.Vector.sub(target, this.position);
    let d = desired.mag();
    if (d < 400) {
      let m = map(d, 0, 300, 0, this.maxSpeed);
      desired.setMag(m);
    } else {
      desired.setMag(this.maxSpeed);
    }
    let steer = p5.Vector.sub(desired, this.velocity);
    steer.limit(this.maxForce);
    this.applyForce(steer);
  }

  show() {
    fill(this.c);
    let angle = TWO_PI / 100;
    push();
    translate(this.position.x, this.position.y);
    scale(this.squashX, this.squashY);
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let xf = map(cos(a), -1, 1, 0, noiseV);
      let yf = map(sin(a), -1, 1, 0, noiseV);
      let sr = this.radius + map(noise(xf, yf, zf * ((0.5 * polygons.indexOf(this)) + 1)), 0, 1, 0, 100);
      let sx = cos(a) * sr;
      let sy = sin(a) * sr;
      vertex(sx, sy);
    }
    endShape(CLOSE);
    pop();
  }


}

class Repeller {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.power = 300;
  }

  show() {
    
    fill(127);
    circle(this.position.x, this.position.y, 32);
  }

  repel(particle) {
    let force = p5.Vector.sub(this.position, particle.position);
    let distance = force.mag();
    distance = constrain(distance, 5, 150);
    let strength = (-1 * this.power) / (distance * distance);
    force.setMag(strength);
    return force;
  }
}