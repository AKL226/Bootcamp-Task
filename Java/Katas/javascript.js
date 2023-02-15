
let Auto = ["Motor",1, "Benzin","Lenkrad"];
let SUV  = [["Motor",1.8, "Benzin","Lenkrad"],["Allrad"]];




function filterToArrayOfString (arrayElement){
    return typeof arrayElement ==='string';
  
  }

  function filterToArrayOfNumber (arrayElement){
    return typeof arrayElement === 'number';
  
  }
  console.log(Auto.filter(filterToArrayOfString));
  console.log(SUV[1].filter(filterToArrayOfString)); // filter in array 2

  console.log([1,2,'j','rz','hfhfhf',4,5].filter(filterToArrayOfNumber));

function oneDigit (num){

}

const alpha = Array.from(Array(26)).map((e, i) => i + 65);
console.log('Asci-Format');
console.log(alpha);
console.log('Asci-Format zu string gewandelt');
const alphabet = alpha.map((x) => String.fromCharCode(x));
console.log(alphabet);

// create array von 26,  