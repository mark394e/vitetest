# _isLeapYear_ module tutorial

## How to install

With npm and Vite installed, just type `npm install --save leap-year` in any terminal.

## How to use

This module lets you use the `isLeapYear` function giving it any parameter as a number (year). The module will then determine if the year is a leap year or not and return it as a boolean (either _true_ or _false_).
Like this:

<pre><code>
isLeapYear(2020);
// => true <br>
isLeapYear(2022);
// => false
</code></pre>

**Remeber to write** `import isLeapYear from "leap-year"` **in the beginning of your JavaScript file.**

## How I've used it

I made a little website that takes the number from an input field, displays it in the h1 and determines if it's a leap year or not when pressing the submit button.

This is the JavaScript code for the program:

<pre><code>
import "./style.css";
import isLeapYear from "leap-year";

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

</code></pre>

Here is a link to my GitHub page: [isLeapYear](_insert github page link_)
