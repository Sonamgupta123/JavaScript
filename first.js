console.log("Day-1 of JS");
console.log("console always print output in next line on browser");
console.log("Sonam Gupta");
// DataTypes (String, Number , Boolean , Null , Undefined , Symbol ,BigInt , Object)
age = 20;
console.log(age);
x = null;
console.log(x);
y = undefined;
console.log(y);
isfollow = true;
console.log(isfollow);
//In JS we doesn't need to tell which type of variable is (Dynamically Typed L.)
//Object - Collection of Values
const student= {
fullName :"Sonam G",
age:20,
cgpa : 9.61,
ispass: true
};
console.log(student["age"]);
//if we want to change assigned value of object 
student["age"] = student["age"]+1 ;
console.log(student["age"]); 