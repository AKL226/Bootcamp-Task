// -----  String Api
console.log(' ---------toUpperCase ----------');
const str = "test";
console.log(str.toUpperCase());

const sti = "test";
console.log(str[0].toUpperCase()+'au'); 



console.log(' --------- include ----------');
const phone ="+49 12844 104303";
const isIncluded = phone.includes('49');  //boolean
console.log(isIncluded + '+49');



console.log(' ---------replace one ITEM ----------');
const strr = "cats cats dogs";
const resultStr = strr.replace("cats","devil");
console.log(resultStr);


console.log(' ---------replaceALL ----------');
const strrr = "cats cats dogs";
const resultStrr = strrr.replaceAll("cats","devil");
console.log(resultStrr);


console.log(' ---------string.split ----------');
const lala = "cats cats dogs";
const resultlala = lala.split("");
console.log(resultlala);

console.log(' ---------string.join ----------');

const resultlalaa = resultlala.join('');
console.log(resultlalaa);


console.log(' ---------string.indexOf--Positi0n--------');

const sentence = " Arne auf Bremen town";
const firstIndex =sentence.indexOf('n');  //Number position
console.log(firstIndex);

console.log(' ---------string.repeat----------');


const repeatSentence =sentence.repeat(3);  //Number position
console.log(repeatSentence);


console.log(' ---------string.toLowerCase----------');


const SentenceCase =sentence.toLocaleLowerCase();  //Number position
console.log(SentenceCase);

console.log(' ---------Anonymous Functions----------');

const sayHello = function(w,j){
  console.log(w,j);
}

sayHello('Hella','helle');

console.log(' ---------Functions as Parameters----------');

// Function definition using the name logHello
function sayHello1() {
  console.log('lalal');
}

function executeFn(fn) {
  // Execution of the passed function
  fn();
}


executeFn(sayHello1);


console.log(' ---------Array.reverse----------');

let arr = [1, 2, 3];
arr.reverse();
console.log(arr); // [3, 2, 1]


console.log(' ---------Array.join----------');


const strA = arr.join();
console.log(strA); // "1,2,3"

const strB = arr.join("-");
console.log(strB); // "1-2-3"

const strC = arr.join();
console.log(strC); // "123"

console.log(' ---------Split String -> Array----sort by ","-----');

const abb = '55,6,59'
const strD = abb.split(",");
console.log(strD); // "123"

console.log(' ----------Array.includes  -> boolean----');


const is2Included = arr.includes(4/2);
console.log(is2Included); // true

const is4Included = arr.includes(2+2);
console.log(is4Included); // false


console.log(' ----------Using array.forEach() can usually replace a for-loop----');

const guys = ["Arne", "Staden", "Emmo"];

function sayGuys(Name) {
  console.log("Hello " + Name);
}

guys.forEach(sayGuys);
// "Hello Peter"
// "Hello Paul"
// "Hello Mary



console.log(' ----------The array.filter() method returns a new filtered array----');

function filter(name) {
  return name.length < 5;
}

const filteredArr = guys.filter(filter);
console.log(filteredArr);


console.log(' ----------The array.filter() method returns a new filtered array----');


const areei = [2, 4, 5, 7];

function square(n) {
  return n * n;
}

const squaredArr = areei.map(square);
console.log(squaredArr);


console.log(' ---------The sort() method will by default convert all values to strings and compare UTF-16 values----')

const xxx = [-1, 100, 4, 2];

const sortedArr = xxx.sort();
console.log(sortedArr);

console.log([11,2,22,1].sort((a,b) => a-b))