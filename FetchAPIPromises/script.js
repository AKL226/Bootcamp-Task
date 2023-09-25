    

// https://github.com/nicokoenig/krautipsum
  let p = fetch("https://krautipsum.com/api/greeting");
  let p2 = p.then((antwort) => {

        if (antwort.ok) {
        return antwort.json();}

      })
    p2.then((data) => { 
    console.log(data.greeting + " console log");
  })
     
// im HTML Dokument 

fetch ("http://krautipsum.com/api/sentence")
.then ((antwort) => {
  return antwort.json();
})

.then ((data)=> {
    var Element = document.getElementById('text');
    Element.appendChild(document.createTextNode(data.sentence))
 // document.body.append(document.createTextNode(data.sentence))
})




// Konsolenausgaben in HTML-Fenster umleiten
  
    var oldLog = console.log;

    console.log = function(message) {
      // Konsolenausgabe abfangen und in das HTML-Fenster einfügen
      var consoleOutput = document.getElementById('consoleText');
      consoleOutput.innerHTML += '<p>' + message + '</p>';

      // Original Console.log-Funktion aufrufen
      oldLog.apply(console, arguments);
    };


    // Zitat 

    fetch("https://dummy-apis.netlify.app/api/quote")
    .then ((zitat) => {
        return zitat.json();
      })
      .then ((data)=> {
        var quote = data.quote;
      
        var quote = document.getElementById('ErstesZitat');
        quote.appendChild(document.createTextNode(data.quote));
        
        var data = data;
          
          var footer = document.getElementById("author");
          footer.textContent = data.author;;
        })

        var reloadButton = document.getElementById("reloadButton");
        reloadButton.addEventListener("click", function() {
          location.reload();
        });

// ---- Color Mix Fix -------------------------------------------------------
const redSlider = document.querySelector("#red");
const greenSlider = document.querySelector("#green");
const blueSlider = document.querySelector("#blue");
const colorValue = document.querySelector("#color-value");
const colorButton = document.querySelector("#colorRandom");

function setBackgroundColor() {

    colorButton.style.backgroundColor = savedColor;
  
  
  const red = rangeValueToHex(redSlider.value);
  const green = rangeValueToHex(greenSlider.value);
  const blue = rangeValueToHex(blueSlider.value);

  const color = "#" + red + green + blue;
  document.body.style.backgroundColor = color;
  colorValue.innerText = color;

  // Speichern des Farbwerts in localStorage
  localStorage.setItem("colorValue", color);
}

// Überprüfen, ob ein zuvor gespeicherter Farbwert vorhanden ist
const savedColor = localStorage.getItem("colorValue");
if (savedColor) {  //  umwandeln für die Balken von 1 bis 255 du weißt String to Integer
  const red = parseInt(savedColor.substr(1, 2), 16);
  const green = parseInt(savedColor.substr(3, 2), 16);
  const blue = parseInt(savedColor.substr(5, 2), 16);

  redSlider.value = red;
  greenSlider.value = green;
  blueSlider.value = blue;

  setBackgroundColor();
}

function rangeValueToHex(value) {
  value = Number.parseInt(value);
  return ("0" + value.toString(16)).substr(-2);
}

document.body.addEventListener("input", setBackgroundColor);


document.querySelector("#colorRandom").addEventListener("click", function () {
  fetch("https://dummy-apis.netlify.app/api/color")
    .then((req) => req.json())
    .then((color) => {
      redSlider.value = color.rgb.r;
      greenSlider.value = color.rgb.g;
      blueSlider.value = color.rgb.b;
      
      setBackgroundColor();
    });
});

// --------------------------------------------------------------------------------------------------------------------

//onst app = Vue.createApp({
//  data(){
//    return{userName:"Arne Klußmann",};
//        },
//
//}).mount("#app");
//console.log(app.userName);


document.addEventListener("DOMContentLoaded", function() {
  // Erstelle eine <script>-Tag für die HTML 
  const script = document.createElement('script');
  script.src = "https://unpkg.com/vue@next";

  // Füge das script zum head-Element hinzu, um Vue.js zu laden 
  document.head.appendChild(script);

  script.onload = function() {
    // Vue.js wurde geladen und ist jetzt verfügbar
    const app = Vue.createApp({
      data() {
        return {
          userName: "Arne Klußmann",
          vueVersion : "3",
          vueHTML: '<h2> Übersicht </h2>',

          }
      }
    });

    app.mount('#app');
  };
});



