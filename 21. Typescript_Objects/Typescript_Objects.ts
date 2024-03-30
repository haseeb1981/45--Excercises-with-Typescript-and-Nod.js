
// write  a program that creates objects containing these items.

// Datatype of person object
interface Person{
    age : number,
    name : string,
    nationality : string,
    Student : Boolean
}
// person object
let Person :Person = {
    age : 26 ,
    name : 'Haseeb',
    nationality : 'Pakistan' ,
     Student : true
}
// print person 
console.log(Person);

// datatype of car object
interface  car {
maker : string,
color :string
automatic : boolean

}
// car object
let car ={
maker : 'toyota',
color : 'Black' ,
automatic : true
}
// print car
console.log(car);
