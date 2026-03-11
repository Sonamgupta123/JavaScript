let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id);

let para = document.querySelector("p");
console.log(para.getAttribute("class"));

let newHeading = document.createElement("h1");// for creating new element without touchig html code
newHeading.innerHTML = "<i>Hi,Iam new! </i>";

document.querySelector("body").prepend(newHeading);

let button = document.createElement("button");
button.innerText ="Click me!";

document.querySelector("body").append(button);

let para1 = document.querySelector("p");
para1.remove();// for removing