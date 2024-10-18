let tickerTexts = ["PACKAGING", "MOTION", "BRANDING", "TYPOGRAPHY", "PUBLICATION"];
let textURLs = tickerTexts.map(text => `https://welldonestack.github.io/ki/works.html#${text.toLowerCase()}`);
let textSpeed = 6; // Speed of the ticker
let textPositions = []; // Array to hold position vectors of the ticker texts
let textWidths = []; // Array to hold widths of the ticker texts
let spacing = 50; // Spacing between ticker texts
let tickerAreaWidth = 800; // Width of the ticker area
let tickerAreaHeight = 350; // Height of the ticker area
let tickerAreaPos; // Position vector of the ticker area
let fontSize = 500; // Font size of the ticker text
let isMouseOver = false; // Flag to indicate if mouse is over a ticker text
let draggingIndex = -1; // Index of the text being dragged
let dragOffset = 0; // Offset between mouse position and text position during drag

function windowResize(){
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  // Calculate the height of the first row
  firstRowHeight = document.querySelector('.row:first-of-type').offsetHeight + 130;
  rowElement = document.querySelector('.row');
  rowLeft = rowElement.offsetLeft;
  rowWidth = rowElement.offsetWidth;
  
  // Create canvas with limited height to match the first row
  let canvas = createCanvas(rowWidth, firstRowHeight);
  canvas.position(rowLeft, 50);
  canvas.style('z-index','-1');
  
  // Set the font and size
  textFont('Bebas Neue');
  textSize(fontSize);

  // Calculate the widths of the ticker texts
  calculateTextWidths();

  // Initialize the ticker area position
  tickerAreaPos = createVector((windowWidth - tickerAreaWidth) / 2, fontSize*1.3-firstRowHeight);

  // Initialize the positions of the ticker texts
  let initialX = tickerAreaPos.x + tickerAreaWidth + 300;
  for (let i = 0; i < tickerTexts.length; i++) {
    let posY = tickerAreaPos.y + (tickerAreaHeight / 2); // Adjust vertically
    textPositions[i] = createVector(initialX, posY);
    initialX += textWidths[i] + spacing;
  }
}

function draw() {
  background(255); // White background
  fill(63, 0, 255);
  noStroke();

  // Update the position of the ticker texts if not dragging
  if (!isMouseOver && draggingIndex === -1) {
    updateTickerPositions();
  }

  // Draw the ticker texts
  drawTickerTexts();
}

function calculateTextWidths() {
  for (let i = 0; i < tickerTexts.length; i++) {
    textWidths[i] = textWidth(tickerTexts[i]);
  }
}

function updateTickerPositions() {
  for (let i = 0; i < tickerTexts.length; i++) {
    textPositions[i].x -= textSpeed;

    // Check if the text has completely scrolled off the left side of the canvas
    if (textPositions[i].x + textWidths[i] < 0) {
      // Reset to the right side of the ticker area with spacing
      let previousIndex = (i === 0) ? tickerTexts.length - 1 : i - 1;
      textPositions[i].x = textPositions[previousIndex].x + textWidths[previousIndex] + spacing;
    }
  }
}

function drawTickerTexts() {
  push();
  textFont('Bebas Neue'); // Set the custom font
  textSize(fontSize); // Set the font size
  isMouseOver = false; // Reset mouse over flag
  for (let i = 0; i < tickerTexts.length; i++) {
    if (isMouseOverText(textPositions[i], textWidths[i])) {
      noStroke();
      fill(0); // Black color on hover
      isMouseOver = true; // Set mouse over flag
    } else {
      noFill();
      stroke('#D3D3D3');
      strokeWeight(3);
    }
    text(tickerTexts[i], textPositions[i].x, textPositions[i].y);
  }
  pop();
}

function isMouseOverText(position, textWidth) {
  return mouseX > position.x && mouseX < position.x + textWidth && mouseY > position.y - fontSize && mouseY < position.y;
}


function mousePressed() {
  for (let i = 0; i < tickerTexts.length; i++) {
    let textX = textPositions[i].x;
    let textY = textPositions[i].y;
    let textW = textWidths[i];
    let textH = fontSize; // Approximating the height of the text

    if (mouseX > textX && mouseX < textX + textW && mouseY > textY - textH && mouseY < textY) {
      window.location.href = textURLs[i];
      return;
    }
  }
}
