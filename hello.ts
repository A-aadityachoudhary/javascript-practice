// function greet(name : string):string{
//     return `hello ${name}`;
// }
// const message:string = greet("aaditya");
// console.log(message)

///addition function
// function add(a: number, b: number): number {
// return a + b;
// }

// console.log(add("5", 3)); ////it will show error in console.


const data = JSON.parse('{ "name": "Alice", "age": 30 }');

// 2. Variables declared without initialization
// let something;  // Type is 'any'
// something = 'hello';
// something = 42;  // No error
// console.log(something)

// let y: undefined = undefined;
// console.log(typeof y);

// let z: null = null;
// console.log(typeof z);

////arrays in typescript
// const names:string[] = [];
// names.push("aaditya");
// console.log(names)

///using readonly;;
// const names1: readonly string[] = ["aaditya"];
// names1.push("aadil") ///show error
// console.log(names1)

///example
// const number = [1,2,3];
// number.push(4);
// number.push("5"); /// show error;
// console.log(number)