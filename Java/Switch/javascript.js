const size = 18;
let result;

if (size > 10 && size <= 20 ) {
  result = "Greater than 10";
} else if (size > 20) {
  result = "Greater than 20";
} else {
  result = "Lower than 10";
}

console.log(result);

console.log(size);

let YESNO = size % 2;

console.log(YESNO);

switch (YESNO){ 

    case 0 : console.log("should be even")
    break;

    case 1 : console.log("should be odd")
    break;
   
    console.log("should be undifined")
    break;
} 

////////////////    Ausdruck Anweisung


switch (true){
   
    case size <6 : console.log("should be children");
    break;
    case size > 6 , size < 18 : console.log("to young for beer");
    break;
    case size > 18 , size < 85 : console.log("perfect age for beer");
    break;
    case size > 86 : console.log("should be elder person");
    break;
    case -1 : console.log("invalid parameter");
    break;
}