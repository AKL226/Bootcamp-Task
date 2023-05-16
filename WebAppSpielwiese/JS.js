document.addEventListener("DOMContentLoaded", () => {
  const passwordInput = document.getElementById("passwordInput");
  const showPasswordButton = document.getElementById("showPasswordButton");

  showPasswordButton.addEventListener("click", () => {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  });
});


const textInput = document.getElementById('text-input');
const updateButton = document.getElementById('update-button');

updateButton.addEventListener('click', function() {
  const text = textInput.value;
  updateButton.innerHTML = text;
});






// mein Zähler mit Storage------------------------------------------------------------------------------------------------

let count = 0;
		const outputField = document.getElementById("outputField");           // das Ausgabe Feld
		const incrementBtn = document.getElementById("incrementBtn");         // Button hoch
		const decrementBtn = document.getElementById("decrementBtn");         // Button runter

    const storedValueINT = localStorage.getItem("myInputValueINT");       // Variable ob im Local Storage "myInputValueINT" vorhanden
    if (storedValueINT) {                                                 // Wenn ja, dann nehme dessen Wert, schiebe in outputField 
        outputField.value = storedValueINT;
    }

		
		incrementBtn.addEventListener("click", () => {                        // by dem Event click zähle hoch
		
			outputField.value ++;
      localStorage.setItem("myInputValueINT", outputField.value)          // speicher ab in dem Local Storage den Wert im outputField mit der ID myInputValueINT 
		});
		
		decrementBtn.addEventListener("click", () => {                        //

			outputField.value  --;
      localStorage.setItem("myInputValueINT", outputField.value)

		});




// meine Texteingabe --------------------------------------------------------------------------------------------
// Get the input field and the stored value from local storage
const inputField = document.getElementById("input-field");
const storedValue = localStorage.getItem("myInputValue");

// If there's a stored value, set it as the input field's value
if (storedValue) {
  inputField.value = storedValue;
}

// Add an event listener to the input field that saves the value to local storage
inputField.addEventListener("input", () => {
  localStorage.setItem("myInputValue", inputField.value);
});




// --------------------------- Aufgabe 1  mit Delete Button , Clear Button -------------------------------------------------------------
// Get HTML elements
const input = document.getElementById("input");
const addBtn = document.getElementById("addBtn");
const liste = document.getElementById("list");


const storedValueList = localStorage.getItem("myInputValueList"); 




// Add event listeners
addBtn.addEventListener("click", addItem);
liste.addEventListener("click", deleteItem);



// Function to add a new item to the list
function addItem() {
                      // Get input value and create new list item element
                      const inputValue = input.value.trim();
                      if (inputValue === "") return; // Ignore empty input
                      const listItem = document.createElement("li");
                      listItem.innerText = inputValue;

                      // Create delete button for the list item
                      const deleteBtn = document.createElement("button");
                      deleteBtn.innerText = "X";
                      deleteBtn.classList.add("deleteBtn");
                      listItem.appendChild(deleteBtn);

                      // Add new list item to the list
                      liste.appendChild(listItem);

                      // Clear input field
                      input.value = "";

               
}

// Function to delete a list item
function deleteItem(event) {
  if (event.target.classList.contains("deleteBtn")) {
    event.target.parentElement.remove();
  }
}











//-------------------------------------------------------- Aufgaben 2 die dritteeee -------------------------------------------------------------------------------------------


// Alle Elemente aus dem LocalStorage laden
let tasks = JSON.parse(localStorage.getItem('tasks')) || []; // parse wandelt aus json Format um und packt es in den string Tasks
console.log(tasks);                                          // weil wir es unten in tasks verpacken!!!
                                                             // Fallback funktion -> wenn nichts gefunden, erstelle ein leeres array!


// wird ausgeführt
// wenn ein neue Aufgabe hinzugefügt wird UND beim Aktualisieren der Seite! 
// Elemente rendern
function renderTasks() {                                    // wird in den anderen Funktion aufgerufen!
  const taskList = document.querySelector('#taskList3');    // packt die Scheiße in das erste Element der HTML ,  <ul id="taskList3">
  taskList.innerHTML = '';                                  // hier wird es geleert, puff
  tasks.forEach((task) => {          
    const li = document.createElement('li');                // erstellt den neuen Eintrag
    li.textContent = task;                                  // hier wird der Paramete für li. gesetzt // task ist der Platzhalter(speicher) für jeden Durchlauf der Schleife forEach
    taskList.appendChild(li);                               // hier wird li der taskList hinzugefügt                       
  });
}

// Neue Aufgabe hinzufügen
function addTask() {
  const newTaskInput = document.querySelector('#newTask');      // Suche nach HTML-Eintrag Input Feld #newTask 
  const newTaskText = newTaskInput.value.trim();                //Trim Methode zum Elemenieren aller Leerzeichen. nimm der Wert aus dem Input Variable 
  if (newTaskText.length === 0) {
    return;
  }
  tasks.push(newTaskText);                                      // füge durch die Methode.push die Variable dem Array hinzu
  localStorage.setItem('tasks', JSON.stringify(tasks));
  newTaskInput.value = '';
  renderTasks();
}

// Event-Handler registrieren
document.querySelector('#addTask').addEventListener('click', addTask);          // suche im HTML Dokument nach #add Task, dann bei einem Even click, Funktion ausführen
document.querySelector('#newTask').addEventListener('keypress', (event) => {    // durch eingabe und enter 
  if (event.key === 'Enter') {
    addTask();
  }
});

// Beim Laden der Seite Elemente rendern
renderTasks();        // beim aktualisieren wird der "alte" Inhalt wieder eingefügt




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


function clearListee() {localStorage.removeItem('tasksN');location.reload();}   // löscht den gesamten local storage


// Beim Laden der Seite Elemente rendern
renderTasksN();





// ------------------------------------- CHECKBOX

