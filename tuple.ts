// let ourTupple : [string, boolean, number];
//ourTupple = ["aadity", true, 10];
//console.log(ourTupple)///should be in same order otherwise it will throw error.


// ourTupple=["aaditya",true,23,"dfjjkd",23] //no type safety for the rest arguments.
// console.log(ourTupple)

// define our readonly tuple
//const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
// throws error as it is readonly.
//ourReadonlyTuple.push('Coding God took a day off');


//destructuring the tuple;
const graph : [number,number]=[23,354];
const [x,y]=graph
console.log(graph);

