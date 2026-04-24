// const myPromise = new Promise((resolve, reject) => {
//     let success = true;

//     if (success) {
//         resolve("Task completed successfully!");
//     } else {
//         reject("Task failed!");
//     }
// });
// myPromise
//     .then((result) => {
//         console.log(result);   // success case
//     })
//     .catch((error) => {
//         console.log(error);    // error case
//     });
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data mil gaya!");
        }, 2000);
    });
}

fetchData()
    .then((data) => console.log(data))
    .catch((err) => console.log(err));