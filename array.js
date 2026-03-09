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

let cities = ["delhi","indore","varanasi"];
for(let citiy of cities){
    console.log(citiy.toUpperCase());
}

// practice question
let sum =0 , avg =0 ;
let marks_arr=[30,56,78,89,90];
for(let el of marks_arr){
    sum = sum +el;
}
avg = sum/marks_arr.length;

console.log("average is ",avg);

// for each loop hota hai special array ke liye js mai 

let items =[250,645,300,900,50];
for(let i=0; i<items.length;i++){
    let offer = items[i] /10;
    items[i] -= offer;
}
console.log(items);

