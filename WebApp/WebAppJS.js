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