// JavaScript Document
console.log("hi");

let deButton = document.querySelector("header nav button");

let hetMenu = document.querySelector("header nav");

deButton.addEventListener("click", toggleButton);

function toggleButton(){
 hetMenu.classList.toggle("is-open");
}