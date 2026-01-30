// interface Point{
//     x:number;
//     y:number;
// };
// let point: Partial<Point> = {}
// point.x =10;
// console.log(point)

///// can also write in this form

// interface Point{
//     x:number;
//     y:number;
// };
// let point: Partial<Point> = {
//     x:10
// }

// console.log(point)



// interface Car {
//   make: string;
//   model: string;
//   mileage?: number;
// }

// let myCar: Required<Car> = {
//   make: 'Ford',
//   model: 'Focus',
//   mileage: 12000 // `Required` forces mileage to be defined
// };
// console.log(myCar)


/////record
// const ageMap:Record<string,number>={
//     "name":345,
//     "age":23
// }
// console.log(ageMap)



////Omit removes keys from an object type.

// interface Person{
//     name:string;
//     age:number;
//     location?:string;
// }
// const aaditya :Omit<Person,"name"|"location">={
//     age:123
// }
// console.log(aaditya)


/////pick
// interface Person {
//   name: string;
//   age: number;
//   location?: string;
// }

// const bob: Pick<Person, 'name'> = {
//   name: 'Bob'
//   // `Pick` has only kept name, so age and location were removed from the type and they can't be defined here
// };


/////readonly
interface Person {
  name: string;
  age: number;
}
const person: Readonly<Person> = {
  name: "Dylan",
  age: 35,
};
person.name = 'Israel'; ////Cannot assign to 'name' because it is a read-only property.
