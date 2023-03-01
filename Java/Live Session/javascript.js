function add(a, b) {
  return a + b;
}

const add2 = function(a, b) {
  return a + b;
}

const add3 = (a, b) => {
  return a + b
}; 

const add4 = (a, b) => a + b; 


const add1 = a => a + 1; 

console.log(add(1, 2));
console.log(add2(1, 2));
console.log(add3(1, 2));
console.log(add4(1, 2));

const button = document.querySelector('button');

button.addEventListener('click', function () {
  console.log(this);
});

button.addEventListener('click', () => {
  console.log(this);
});

const countries = ["Deutschland", "Niederlande", "Belgien", "Luxemburg", "Frankreich", "Schweiz", "Österreich"];

// for let i = 0; i++;

for (let i = 0; i < countries.length; i++) {
  console.log(i, countries[i]);
}

console.log('----------');

for (let i = 2; i < countries.length; i++) {
  console.log(i, countries[i]);
}

console.log('----------');

for (let i = 0; i < countries.length; i += 2) {
  console.log(i, countries[i]);
}

console.log('----------');

for (let i = countries.length - 1; i >= 0; i--) {
  console.log(i, countries[i]);
}

console.log('----------');

for (let i = countries.length - 1; i >= 0; i -= 2) {
  console.log(i, countries[i]);
}

console.log('----------');

for (let i = countries.length - 3; i >= 0; i--) {
  console.log(i, countries[i]);
}

console.log('---------- i Multiplizieren');

// Wenn wir bei 0 anfangen, landen wir in einer Endlosschleife
// , weil i * 2 immer 0 * 2 = 0 bleibt
for (let i = 1; i < countries.length; i = i * 2) {
  console.log(i, countries[i]);
}

console.log('---------- foreach');

// foreach (let country in countries) {
//     console.log(country);
// }

// foreach
countries.forEach(country => console.log(country));

// for of

console.log('---------- for of ');

// let index = 0;

for (let element of countries) {
  console.log(element);
  // console.log(countries.indexOf(element) + "-" + element);
  // console.log(index);
  // index++;
}

console.log('---------- for of mit index ');
// bei Objekten praktisch
// for (let [index, element] of countries) {
//     console.log(index, element);
// }

// nicht sinnvoll
for (let [a, b, c] of countries) {
  console.log(a, b, c);
}

// for in

console.log('---------- for in ');
for (let element in countries) {
  console.log(element);
}

// while
// do while

const country = "Bayern";

if (country === "Deutschland") {
  console.log("Hallo");
} else if (country === "Frankreich") {
  console.log("Salut");
} else if (country === "Österreich" || country === "Bayern") {
  console.log("Servus");
}

switch (country) {
  case "Deutschland":
      console.log("Hallo");
      break;
  case "Frankreich":
      console.log("Salut");
      break;
  case "Österreich":
  case "Bayern":
      console.log("Servus");
      break;
  default:
      console.log("Hi");
}

const users = [
{
  id: 1,
  firstName: "Jane",
  lastName: "Doe",
  age: 50
},
{
  id: 2,
  firstName: "Martina",
  lastName: "Mustermann",
  age: 37
},
{
  id: 3,
  firstName: "John",
  lastName: "Doe",
  age: 56
}
];


const ab50 = users.filter(user => user.age >= 50);
const mapResult = users.map(user => user.age);
const map2Result = users.map(user => {
  return {
      ...user,
      age: user.age - 1
  };
});

const fullnames = users.map(user => user.firstName + " " + user.lastName);

console.log({ ab50, mapResult, map2Result, users, fullnames });


