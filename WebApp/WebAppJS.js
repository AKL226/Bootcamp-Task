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

function hintergrund() {

  var header = document.getElementsByTagName("header")[0];
        header.classList.toggle("darkmode");

        var all = document.getElementsByTagName("html")[0];
        all.classList.toggle("darkmode");
   
        var main = document.getElementsByTagName("main")[0];
        main.classList.toggle("darkmode");

        var hh = document.querySelectorAll("h2")[0];
        hh.classList.toggle("darkmode");

        var hhh = document.querySelectorAll("h3")[0];
        hhh.classList.toggle("darkmode");


        	// Definiere ein Array mit möglichen Hintergrundfarben
			var colors = ['#FF5733', '#C70039', '#900C3F', '#581845', '#4CAF50', '#2196F3', '#9C27B0', '#F44336'];

			// Wähle eine zufällige Farbe aus dem Array aus
			var randomColor = colors[Math.floor(Math.random() * colors.length)];

			// Ändere die Hintergrundfarbe des Footer-Elements
			var footer = document.getElementsByTagName("footer")[0];
			footer.style.backgroundColor = randomColor;
      }
 
  


