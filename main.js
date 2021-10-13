//Select DOM
const elementInput = document.querySelector(".main__top-input");
const addButton = document.querySelector(".main__top-add");
const deleteButton = document.querySelector(".main__top-delete");
const elementsList = document.querySelector(".main__bot-list");

//Events
document.addEventListener("DOMContentLoaded", displayList);
addButton.addEventListener("click", addElement);
deleteButton.addEventListener("click", deleteElement);

let elementsArr = [];
const AGE = 25;

if (localStorage.getItem("list") === null) {
  elementsArr = [];
} else {
  elementsArr = JSON.parse(localStorage.getItem("list"));
  console.log(elementsArr);
}

//Functions
function saveLocal(list) {
  localStorage.setItem("list", JSON.stringify(list));
}

function addElement(e) {
  e.preventDefault();

  const inputValue = elementInput.value;
  if (inputValue === "") {
    return alert("Пусте поле");
  } else if (elementsArr.length >= AGE) {
    return alert("Максимальна черга");
  } else {
    elementsArr.push(inputValue);
    console.log(elementsArr);
    saveLocal(elementsArr);
    displayList();
  }
}

function deleteElement() {
  elementsArr.shift();
  saveLocal(elementsArr);
  displayList();
}

function displayList() {
  let display = "";
  elementsArr.forEach((item) => {
    display += "<li>" + item + "</li>";
  });
  elementsList.innerHTML = display;
  elementInput.value = "";
}
