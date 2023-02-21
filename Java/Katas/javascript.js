
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


function  oddnumber(n1,n2,NumArr){

  let y = n1;
  let x = y % 2 ;
  
  let xxx = (n2 - n1) / 2;
  let laenge = Math.round(xxx);
  console.log(laenge);
  let d= 0;
  
  if ( x=== 1){ let i = n1+1; 
               const NumArr = new Array(laenge);
                while (i <= n2){ 
                const inhalt = String(i); 
              
                NumArr[d] = inhalt; 
                NumArr.push(inhalt);
                d ++;
                if (d === laenge){
                  
                  console.log(NumArr.join(","));
             
                }
                i= i +2; }
               }
   else{            
        let i = n1; 
        const NumArr = new Array(laenge);

        while (i <= n2){  
          while (i <= n2){ 
                const inhalt = String(i); 
              
                NumArr[d] = inhalt; 
                NumArr.push(inhalt);
                d ++;
                if (d === laenge){
                  
                  console.log(NumArr.join(","));
               
                }
                i= i +2; }}
       
          } 

        }

 
oddnumber(10,26);