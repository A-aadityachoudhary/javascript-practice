//////////union operator
function statusCode(code:number|string){
    console.log(`the code is ${code}`)
}
statusCode(404)
statusCode("404") ///both will work 

///////functions
function getTime():number{
    return new Date().getTime()
}
console.log(getTime());



//////The type void can be used to indicate a function doesn't return any value.
function printHello(): void {
  console.log('Hello!');
}

console.log(printHello())

/////
function multiply(a: number, b: number) {
  return a * b;
}
console.log(multiply(2,4))




//////optional parameter
function add(a: number, b: number, c?: number) {
  return a + b + (c || 0);
}
console.log(add(2,3))
console.log(add(2,3,6))  //both will work.


////default parameter
function pow(value: number, exponent: number = 10) {
  return value ** exponent;
}

console.log(pow(2,2))
console.log(pow(2)) //both will work.


