import "./style.css";
import isLeapYear from "leap-year";
// import shuffle from "just-shuffle";

document.querySelector("#submit").addEventListener("click", getYear);

document.querySelector("#year-input").addEventListener("input", updateText);

function updateText() {
  const inputYear = document.querySelector("#year-input").value;
  document.querySelector("#submitted-year").textContent = inputYear;
  document.querySelector("#result").textContent = "";
}

function getYear() {
  const inputYear = document.querySelector("#year-input").value;
  displayYear(inputYear);
}

function displayYear(inputYear) {
  const inputYearNumber = Number(inputYear);
  if (isLeapYear(inputYearNumber)) {
    document.querySelector("#result").textContent = "yes.";
  } else {
    document.querySelector("#result").textContent = "no.";
  }
}

// let shuffledArray = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// console.log(shuffledArray);

isLeapYear(2020);
// => true

isLeapYear(2022);
// => false
