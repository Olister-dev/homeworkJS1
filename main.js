//Select DOM
const elementInput = document.querySelector(".main__top-input");
const addButton = document.querySelector(".main__top-add");
const deleteButton = document.querySelector(".main__top-delete");
const elementsList = document.querySelector(".main__bot-list");

//Events
document.addEventListener("DOMContentLoaded", displayElement);
addButton.addEventListener("click", addElement);
deleteButton.addEventListener("click", deleteElement);

elementsArr = [];

//Functions
function saveLocal(list) {
  localStorage.setItem("list", JSON.stringify(list));
}

function addElement(e) {
  e.preventDefault();

  const inputValue = elementInput.value;
  const tempArr = {};
  if (inputValue === "") {
    return alert("Пусте поле");
  } else if (elementsArr.length >= 25) {
    return alert("Максимальна черга");
  } else {
    tempArr.input = inputValue;
    let i = elementsArr.length;
    elementsArr[i] = tempArr;
    console.log(elementsArr);
    saveLocal(elementsArr);
    displayElement();
  }
}

function deleteElement() {
  elementsArr.pop();
  saveLocal(elementsArr);
  displayElement();
}

function displayElement() {
  if (localStorage.getItem("list") === null) {
    localStorage.setItem("list", JSON.stringify([]));
  } else {
    const list = JSON.parse(localStorage.getItem("list"));
    let display = "";
    list.map((item) => {
      display += "<li>" + item.input + "</li>";
    });
    elementsList.innerHTML = display;
    elementInput.value = "";
  }
}
