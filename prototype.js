//Day -9 Js
//studying class , object and prototype
// const student={
//     fullNmae: "sonam gupta",
//     marks:9.6,
//     printMarks: function(){
//     console.log("marks = ",this.marks);
//     },
// };

const employee ={
    calcTax(){
        console.log("tax rate is 10%");
    },
};

const karanArjun2 ={
    salary:50000,
};
const karanArjun3 ={
    salary:50000,
};

const karanArjun4 ={
    salary:50000,
};

const karanArjun5 ={
    salary:50000,
    calcTax(){
       console.log("tax rate is 20%"); // priority isko milegi kuki ye iske andar hai 
    },
};



karanArjun2.__proto__ = employee;
karanArjun3.__proto__ = employee;
karanArjun4.__proto__ = employee;
karanArjun5.__proto__ = employee;