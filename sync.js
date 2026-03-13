// console.log("one");
// console.log("two");
// setTimeout(()=>{
// console.log("hello");
// },4000);
// console.log("three");
// console.log("four");

// const hello =()=>{
//     console.log("hello1");
// };

// setTimeout(hello,3000);//callback function 

function getData(dataId,getNextData){
 setTimeout(()=>{
    console.log("data" ,dataId);
    if(getNextData){
        getNextData();
    }
 },2000);
}

getData(1,()=>{
    getData(2,()=>{
        getData(3);
    });
});