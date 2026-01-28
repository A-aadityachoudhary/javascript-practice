// // const fruits = [
// // ["apples", 300],
// // ["pears", 900],
// // ["bananas", 500]
// // ];

// // const myObj = Object.fromEntries(fruits);
// // console.log(myObj)
// const person2 = {firstName: "Anne",lastName: "Smith"};



// // Assign Source to Target

// // console.log(Object.assign(fruits, person2));

// const x = person2;
// x.firstName="aaditya";
// console.log(person2.firstName);

//object constructor----
function Parent(firstname, lastname, age){
    this.firstname =firstname;
    this.lastname = lastname;
    this.age=age;

}
// const father = new Parent("jon", "doe", "50");
// console.log(father.firstname+" "+father.lastname+" "+father.age)
// //adding nationality to father;
// father.nationality= "india";
// console.log(father.nationality)

//we can destruct parameter from this function
let {firstname,lastname}=Parent;
console.log(firstname)
