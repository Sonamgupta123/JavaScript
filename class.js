class ToyotaCar{
    constructor(brand,mileage){
        console.log("creatig new object");
        this.brand=brand;
        this.mileage=mileage;
    }
 start(){
    console.log("start");
 }
 stop(){
    console.log("stop");
 }

//  setBrand(brand){
//     this.brand = brand;
//  }
}

let fortuner = new ToyotaCar("fortuner",10);
// fortuner.setBrand("fortuner");
console.log(fortuner);
let lexus = new ToyotaCar("lexus",20);
console.log(lexus);

// class Parent{
//     hello(){
//         console.log("hello");
//     }
// }
// class Child extends Parent{

// }
// let obj = new Child();

class Person{
    constructor(){
        this.species = "homo";
    }
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
}
class Engineer extends Person{
    constructor(branch){
        super();
        this.branch = branch;
    }
    work(){
        super.eat();
        console.log("solve problems");
    }
}

let engObj = new Engineer("chemical engineering");

