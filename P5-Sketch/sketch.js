function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
    //    X,   Y,width,height
    rect(50, 200, 300, 150);
    
    circle(300,300, random(0-50));
    //       x0,  y0,  x1,  y1,  x2, y2
    triangle(40, 200, 360, 200, 200, 30)
    // look out for relatonships between the triangle points
    // and the rectangle points and side lenths!
  }


  /////////////////////////////////////////////////////////////////////////////////////////////////

  let Arne = {alter:35 , Gewicht: 87};

console.log(Arne.alter);

let a=0;

function calc(Arn, n){
  Arn.alter = Arn.alter + 6; 
  Arn.Gewicht = 87+3;
  return n+1;
}


  
console.log(Arne.alter);
  
calc(Arne,a);

console.log(Arne);

let b = calc(Arne,a);

console.log(b);




function filter_list(l,zahlen) {
  // Return a new array with the strings filtered out
  
  for ( let schleife = 0; schleife < l.length; schleife++){
    let a = [l].filter();

    let lstring = l.concat(a) ;
  
  return lstring;}
}

console.log(filter_list([1,2,'a','b']));


///////////////////////////////////////////////////////////////////////////////////////////////////