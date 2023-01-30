function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
    //    X,   Y,width,height
    rect(50, 200, 300, 150);
    //       x0,  y0,  x1,  y1,  x2, y2
    triangle(40, 200, 360, 200, 200, 30)
    // look out for relatonships between the triangle points
    // and the rectangle points and side lenths!
  }