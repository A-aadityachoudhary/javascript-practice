//creating class using constructor method
// class Car{
//     constructor(name,year){
//         this.name = name;
//         this.year = year;
//     }
// }
//creating object
// const car1 = new Car("ford", 2014);
// const car2 = new Car("range rover", 2024)

// console.log(car1.name + " is of " + car1.year + " model.")


//creating class using class method;
// class Car{
//     constructor(name,year){
//         this.name = name;
//         this.year = year;

//     }
//     age(){
//         const date = new Date();
//         return date.getFullYear() - this.year;
//     }
// }
// const myCar = new Car("Ford", 2014);
// console.log(myCar.age())


/////inheritance of classes

// class Car{
//     constructor(brand){
//         this.carname = brand;
//     }
//     present(){
//         return "having "+ this.carname   ///i am having this.carname.
//     }
// }
// class Model extends Car{
//     constructor(brand,mod){
//         super(brand);
//         this.model = mod;
//     }
//     show(){
//         return this.present() + ", is a " + this.model;
//     }
// }
// const myCar = new Model("Ford", "Mustang");
// console.log(myCar.show())


// //getter and setter.
// class Car {
//   constructor(brand) {
//     this.carname = brand;
//   }
//   get cnam() {
//     return this.carname;
//   }
//   set cnam(x) {
//     this.carname = x;
//   }
// }

// const myCar = new Car("Ford");
// console.log(myCar.carname)

////hoisting is not allowed in classes ....must right classes first then objects only.

////js static method
// class Car {
//   constructor(name) {
//     this.name = name;
//   }
//   static hello() {
//     return "Hello!!";
//   }
// }
// const myCar = new Car("ford");
// console.log(Car.hello()) ///give the output
// console.log(myCar.hello()) // gives error.


// If you want to use the myCar object inside the static method, you can send it as a parameter:

class Car {
  constructor(name) {
    this.name = name;
  }
  static hello(x) {
    return "hello " + x.name;
  }
}
const myCar = new Car("ford");

console.log(Car.hello(myCar)) 