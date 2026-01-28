let text = ""
// for (let i = 0; i < 5; i++) {
//   text += `The number is " ${i} ;`
// }
// console.log(text)
// let i = 0
// do {
//   text +=  `${i} `;
//   i++;
// }
// while (i < 10);
// console.log(text)
/////////
// const person = {fname:"John", lname:"Doe", age:25};
// for (let x in person) {
//   text += `${person[x]} `;
// }
// console.log(text)

//over a set
// Create a Set
const letters = new Set(["a","b","c"]);

// Iterate over the set elementss;

// for (const x of letters) {
//   text += `${x} `;
// }
// console.log(text)

//checking bigger or not
// Create an Iterator
// const myIterator = Iterator.from("123456789");
// let result = myIterator.every(x => x > 5);
// console.log(result)
// Create an iterator
// const myIterator = Iterator.from([32, 33, 16, 40]);
// const filteredIterator = myIterator.filter(x => x > 18);
// console.log(filteredIterator)

// for (const x of filteredIterator) {
//   text += x ;
// }
// console.log(text)

//reducer function ---
// function myFunc(total, num){
//     return total+num;
// }
 const myIterator = Iterator.from([175, 50, 25]);

// let result = myIterator.reduce(myFunc);
// console.log(result)
// let result = myIterator.some(x=>x>30);
// console.log(result)
// Take the first five elements
const firstFive = myIterator.take(2);
for (const x of firstFive) {
  text += `${x} ` ;
}
console.log(text)