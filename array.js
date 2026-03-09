// Day-4 of JS
// Array in Js
//array are muttable in js
let marks=[89,92,63,78];
console.log(marks);
console.log(marks.length);
console.log(marks[0]);
marks[2] = 66;
console.log(marks);
// for loop
for(let i=0 ; i<marks.length;i++){
    console.log("array value are " ,marks[i]);
}
//for of preffer for array
for (let el of marks){
 console.log(el);
}

