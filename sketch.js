var bg,bg2,form,system,code,security;
var score=0;

function preload() {
 
  
  bg= loadImage("sea.jpg")
  //load image for the treasure background
  bg2 = loadImage("fish.jpg");
  
}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  system = new System();
  
  
  
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(30);
  stroke("black");
  strokeWeight(5);
  fill("yellow");
  textFont("Jokerman");
  text("Score : " + score, 450, 50);
// add code for changing the background to the treasure background
  if(score === 4) {
    clear()
    background(bg2)
    fill("black")
    stroke("white");
    strokeWeight(5);
    textSize(40);
    text("FISH SAVED",400, 250);
  }

  drawSprites()
}