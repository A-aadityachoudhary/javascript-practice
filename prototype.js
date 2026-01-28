// The JavaScript prototype property allows you to add new properties to object constructors:

function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}
Person.prototype.nationality = "india";
const father = new Person("john", "doe",23,"black",)
// console.log(father.nationality);

//The JavaScript prototype property also allows you to add new methods to objects constructors:
Person.prototype.name = function(){
    return this.firstName + " " + this.lastName;
}
console.log(father.name()) //parenthesis is necccessary otherwise work nhi krega;
