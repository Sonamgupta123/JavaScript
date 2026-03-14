//Day-11 of JS
//API CALL or fetch api etc

const URL = "https://api.agify.io/?name=meelad";

// let promise = fetch(URL);
// console.log(promise);

const getFacts = async()=>{
    console.log("getting data...")
 let response = await fetch(URL);
 console.log(response); 
 let data = await response.json();
 console.log(data);  
};
