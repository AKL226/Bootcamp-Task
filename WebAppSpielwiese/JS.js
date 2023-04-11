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

// Add event listeners
addBtn.addEventListener("click", addItem);
list.addEventListener("click", deleteItem);
clearBtn.addEventListener("click", clearList);

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


