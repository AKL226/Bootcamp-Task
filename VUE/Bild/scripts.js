const width =  600;
const height = 200;

Vue.createApp({
  data() {

  
    return {
      headline: "Attribute Binding is awesome",
      headlineid: 'A )',
      count: 0,

      imageAttrs: {
    
        src: `https://picsum.photos/${width}/${height}`,  // von außerhalb geht
        alt: "Where is the coffee",

                  },

      
    };
  },
}).mount("#app");




// Funktion, um IDs zu überprüfen und zu ändern

function ueberpruefeUndAendereIDs() {
  var elements = document.querySelectorAll("[id]");
  elements.forEach(function(element) {
      var id = element.id;
     
      if (id.includes(" ") || id.includes(",") ||id.includes("/")|| id.includes("(")|| id.includes(")")) {

          
          var neueID = id.replace(/[^\w\d]/g,"").toLowerCase(); // Zeichenkette durchforsten, w Buchstaben und Zahlen
          // Zahlen
          // g für global

          element.id = neueID;

          console.log(neueID); // Hier den Wert der neuenID ausgeben
         
      }
  });
}

// Die Funktion ausführen
ueberpruefeUndAendereIDs();
