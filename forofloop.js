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