/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  generateExcuse();
};

let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = ["before the class", "when I was sleeping", "while I was exercising", "during my lunch", "while I was praying"];

function generateRandomNumber(arr) {
  return Math.floor(Math.random() * arr.length);
}

function generateExcuse() {
  let excuse = document.getElementById("excuse");
  excuse.innerHTML = `${who[generateRandomNumber(who)]} ${action[generateRandomNumber(action)]} ${what[generateRandomNumber(what)]} ${when[generateRandomNumber(when)]}`;
}
