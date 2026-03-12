let Data = "secret info";

class User{
 constructor(name,email){
     this.name=name;
    this.email=email;  
 }

 viewData(){
    console.log("data = ",Data);

 }
}
class Admin extends User{
    constructor(name,email){
     super(name,email);
    }
    editData(){
        Data = "some new data";
    }
}

let student1 = new User("sonam","s@gmail.com");
let admin1 = new Admin("sonam","s1@gmail.com");