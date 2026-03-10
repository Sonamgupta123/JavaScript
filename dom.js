//Day-6 of JS
// Concept of Dom
// console.log("hello");
// //window.console.log("hello2");// object created by browser not js contains predefined keywords
// console.dir(document);
// console.dir(document.head);

let heading = document.getElementById("heading");
console.dir(heading);

let paras = document.getElementsByClassName("para");
console.dir(paras);
console.log(paras);

let buttons = document.getElementsByTagName("button");
console.dir(buttons);

let elements = document.querySelector("p");
console.dir(elements);

let div = document.querySelector("div");
console.dir(div);