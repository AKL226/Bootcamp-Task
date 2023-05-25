
// --------------------------- letzte Aufgabe 3 delete Button, local storage , clear button --------------------------------------------------------------------------------------------------

const listeE    = document.getElementById("taskListN");           // Listen Bezeichnung im HTML DOkument
const clearBtnN = document.getElementById("clearBtnN");         // Button Bezeichnung im HTML Dokument

const listeCH   = document.getElementById("taskListN");  


// Events
// Event-Handler registrieren

document.querySelector('form').addEventListener('submit', addTaskN);
listeE.addEventListener("click", deleteItemN);                            // event ausführen bei click --- die liste aus taskListN auf die COnstante liN abgelegt.
clearBtnN.addEventListener("click", clearListee);                     // ebenso mit dem Button


listeCH.addEventListener("click", checkCheck);                            // event ausführen bei click --- die liste aus taskListN auf die COnstante liN abgelegt.



// Alle Elemente aus dem LocalStorage laden // und gucken was drin steht // ansonsten wird ein leeres Array erstellt.

const taskListN = document.querySelector('#taskListN'); 
let tasksN = JSON.parse(localStorage.getItem('tasksN')) || []; console.log(tasksN);   

// Elemente rendern
function renderTasksN() {
            const taskListN = document.querySelector('#taskListN');   // suche im Dokument nach der ID #TaskListN, schieb es in die Variable
            taskListN.innerHTML = '';                                 // die Zeile leert den Inhalt der Variable, des Strings
            tasksN.forEach((taskN) => {                               // durchläuft eine Schleife für jedes Element in der TaskN Variable (Array)
            const liste = document.createElement('li');                 // erstellt einen Listeneintrag und schiebt es in die Variable liN
            liste.innerHTML = `<strong>${taskN.name}</strong>${taskN.desc}`;   // nimmt die Array Elemente Name und desc und schiebt es in das Array liN 
            
            taskListN.appendChild(liste);                                             // das neue Array Element wird an die bestehende Liste gehängt



            const checkboxN = document.createElement("input");
            checkboxN.type = "checkbox";
            checkboxN.checked = taskN.checked || false;                               // Setze den anfänglichen Wert der Checkbox basierend auf der "checked"-Eigenschaft des Tasks
      
            checkboxN.classList.add("check");
            checkboxN.id = `check-button-${tasksN.indexOf(taskN)}`;  
            liste.insertBefore(checkboxN, liste.firstChild);

            const index = tasksN.indexOf(taskN);

            if (tasksN[index].checked) {
              liste.classList.add("strikethrough");                                 // die Klasse für die CSS konfiguration 
          
            } else {
              liste.classList.remove("strikethrough");
            }

            // Create delete button for the list item
            const deleteBtnN = document.createElement("button");                    // erstellt ein lösch Button für den Listeneintrag
            deleteBtnN.innerText = "X";                                             // steht im Button
            deleteBtnN.classList.add("deleteBtnN"); 
            deleteBtnN.id = `delete-button-${tasksN.indexOf(taskN)}`;                              // hier wird dem delete button eine Eigenschaft hinzugefügt , Liste
            liste.appendChild(deleteBtnN);
            });                                                                       // hier wird es dem neuen Listeneintrag hinzugefügt
}



// Neue Aufgabe hinzufügen            // wenn ein array vorhanden, dann anheften. // Aufgabe + Beschreibung wenn vorhand, konrolle durch trim
  function addTaskN(event) {
          event.preventDefault();
          const taskNameInputN = document.querySelector('#taskNameN');              // suche nach der ID #taskNamen , im HTML Dokument ein Eingabefeld
          const taskNameN = taskNameInputN.value.trim();                            // lösche alle Leerzeichen die sich im String befinden

          console.log("klick");
          if (!taskNameN) {                                                           
            return;
          }
          const taskDescInputN = document.querySelector('#taskDescN');              // sucht nach der ID #taskDesN 
          const taskDescN = taskDescInputN.value.trim();                            // stutzt den Inhalt
          tasksN.push({ name: taskNameN, desc: taskDescN });                        // schiebt das neue Array Element in das Objekt tasksN 
          localStorage.setItem('tasksN', JSON.stringify(tasksN));                   // speichert den neuen Inhalt Lokal ab, // tasksN heißt mein "Ablagefach"
          taskNameInputN.value = '';                                                // 
          taskDescInputN.value = ''
      
          renderTasksN();                                                           // damit es sichtbar wird, muss es noch kompliliert werden
}



function deleteItemN(event) {
  if (event.target.classList.contains("deleteBtnN")) {
            var listItem = event.target.parentElement;                                  // Listen Element isolieren und verschieben
                                                              // der ausgewählte Listeneintrag
            var index = Array.from(listItem.parentElement.children).indexOf(listItem);  // ( im Objekt suchen nach den Listen Eintrag , und die Nummer ausgeben))
          
            tasksN.splice(index, 1);
            localStorage.setItem('tasksN', JSON.stringify(tasksN));
            renderTasksN();}
}


function checkCheck(event) {
  if (event.target.classList.contains("check")){
  console.log(event);
  const listItem = event.target.parentElement;
  const index = Array.from(listItem.parentElement.children).indexOf(listItem);
  tasksN[index].checked = event.target.checked;                       // Aktualisiere den "checked"-Wert des entsprechenden Tasks im Array tasksN
  console.log(tasksN);
 
  localStorage.setItem("tasksN", JSON.stringify(tasksN));
  renderTasksN();}
}


function clearListee() {
  const checkedItems = tasksN.filter(taskN => taskN.checked); // Filtere die Tasks, um nur diejenigen mit der "checked"-Eigenschaft auf true zu erhalten
  checkedItems.forEach(taskN => {
    const listItem = document.querySelector(`#check-button-${tasksN.indexOf(taskN)}`).parentElement;
    listItem.remove(); // Entferne das Listenelement
  });

  tasksN = tasksN.filter(taskN => !taskN.checked); // Filtere die tasksN-Array, um die ausgewählten Elemente zu entfernen
  localStorage.setItem("tasksN", JSON.stringify(tasksN));;}   // löscht den gesamten local storage


// Beim Laden der Seite Elemente rendern
renderTasksN();



  // Konsolenausgaben in HTML-Fenster umleiten
  (function() {
    var oldLog = console.log;
    console.log = function(message) {
      // Konsolenausgabe abfangen und in das HTML-Fenster einfügen
      var consoleOutput = document.getElementById('consoleOutput');
      consoleOutput.innerHTML += '<p>' + message + '</p>';

      // Original Console.log-Funktion aufrufen
      oldLog.apply(console, arguments);
    };
  })();
  
  // Beispiel-Konsolenausgaben
  console.log('Dies ist eine Konsolenausgabe');
  console.log('Eine weitere Ausgabe');
