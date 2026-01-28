const person1 = { name: "John" };
const person2 = { name: "Paul" };
const person3 = { name: "Ringo" };

//greet func
function greeting(greet){
    return greet + " " +this.name ;

}
let message = greeting.call(person1, "hello");
console.log(message)