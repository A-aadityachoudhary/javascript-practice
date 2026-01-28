
// Create a new Set
const letters = new Set(["a","b","c"]);
/*
console.log(typeof letters);
//checking instance
console.log(letters instanceof Set);
//size
console.log(letters.size)
//has method
console.log(letters.has("d"))
//for-each loop;
*/
// let text="";
// letters.forEach(function(x){
//     text += `${x} ` ;
// });
// console.log(text)

// The entries() method is supposed to return a [key,value] pair from an object.

// A Set has no keys, so the entries() method returns [value,value].

// const it = letters.entries();
// // List all Entries
// let text = "";
// for (const entry of it) {
//   text += entry;
// }
// console.log(text)

//union of sets
const A = new Set(['a','b','c']);
const B = new Set(['b','c','d']);
// const C = A.union(B);
// console.log(C)
// const D = A.intersection(B);
// console.log(D)
// const D = A.difference(B);
// console.log(D)
// console.log(A.isSupersetOf(B));
// console.log(A.isDisjointFrom(B));


// Create a WeakSet
let mySet = new WeakSet();

// Create an Object
let myObj = {fname:"John", lname:"Doe"};

// Add the Object
mySet.add(myObj);

// Delete the Object
mySet.delete(myObj);

// Do I have myObj in the mySet?
let answer = mySet.has(myObj);