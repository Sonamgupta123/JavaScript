// Day-5 of JS
// Functions concept in JS - it prevents redundancy
//in Js there is not need to write return type
function myFun(){
  console.log("Hi sonam");
  console.log("leraning JS")  
}

myFun();//calling/invoke

// parameters in function

function myFunction(msg){ //parameter
console.log(msg);

}
myFunction("I learn JS");//argument

function sum(x,y){
    //local variables -x,y
    s=x+y;
    return s;
// console.log(x+y);
}
// sum(2,3);

let val = sum(3,4);
console.log(val);

// Arrow functions- modern JS
const mul=(a,b)=> {
// console.log(a*b);
return a*b;
}
console.log(mul(2,3));
