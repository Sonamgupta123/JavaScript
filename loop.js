//conditional stmt.
let age = 35;
if(age>18){
    console.log("you can vote");

}

if(age<18){
    console.log("you can't vote");
}

// if-else
    let mode = "dark";
let color;
    if(mode == "dark"){
        color = "black";
    }else{
        color = "white";
    }
    console.log(color); 

    //else - if
    if(age<18){
        console.log("junior");
    }else if(age>60){
        console.log("senior");
    }else{
        console.log("middle");
    } 

    //ternary op.
    //condition?true output :false output
    let result = age>18 ? "adult":"not adult";
    console.log(result); 

    //addition practice Q
    let num = prompt("Enter a Number");
    if(num%5 == 0){
        console.log(num," is multiple by 5");
    }else{
        console.log(num," is not multiple by 5");
    }
