
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

// -------------------  Gerade ungerade  -------------------------------------
// -------------------  Gerade (0) ungerade (1)  -----------------------------


function GeradeUngerade (number){
  let y = number;
  let x = y % 2 ;

  
  if ( x=== 1){
    return console.log(number+' ungerade');
  }
  return console.log(number+' gerade');
}

GeradeUngerade (50);


// -------------------  Digit -------------------------------------
// ------------------- Number to one digit ------------------------
//39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
//999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
//4 --> 0 (because 4 is already a one-digit number)


function DigiSize (number){
let i = 0;
let c = 0;
let b = 0;
let digiSum =0;

              if(number<99){
                    while(i <= 99){
                     
                    if (number < 10){ return console.log(c);}
                         let digi1 = number / 10;  
                             digi1 = Math.floor(digi1);
                         let digi2 = digi1 *10; 
                         let digi3 = number - digi2 ;
                                   
                            digiSum = digi1*digi3;     
                        number = digiSum; console.log(digiSum);
                         i++; 
                        c = c +1 ; 
                       }}
  
              else {
               
                        while(i <= 100){
                         
                        if (number < 10){ return console.log(b);}
                             let digi1 = number / 100;   
                                 digi1 = Math.floor(digi1);   console.log(digi1); 

                             let digix = digi1 * 100;      
                             let digi2 = number - digix ;    
                                 digi2 =  digi2 /10;
                                 digi2 = Math.floor(digi2);     

                                 digiy = digi2 *10;          console.log(digi2); 
                             let digi3 = number - digiy - digix ;     console.log(digi3); 
                                       
                                digiSum = digi1*digi2;    console.log(digiSum);   
                                digiSum = digiSum*digi3;  console.log(digiSum);
                                number = digiSum;         console.log(digiSum);
                                b = b +1 ;
                                i++; 
                                }}
  }
          

DigiSize(999);


// -------------------  schleifen hoch und runter-------------------------------------


function  schleifeWhile(n){
  let i=0;
  while (i <=n){
  console.log(i)
  i= i +2;
  }}


  schleifeWhile(25);

  for (let i = 0; i < Auto.length; i++) {
   console.log(Auto[i]);
   
  }


  // ------------------- Kata 6 -------------------------------------

function oddnumber(n1,n2){

  let y = n1;
  let x = y % 2 ;
  
  let xxx = (n2 - n1) / 2;
  let laenge = Math.round(xxx);
  console.log(laenge);
  let d= 0;
  
  if ( x=== 1){ let i = n1+1;  const NumArr = new Array(laenge);
          while (i <= n2){ 
                const inhalt = String(i); 
              
                NumArr[d] = inhalt; 
                NumArr.push(inhalt);
                d ++;

          if (d === laenge){ return NumArr.join(",");}
                 
                i= i +2; }
               }
   else{let i = n1; const NumArr = new Array(laenge);
          while (i <= n2){ 
                const inhalt = String(i); 
              
                NumArr[d] = inhalt; 
                NumArr.push(inhalt);
                d ++;
          if (d === laenge){ return NumArr.join(",");
                
                }
                i= i +2; }}
        }

console.log(oddnumber(9,14));


  // ------------------- Kata 6 verkürzt ---------------------------------

  function oddnumberShort(n1,n2){

    let y = n1;
    let x = y % 2 ;
    let laenge = Math.round((n2 - n1) / 2);
    let d= 0;
    console.log(laenge);
    
    if ( x=== 1){ let i = n1+1;  const NumArr = new Array(laenge);
            while (i <= n2){ 
                  const inhalt = String(i); 
                  NumArr[d] = inhalt;           
                  d ++;
                  if (d === laenge){ return NumArr.join();}
                  i= i +2; }
                 }
                 
     else{let i = n1; const NumArr = new Array(laenge);
            while (i <= n2){ 
                  const inhalt = String(i); 
                  NumArr[d] = inhalt; 
                  d ++;
                  if (d === laenge){ return NumArr.join();}
                  i= i +2; }}
                  }
  
  console.log(oddnumberShort(4,14));

    // ------------------- counting sheep ---------------------------------

    function countingSheep(){
      const sheep = [true,  true,  true,  false,
        true,  true,  true,  true ,
        true,  false, true,  false,
        true,  false, false, true ,
        true,  true,  true,  true ,
        false, false, true,  false]
        let count = sheep.filter(Boolean).length;
       return count;
        
    }

    console.log(countingSheep());


      // ------------------- opposite Number---------------------------------

      function oppositeN (n){
        x = Math.sign(n);
        let nn;
        if (x === 1 ){
           nn = -n;
        
        } else {
          nn = n+ (-n)+ (-n);
                 }
        return nn;
      }

      console.log(oppositeN(-44));

        // ------------------- sum of positve---------------------------------



        function positiveSum(arr) {
          let sum = 0;
            for (let i = 0; i < arr.length; ++i) {
                if (arr[i] > 0) {sum += arr[i];}
             }
             return sum;}
    
    console.log(positiveSum([10, 10, 10, -6, -5, -6]));
      
     // ------------------- return negative---------------------------------
     function makeNegative(num) {
      // Code?
      let neg;
      if (num < 0){
        neg = num ;
              } else {
                neg = num - num -num;
              }
      return neg;
    }

    console.log(makeNegative(-3));


    // ----------------  Number of People in the Bus -------------------

    var number = function(busStops){
      // Good Luck!
      let mitfahrerx;
      let rein;
      let raus;
      let arr = [0];
    
      
      for ( let i =0 ; i< busStops.length ; i++){
  
        rein = busStops[i][0];
        raus = busStops[i][1];
        mitfahrerx = rein-raus;
        arr[0] =  arr[0] + mitfahrerx; 
     }
      return arr[0];
    }
    

console.log(number([[8,7],[12,12],[8,8],[12,1],[15,3],[7,3]]));

var number = function(busStops){
  let peopleInBus = 0;
  busStops.forEach(([enter, left]) => {
    peopleInBus += enter - left;
  })
  
  return peopleInBus
}


// ---------- Reversed Strings ----------------

function solution(str){
  return str.split("").reverse().join("");

}

console.log(solution('world'));

// --------- Even numbers in an array -----------


function evenNumbersA(array, number) {  // good luck
const turn = new Array (number);

  for ( let i = 0; i< array.length; i++){
      if ( array [i] % 2  === 0 ){  turn.push( array[i])}
  }
return turn.slice(-number);
}

console.log(evenNumbersA([1, 2, 3, 4, 5, 6, 7, 8, 9], 4));


function evenNumbers(array, number) {
  return array.filter(num => num % 2 == 0).slice(-number);
}
console.log(evenNumbers([1, 2, 3, 5, 7, 8, 9,8,8,8,10], 4));


// ---- get the middle char

function getMiddle(s){
  //Code goes here!
  let result = [];
  if (s.length % 2 === 1 )
  { let si = Math.round(s.length /2-1);
    result= s[si]}

  if (s.length % 2 === 0 ){
      result.push(s[s.length/2 -1]);
      result.push(s[s.length/2]);
      let testTest = result.join('');
      result=testTest;
     }
  return result;
  }

console.log(getMiddle("Testesteee"));

function getMiddle(s) {
  var middle = s.length / 2;
  return (s.length % 2) 
    ? s.charAt(Math.floor(middle))
    : s.slice(middle - 1, middle + 1);
}


// ------------------ ISOGRAMM --------------------

function isIsogram(str){
  //...
  let content =  str.toUpperCase();

  for ( let i = 0; i < content.length ; i++)

      { for ( let d = 0 ; d<= content.length; d++){
       if (((content[d] === content[i]) && i<d))
          {    return false;   }}}
  
         
 return true;
}

console.log(isIsogram("abcF"));


// -------- 