import "./styles.css";

const gitMain = document.querySelector("#gitMain");
const gitSecond = document.querySelector("#gitSecond");
const linkedTwo = document.querySelector("#linkedTwo");
const linked = document.querySelector("#linkedIn");
const battle = document.querySelector("#battleship");
const weather = document.querySelector("#weatherApp");
const todo = document.querySelector("#todoList");
const etch = document.querySelector("#etchSketch");
const admin = document.querySelector("#adminBoard");
const cafe = document.querySelector("#cafe");
const battleCode = document.querySelector("#battleCode");
const weatherCode = document.querySelector("#weatherCode");
const todoCode = document.querySelector("#todoCode");
const etchCode = document.querySelector("#etchCode");
const adminCode = document.querySelector("#adminCode");
const cafeCode = document.querySelector("#cafeCode");

gitMain.addEventListener("click", () => {
  window.location.href = "https://github.com/htkael/";
});

gitSecond.addEventListener("click", () => {
  window.location.href = "https://github.com/htkael/";
});

linked.addEventListener("click", () => {
  window.location.href = "https://www.linkedin.com/in/hunter-kael-38a422230/";
});

linkedTwo.addEventListener("click", () => {
  window.location.href = "https://www.linkedin.com/in/hunter-kael-38a422230/";
});

weather.addEventListener("click", () => {
  window.location.href = "https://htkael.github.io/Weather-App/";
});

battle.addEventListener("click", () => {
  window.location.href = "https://htkael.github.io/Battleship/";
});

todo.addEventListener("click", () => {
  window.location.href = "https://htkael.github.io/Todo-List/";
});

etch.addEventListener("click", () => {
  window.location.href = "https://htkael.github.io/EtchASketch/";
});

admin.addEventListener("click", () => {
  window.location.href = "https://htkael.github.io/Admin-Dashboard/";
});

cafe.addEventListener("click", () => {
  window.location.href = "https://htkael.github.io/Restaurant-Page/";
});

battleCode.addEventListener("click", (event) => {
  event.stopPropagation();
  window.location.href = "https://github.com/htkael/Battleship";
});

weatherCode.addEventListener("click", (event) => {
  event.stopPropagation();
  window.location.href = "https://github.com/htkael/Weather-App";
});

todoCode.addEventListener("click", (event) => {
  event.stopPropagation();
  window.location.href = "https://github.com/htkael/Todo-List";
});

etchCode.addEventListener("click", (event) => {
  event.stopPropagation();
  window.location.href = "https://github.com/htkael/EtchASketch";
});

adminCode.addEventListener("click", (event) => {
  event.stopPropagation();
  window.location.href = "https://github.com/htkael/Admin-Dashboard";
});

cafeCode.addEventListener("click", (event) => {
  event.stopPropagation();
  window.location.href = "https://github.com/htkael/Restaurant-Page";
});
