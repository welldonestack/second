let paragraph = "This is a loaded paragraph.";
let newArray = [];
let index = 0;
let finished = false; // Flag to indicate if the sentence is completed

function setup() {
  createCanvas(400, 200);
  frameRate(60); // Adjust the frame rate as needed
}

function draw() {
  background(255,150);
  
  if (index < paragraph.length && !finished) {
    // Slice the paragraph to gradually build up the full sentence in newArray
    newArray[0] = paragraph.slice(0, index + 1);
    index++;
  }
  else{
    finished = true;
  }
  
  // Display the full sentence
  textSize(24);
  textAlign(CENTER);
  text(newArray[0], width/2, height/2);
}
