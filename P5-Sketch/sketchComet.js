// Comet
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let currentBrush = "";
let bgColor = "white";
let breite = 200;
let hoehe = 200;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function setup() {
  createCanvas(breite, hoehe);
  background(bgColor);
  noStroke();
}

let  cometR = { x:1,y:1,velocity:10};
let  cometL = { x:1,y:hoehe,velocity:10};

function draw() {
  
  
    let xDraw= mouseX; 
    let yDraw= mouseY; 

   textSize(32);
   text('x:'+ xDraw +'y:'+ yDraw, mouseX, mouseY);
    
 
  
  switch (key) {
    case "f":
      currentBrush = "fire";
      break;
    case "i":
      currentBrush = "ice"
      break;
    case "c":
    currentBrush = "comet"
      break;
    default:
      currentBrush = "";
  }

  if (mouseIsPressed) {
    if (currentBrush === "fire") {
      fireBrush(mouseX, mouseY);
    } else if (currentBrush === "ice") {
      iceBrush(mouseX, mouseY);}
      
      else if (currentBrush === "comet") {
        cometFR(cometR);
        cometFL(cometL);

    } else {
      eraserBrush(mouseX, mouseY);
    }
  }
}



function  cometFR(cometR){


          background(0,0,0,10);
          fill("salmon");
          circle(cometR.x,cometR.y,20);
          cometR.x = cometR.x + cometR.velocity;
          cometR.y = cometR.y + cometR.velocity;
  

  
  if (cometR.x>=breite){
      cometR.x=0;
      cometR.y =0;}

}

function cometFL(cometL){

    background(0,0,0,10);
    fill    ("purple");
    circle  (cometL.x,cometL.y,20);

    cometL.x = cometL.x + cometL.velocity;
    cometL.y = cometL.y - cometL.velocity; 

if (cometL.x >= breite){
    cometL.x  =0;
    cometL.x  =0;
    cometL.y  = hoehe;}
}






function fireBrush(x, y) {
  // Randomize x and y
  x = x + random(-20, 20);
  y = y + random(-20, 20);

  let diameter = random(10, 30);
  let green = 0;
  let opacity = 100;

  // Change green and opacity 
  // based on random diameter
  if (diameter < 20) {
    opacity = random(10, 40);
  } else {
    green = random(100, 200);
    opacity = random(40, 70);
  }

  // Define fill color
  fill(random(200, 255), green, 0, opacity);

  // Draw circle
  circle(x, y, diameter);
}

function iceBrush(x, y) {
  let opacity = random(0, 100);
  let blue = random(200, 255);
  fill(0, 0, blue, opacity);

  // Draw larger rect
  let width = random(30, 40);
  let height = random(30, 40);
  rect(x, y, width, height);

  // Draw smaller rect
  width = random(10, 20);
  height = random(10, 20);
  x = x + random(-10, 10);
  y = y + random(-10, 10);
  rect(x, y, width, height);
}

function eraserBrush(x, y) {
  fill(bgColor);
  circle(x, y, 50);
}

