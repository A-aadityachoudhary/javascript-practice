////Casting is the process of overriding a type.
let x: unknown = 'hello';

console.log((x as string).length);

// let y: unknown = 4;
// console.log((y as string).length);


let z:unknown = "hello world!";
console.log((<string>z).length);


let p = 'hello aaditya how are u';
console.log(((p as unknown) as string).length);