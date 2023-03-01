
let Auto = ["Motor",1.8, "Benzin","Lenkrad"];
//// https://love2dev.com/blog/javascript-remove-from-array/#remove-from-array-end

console.log(Auto + "------- Ursprüngliche Daten  ------- ");
console.log(Auto.length+ "---- länge ----");
//// ---- Bedingung 



let Bedingung = 3 ;


//// ---- Ausgabe Array
if  (   Bedingung === 1) {
        console.log(Auto)};    

//// ---- Ausgabe nur ITEM 2 im Array
if (    Bedingung === 2){ 
        console.log(Auto.pop(2))};   

//// ---- Ausgabe ab 2 und wie viele
if (Bedingung === 3){ 
    console.log(Auto.splice(2,2));}    

//// ---- Ausgabe mit extra Item
if (Bedingung === 4) {
Auto.push("Arne"); 
console.log(Auto);
console.log(Auto.length);};

//// ---- Ausgabe first ITEM
if (Bedingung === 5) {
    console.log(Auto.shift());};

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


for (let letOfEasyfor of Auto){
    console.log(letOfEasyFor)
}


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
