function Textfeld() {
  var ausgabeT = "Moin Moin";
  document.getElementById("Textfeld").value = ausgabeT;
}


var heute = new Date();
var tag = heute.getDate();
var monat = heute.getMonth() + 1; // Monate beginnen bei 0 zu zählen, daher +1
var jahr = heute.getFullYear();
var datum = tag + "." + monat + "." + jahr;
document.getElementById("datum").innerHTML = datum;




function Datum() {
  var ausgabeD = datum;
  document.getElementById("Datum").value = ausgabeD;
}


var isRed =false; 

function hintergrund() {

  var header = document.getElementsByTagName("header")[0];
        header.classList.toggle("darkmode");

        var all = document.getElementsByTagName("html")[0];
        all.classList.toggle("darkmode");
   
        var main = document.getElementsByTagName("main")[0];
        main.classList.toggle("darkmode");

          
        var nav = document.getElementsByTagName("nav")[0];
        nav.classList.toggle("darkmode");

        var box = document.getElementsByTagName("input");
        for (var i = 0; i < box.length; i++) {
          box[i].classList.toggle("darkmode");
        }

        var buttons = document.querySelectorAll("button");

        for (var i = 0; i < buttons.length; i++) {
          buttons[i].classList.toggle("darkmode");
        }
      }
     




      var Anzeigen =false; 
      function password() {

        var pas = document.getElementsByClassName("password-container");
        pas.classList.toggle("darkmode");

      }
 
  
