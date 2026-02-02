type isString<T> = T extends string ? true:false;

type result1 = isString<string>;
type result2 = isString<boolean>


let a: result1 =true; // a has type 'true'
let b: result2 = false;
console.log(a)
console.log(b) //