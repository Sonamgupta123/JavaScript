let newButtton = document.createElement("button");
newButtton.innerText = "Click me!";
newButtton.style.color ="white";
newButtton.style.backgroundColor="red";

document.querySelector("body").prepend(newButtton);

//practice question 2

let para = document.querySelector("p");
para.classList.add("newClass");
