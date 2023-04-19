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


// Get HTML elements
const input = document.getElementById("input");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");
const clearBtn = document.getElementById("clearBtn");
const addDesc = document.getElementById("description");


// Add event listeners
addBtn.addEventListener("click", addItem);
list.addEventListener("click", deleteItem);
clearBtn.addEventListener("click", clearList);
addDesc.addEventListener("click", addItem);

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
  list.appendChild(listItem);

  // Clear input field
  input.value = "";
}

// Function to delete a list item
function deleteItem(event) {
  if (event.target.classList.contains("deleteBtn")) {
    event.target.parentElement.remove();
  }
}

// Function to clear the list
function clearList() {
  list.innerHTML = "";
}

function addDescription(taskId) {
  var taskDescription = prompt("Gib eine Beschreibung für diese Aufgabe ein:");
  var descriptionElement = document.getElementById(taskId + "-description");
  descriptionElement.textContent = taskDescription;
}

// Definiere ein Objekt, das den Anfangszustand der Anwendung repräsentiert
const initialState = {
  tasks: [
    { id: 1, title: "Aufgabe 1", description: "" },
    { id: 2, title: "Aufgabe 2", description: "" },
    { id: 3, title: "Aufgabe 3", description: "" }
  ]
};

// Definiere die Aktionen, die auf den Zustand angewendet werden können
const actions = {
  addTask: (state, task) => {
    const newTask = { id: state.tasks.length + 1, title: task, description: "" };
    const updatedTasks = [...state.tasks, newTask];
    return { ...state, tasks: updatedTasks };
  },
  toggleTask: (state, taskId) => {
    const updatedTasks = state.tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    return { ...state, tasks: updatedTasks };
  },
  updateTaskDescription: (state, payload) => {
    const { taskId, description } = payload;
    const updatedTasks = state.tasks.map(task =>
      task.id === taskId ? { ...task, description } : task
    );
    return { ...state, tasks: updatedTasks };
  }
};

// Definiere eine Funktion, die den Zustand und die Aktion als Parameter akzeptiert und den neuen Zustand zurückgibt
function reducer(state, action) {
  const actionFunction = actions[action.type];
  return actionFunction ? actionFunction(state, action.payload) : state;
}

// Erstelle den Store
const store = {
  state: initialState,
  dispatch: function(actionType, payload) {
    this.state = reducer(this.state, { type: actionType, payload });
    console.log("Neuer Zustand:", this.state);
  }
};


