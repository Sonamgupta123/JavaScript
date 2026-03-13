// let promise = new Promise((resolve,reject)=>{
// console.log("i am promise");
// resolve("success");
// // reject("some error occured");
// });

const getPromise = () =>{
    return new Promise((resolve,reject)=>{
        console.log("I am Promise");
        resolve("success");
        // reject("network error");
    });
};

let promise = getPromise();
promise.then(()=>{
    console.log("promise fullfilled");
});

promise.catch((err)=>{
    console.log("rejected",err);
})

// function getData(dataId,getNextData){
//  new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//     console.log("data" ,dataId);
//     resolve("success");
//     if(getNextData){
//         getNextData();
//     }
//  },2000);
//  });
// }