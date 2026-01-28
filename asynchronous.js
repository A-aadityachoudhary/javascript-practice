// JavaScript Asynchronous Flow refers to how JavaScript handles tasks that take time to complete, like reading files, or waiting for user input, without blocking the execution of other code.

// To prevent blocking, JavaScript can use asynchronous programming.

// This allows certain operations to run in the background, and their results are handled later, when they are ready.

// asynchronous patterns
// Events
// Callbacks
// Promises
// Async/Await


// function myDisplayer(some){
//     console.log(some)
// }
// function myFirst() {
//   myDisplayer("Hello");
// }

// function mySecond() {
//   myDisplayer("Goodbye");
// }

// myFirst();
// mySecond();


/////////////////////////
// function myDisplayer(some) {
//   console.log(some);
// }

// function myCalculator(num1, num2) {
//   let sum = num1 + num2;
//   return sum;
// }

// let result = myCalculator(10,23);
// myDisplayer(result);

/////////or use this 
// function myDisplayer(some){
//     console.log(some);
// }

// function myCalculator(num1,num2){
//     let sum = num1 + num2;
//     myDisplayer(sum);
// }
// myCalculator(5,9)


/////using setTimeout function.....
// setTimeout(function(){myFunc("hello i am here!");},2000);
// function myFunc(value){
//     console.log(value)
// }


//////promises......
// function myDisplayer(some){
//     console.log(some)
// }

// let promise = new Promise(function(resolve,reject){
//     result = true;
//     if (result === true){
//         resolve("ok");
//     }else{
//         reject("not ok")
//     }
// });
// promise
// .then(
//     x=>myDisplayer(x)
//     );



///////example
function myDisplayer(some){
    console.log(some);
}
let promise= new Promise(function(resolve,reject){
    let x = 1;
    if (x===0){
        resolve("ok");
    }else{
        reject("fail")
    }
})
promise
.then(
    function(value){myDisplayer(value)},
    function(value){myDisplayer(value)}

)