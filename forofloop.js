// for-of and for-in loop concept
let str ="sonam gupta";

let size = 0;
for(let i of str ){
    console.log("i= ",i);
    size++;
}

console.log("size of string = ",size);

// for-in loop

let student={
    name : "Sona Gupta",
    age :20,
    cgpa: 8.5,
    isPass : true
};

for(let k in student){
    console.log("object keys = ",k, "value = ",student[k]);
}

//print all even num from 0 to 100
for(let num= 0 ; num<=100 ;num++){
    if(num%2==0){
        console.log("even num :",num);
    }
}
let cnt = 0;
for(let num = 0 ; num<=10;num++){
    if(num%i==0){
        cnt++;
    }
}
if(cnt==0){
    cout<<"prime num "<<endl;
}else{
    cout<<"non prime"<<endl;
}

// create a game in which given any random num user have to guess it!

// let gameNum = 25;

// let userNum = prompt("Guess the game num : ");

// while(userNum != gameNum){

//    userNum = prompt("You entered wrong game num : Guess again ");

// }
// console.log("Congratulations you entered the right number");
