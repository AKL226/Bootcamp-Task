Vue.createApp({
  data() {
    return {
      headline: "Attribute Binding is awesome",
      headlineid: 'A )',


      imageAttrs: {
        src: "https://picsum.photos/id/7/200/300",
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
