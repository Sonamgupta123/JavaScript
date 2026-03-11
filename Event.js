// let btn1 = document.querySelector("#btn1");
// // btn1.onclick =()=>{
// //     console.log("btn1 was clicked");
// //     let a = 25;
// //     a++;
// //     console.log(a);//26
// //  };
// btn1.onclick =(evt)=>{
//     console.log(evt);
//    console.log(evt.type);
//    console.log(evt.target);
//    console.log(evt.clientX, evt.clientY);
//  };//event object

//  let div = document.querySelector("div");
//  div.onmouseover=(evt)=>{
//  // console.log("you are inside box")
//   console.log(evt);
//    console.log(evt.type);
//    console.log(evt.target);
//    console.log(evt.clientX, evt.clientY);
//  };

//  btn1.addEventListener("click",()=>{
//     console.log("add button 1 was clicked")
//  })
//  const handler2 = ()=>{
//     console.log("add button 1 was clicked - again")
//  };

//  btn1.addEventListener("click",handler2);

//  btn1.removeEventListener("click",handler2);

//practice question

let modeBtn=document.querySelector("#mode");
let curMode ="light";

modeBtn.addEventListener("click",()=>{
    if(curMode==="light"){
        curMode="dark";
    document.querySelector("body").style.backgroundColor ="black";
    }else{
        curMode="light";
    document.querySelector("body").style.backgroundColor ="white";
    }
    console.log(curMode);
});