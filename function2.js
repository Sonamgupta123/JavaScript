// function countVowels(str){
//     let count=0;
//     for (char of str){
//        if(char=="a"||char=="e"||char=="i"||char=="o"||char=="u"){
//         console.log(char);
//         count++;
//        }
//     }
    
//    return count;
// }

// console.log(countVowels("hello"));

// same with arrow function
const countVowels = (str)=>{
    let count=0;
    for (char of str){
       if(char=="a"||char=="e"||char=="i"||char=="o"||char=="u"){
        console.log(char);
        count++;
       }
    }
    
   return count;
}

console.log(countVowels("hello"));

//for each loop in array
let arr =[1,2,3,4,5];

// arr.forEach (function printVal(val){
// console.log(val);
// });
// this for each generally written in arrow function

// arr.forEach((val)=>{
// console.log(val);
// });
arr.forEach((val,idx,arr)=>{
console.log(val,idx,arr);
});

//one more method to use for each
let nums = [2,56,34];

let calSquare =(num)=>{
    console.log(num*num);
};
nums.forEach(calSquare);