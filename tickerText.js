let tickerTexts = ["PACKAGING", "MOTION", "IDENTITY", "TYPOGRAPHY", "PUBLICATION"];
let textSpeed = 3; // Speed of the ticker
let textPositions = []; // Array to hold position vectors of the ticker texts
let textWidths = []; // Array to hold widths of the ticker texts
let spacing = 50; // Spacing between ticker texts
let tickerAreaWidth = 700; // Width of the ticker area
let tickerAreaHeight = 300; // Height of the ticker area
let tickerAreaPos; // Position vector of the ticker area
let rectSpeed = 1; // Speed of the rectangle movement
let rectPos; // Position vector of the rectangle
let rectDirection = 1; // Direction of the rectangle movement (-1 for left, 1 for right)
let fontSize = 300; // Font size of the ticker text

function windowResize(){
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  let canvas = createCanvas(windowWidth, tickerAreaHeight);
  canvas.parent('sketch-container'); // Attach the canvas to the sketch container
  canvas.style('z-index','1');

  // Set the font and size
  textFont('Bebas Neue');
  textSize(fontSize);
  textAlign(LEFT,CENTER);

  // Calculate the widths of the ticker texts
  calculateTextWidths();

  // Initialize the rectangle and ticker area positions
  initializePositions();
}

function draw() {
  background(255); // White background
  fill(0, 0, 200);
  noStroke();

  // Update and draw the rectangle
  updateRectanglePosition();
  drawRectangle();

  // Update the position of the ticker texts
  updateTickerPositions();

  // Draw the ticker texts
  drawTickerTexts();
}

function calculateTextWidths() {
  for (let i = 0; i < tickerTexts.length; i++) {
    textWidths[i] = textWidth(tickerTexts[i]);
  }
}

function initializePositions() {
  rectPos = createVector((windowWidth- tickerAreaWidth) / 2, 0); // Initial position of the rectangle
  tickerAreaPos = createVector(rectPos.x, rectPos.y); // Initial position of the ticker area

  // Initialize the positions of the ticker texts, starting off-screen
  let initialX = tickerAreaPos.x + tickerAreaWidth;
  for (let i = 0; i < tickerTexts.length; i++) {
    let posY = tickerAreaPos.y + tickerAreaHeight / 2 + 15;
    textPositions[i] = createVector(initialX, posY);
    initialX += textWidths[i] + spacing;
  }
}

function updateRectanglePosition() {
  rectPos.x += rectSpeed * rectDirection;

  // Reverse the direction of rectangle movement if it hits the canvas edge
  if (rectPos.x <= 0 || rectPos.x + tickerAreaWidth >= windowWidth) {
    rectDirection *= -1;
  }
}

function drawRectangle() {
  rect(rectPos.x, rectPos.y, tickerAreaWidth, tickerAreaHeight);
}

function updateTickerPositions() {
  tickerAreaPos.x = rectPos.x; // Update the position of the ticker area

  for (let i = 0; i < tickerTexts.length; i++) {
    textPositions[i].x -= textSpeed;

    // Check if the text has completely scrolled off the left side of the ticker area
    if (textPositions[i].x + textWidths[i] < tickerAreaPos.x) {
      // Reset to the right side of the ticker area with spacing
      let previousIndex = (i === 0) ? tickerTexts.length - 1 : i - 1;
      textPositions[i].x = textPositions[previousIndex].x + textWidths[previousIndex] + spacing;
    }
  }
}

function drawTickerTexts() {
  push();
  fill(255);
  textFont('Bebas Neue'); // Set the custom font
  textSize(fontSize); // Set the font size
  for (let i = 0; i < tickerTexts.length; i++) {
    text(tickerTexts[i], textPositions[i].x, textPositions[i].y);
  }
  pop();
}
