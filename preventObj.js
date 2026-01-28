
// use strict mode is compulsory for these checking...
"use strict"
const person = {firstName:"John", lastName:"Doe"};
Object.preventExtensions(person)
let text = "";
try {
    person.nationality = "india";
    
} catch (error) {
    text=error.message;
    
}
console.log(text)

let answer = Object.isExtensible(person); //to check is extensible or not....
console.log(answer)


////////////seal is for making the object fixed ...can't change the object.
Object.seal(person)
text = ""
try {
    delete person.lastName;
    text = Object.values(person)
} catch (error) {
    text = error.message
    console.log(text)
}

/////to check is seal() method is applied or not.
let toKnow = Object.isSealed(person)
console.log(toKnow)


////freeze method......works same as seal
const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

// Freeze Object
Object.freeze(person1)

// Test Error
try {
  person.age = 51;
  text = Object.values(person1);
}
catch (err) {
  text = err.message;
  console.log(text)
}


//////to check freeze() is used or not before
let answer1 = Object.isFrozen(person1)
console.log(answer1)