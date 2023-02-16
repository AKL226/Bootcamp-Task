
let Auto = ["Motor",1, "Benzin","Lenkrad"];
let SUV  = [["Motor",1.8, "Benzin","Lenkrad"],["Allrad"]];


// -------------------  Array string zurückgeben  -------------------------------------
// -------------------  Array only numbers        ----------------------

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



// -------------------  Aplphabet  -------------------------------------
// -------------------  Asci in Array verschieben ----------------------
// -------------------- Char -> String ---------------------------------

const alpha = Array.from(Array(26)).map((e, i) => i + 65);
console.log(alpha);

const alphabet = alpha.map((x) => String.fromCharCode(x));
console.log(alphabet);

// -------------------  Aplphabet  -------------------------------------
// -------------------  Asci in Array verschieben ----------------------
// -------------------- Char -> String ---------------------------------