
let Auto = ["Motor",1.8, "Benzin","Lenkrad"];
let SUV  = [["Motor",1.8, "Benzin","Lenkrad"],["Allrad"]];

let Bedingung = 5 ;


//// ---- Ausgabe Array
if  (   Bedingung === 1) {
        console.log(Auto)};    

//// ---- Ausgabe nur ITEM 2 im Array
if (    Bedingung === 2){ 
        console.log(Auto.pop(2))};   

//// ---- Ausgabe + Sitz an Stelle 0
if (Bedingung === 3){ 
    Auto.splice(1,0,'Sitz');
    console.log(Auto);}    

//// ---- Ausgabe mit extra Item
if (Bedingung === 4) {
Auto.push("Arne"); 
console.log(Auto);
console.log(Auto.length);};

//// ---- Ausgabe first ITEM
if (Bedingung === 5) {
    const firstItem = Auto.shift()
    console.log(firstItem);};

 //// ---- Ausgabe wird gedreht
if (Bedingung === 6) {
    console.log(Auto.reverse());};   

 //// ---- Ausgabe zusammenfügen von Arrays
 if (Bedingung === 7) {
    console.log(Auto.concat(Auto));};   

 //// ---- Ausgabe bestimmte länge 
 if (Bedingung === 8) {
    Auto.length = 2;
    console.log(Auto);};  



if (Bedingung === 0){
for ( let schleife = 0; schleife < Auto.length; schleife++ ){
    console.log(Auto[schleife]);
    for (let index of Auto){
 
        console.log(index);
    }
}}

if (Bedingung === 9){
console.log(SUV[1][0]);

console.log(Auto.filter(Number));
console.log(Auto.filter(String));
console.log(Auto.find(Number));
console.log(Auto.find(String));
console.log(Auto.slice(1));     // ab Position 2

console.log(SUV.findLast);};

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

// TODO: Implement the removeItem function

//const ainmals = ["Dog", "Cat", "Lion"];
//console.log(removeItem(ainmals, 1));
// result should be: ["Cat", "Lion"]

//console.log(ainmals);
// result should be still: ["Dog", "Cat", "Lion"]

//const fruits = ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"];
//console.log(removeItem(fruits, 3));
// result should be: ["Watermelon", "Banana", "Kiwi", "Pineapple", "Apple"]

//console.log(fruits);
// result should be still: ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"]
