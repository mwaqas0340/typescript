"use strict";
//     name/key -> value      -> property  
//     myName:    "Waqas"     -> property
// const fullName = {
//      firstName: "Muhammad",
//      lastName: "Waqas",
//      age: function(){
//        let age = 23
//        return age
//      }
//  }
// console.log(fullName);
// const person1 = {
//     name: "Muhammad Waqas",
//     Cast: "Rajpoot",
//     email: "mwaqasrajpoot100@gmail.com",
//     mobile:+923400312073,
//     isMarried: false,
// }
// console.log(person1);
// const person2 = person1; //Pass by reference
// //console.log(person2);
//  person2.name="Kashif";
//  person2.email="mkashifrajpoot100@gmail.com",
//  person2.mobile=+923462228704
// // console.log(person1);
// console.log(person2);
// Empty object
// const myIntro:any = {};
// myIntro.name = "Waqas";
// myIntro.cast = "Rajpoot";
// myIntro.number = +923400312073;
// myIntro.email = "mwaqasrajpoot100@gmail.com";
// //delete myIntro.cast
// console.log(myIntro);
//Nested Object
// const myObject = {
//      name: "Waqas",
//      age: 22,
//      study:{
//         course1: "Software Engineering",
//         center1: "Karachi",
//         course2: "AD Science",
//         center2: "Mirpurkhas"
//      }
// }
// Nested object
// let myFruit={
//     fruit1: {
//       name: "apple",
//       colors: {
//          color1: "red",
//          color2: "golden" 
//       }
//   },
//     fruit2:{
//       name: "mango",
//       colors: {
//           color1: "green",
//           color2: "yellow"
//       }
//     }
//   }
//   console.log(myFruit.fruit1.colors);
// console.log(myObject);
// Literal object
// const myIntro = {
//     name: "Muhammad Waqas",
//     Cast: "Rajpoot",
//     email: "mwaqasrajpoot100@gmail.com",
//     mobile:+923400312073,
//     isMarried: false,
//     study: ["Software development","AD Science"],
//     myName: function(){
//         return this.name +" "+ this.Cast 
//     }
// }
// //myIntro.mobile = +923487263847 // update mobile number
// console.log(myIntro);
//console.log(`myIntro.my name is .${name}`)
// console.log(myIntro.email);
// console.log(myIntro.study.length);
//  function myCar(para: any) {
//     const car = {  
//     name: "Corola",
//     model: 2024,
//     engine: "1500cc",
//     price: "PKR/500000",
//     color: "White",
//     available: true, 
//  } 
//  console.log(car);
//  return car  
//  }
//   console.log(myCar("car"));
//      const person = {
//      drink: "water",
//      food: "meal,meat,vegetables and fruits",
//      rest: "sleep",
//      eat :function(){
//        console.log("I am eat", this.food)
//      }
//  }
//    person.eat();
// Required property                         //optional 
//  const myMobile :{ ram: number; rom: number;  battery?: number; infinix: string;}
//      ={
//         ram : 128,
//         rom : 6,
//         //battery : 6000,
//         infinix : "note 8i",
//       }
//      console.log(myMobile);
//Index Signature
// const person :{
//     [key:string]:string|number
// }={
//     name: "Waqas",
//     age: 22,
//     email: "mwaqasrajpoot100@gmail.com",
//     mobile: +923400312073,
// }
// console.log(person);
// const person2:{
//     name: string,
//     age: number,
//     email: string,
//     mobile: number
// }={
//     name: "Waqas",
//     age: 22,
//     email: "mwaqasrajpoot100@gmail.com",
//     mobile: +923400312073
// }
// console.log(person2);
// Type Aliases
// type name = string
// type age = number
// type email = string
// type mobile = number
// const type={
//     name: "Waqas",
//     age: 22,
//     email: "mwaqasrajpoot100@gmail.com",
//     mobile: +923400312073
// }
// console.log(type);
// const type2 = type;
// type.name= "Fahham"
// console.log(type2);
//Type Interfaces
// interface person{
//     name:string,
//     gender: string,
//     age: number,
//     batch:number,
// }
//  const student1:person={
//     name: "Muhammad Waqas",
//     gender: "Male",
//     age: 22,
//     batch: 1,
//     } 
// console.log();
//  const student2:person={
//     name: "Muhammad Kashif",
//     gender: "Male",
//     age: 24,
//     batch: 1,
//  }
// console.log("student2",student2);
// interface person{
//      name:string,
//      age: number,
//      email: string,
// }
// interface student1 extends person{
//      course: string,
//      center: string,
//      batch: number,
// }
// interface teacher1 extends student1{
//      job: string,
//  }
// const student1 = {
//      name: "Waqas",
//      age: 22,
//      email: "mwaqasrajpoot100@gmail.com",
//      course: "Programming",
//      center: "Governor House Karachi",
//      batch: 1
// }
// const teacher1 = {
//      name: "Zia Khan",
//      age: 62,
//      email: "ziakhan675@gmail.com",
//      job: "Senior Web developer"
// }
// console.log(student1);
// console.log(teacher1);
//  interface myCar {
//    brand:string,
//    name: string,
//    color: string,
//    engine:string,
//    year: number,
// }
// const car1:myCar={
//     brand:"toyota",
//     name: "corolla",
//     color:"white",
//     engine: "1500cc",
//     year: 2024,
//  }
// console.log(car1);
// const car2:myCar={
//     brand:"honda",
//     name: "city",
//     color:"gray",
//     engine: "1600cc",
//     year: 2025,
//  }
// console.log(car2);
// type brand=string
// type name=string
// type year=number
// type color=string
// type engine=string
// const type={
//     brand:"toyota",
//     name: "corolla",
//     color:"white",
//     engine: "1500cc",
//     year: 2024, 
// }
// console.log(type);
// const type2={
//     brand:"honda",
//     name: "city",
//     color:"gray",
//     engine: "1600cc",
//     year: 2025,
//  }
// console.log(type2);
// interface std{
//     name:string
//     age: number
//     rollNum: number
// }
// interface medStd extends std{
//     degree: string
// }
// interface engStd extends medStd{
//     degree: string
//     skill: string
//     live: string
// }
// const medStd ={
//     name:"Ali",
//     age:23,
//     rollNum: 2345,
//     degreee: "mbbs"
// }
// const engStd ={
//     name:"Ali",
//     age:23,
//     rollNum: 2345,
//     degreee: "software engineer",
//     skill: "Web developer",
//     live: "Mirpurkhas"
// }
// console.log(medStd);
// console.log(engStd);
// type stdCard={
//     name: string
//     age: number
//     passward: number
//     city:string
// } 
// interface stdCard{
//     name: string
//     age: number,
//     email:string
//     passward: number
//     city:string
// }  
// const idCard1:stdCard={
//     name:"Waqas",
//     age: 22,
//     email:"mwaqas100@gmail.com",
//     passward: 2073,
//     city:"Mirpurkhas",
// }
// const idCard2:stdCard={
//     name: "Ahmed",
//     age: 20,
//     email:"ahmed13e@gmail.com",
//     passward: 2365,
//     city: "Hyderabad",  
// }
// console.log(idCard1,idCard2);
// let myJson = [{
//     "name": "Waqas",
//     "age": 22,   
// },{
//     "name": "Kashif",
//     "age": 24,
// }]
// console.log(myJson);
// interface myIntro{
//     name: string,
//     age: number,
//     gender: string,
//     course: string[],
// }
// let intoduction:myIntro={
//     name: "Waqas",
//     age: 22,
//     gender: "male",
//     course: ["TypeScript","Python"]
// }
// console.log(intoduction);
// let myIntro = {
//     name: "Waqas",
//     age: 22,
//     gender: "male",
//     course: ["TypeScript","Python"],
//     func: function(){
//         return this.course
//     }
// }
// console.log(myIntro.func());
// let myFruit={
//     name: "apple",
//     color: "red",
//     eat: function(){
//         // console.log("My",this.name,"color is",this.color );   
//         return `My ${this.name} color is ${this.color}`
//     }    
// }
// // myFruit.eat()
// console.log(myFruit.eat());
// interface Apple {    
//     name: string
//     color: string
//     isSweet: boolean
//     season: string
// }
// let apple: Apple={
//     name: "apple",
//     color: "golden",
//     isSweet: true,
//     season: "winter"
// }
// console.log(apple);
// interface Mango extends Apple{    // extend is not use type, but only use interface.
//     favorite: string
//     king: string
// }
// let mango: Mango ={
//     name: "mango",
//     color: "yellow",
//     isSweet: true,
//     season: "summer",
//     favorite: "i like",
//     king: "king of fruits"
// }
// console.log(mango);
// let fruit ={
//     name: "apple",
//     color: "golden",
//     isSweet: true,
//     season: function(){
//         return `${this.name} is winter fruit`
//     }
// }
// console.log(fruit.season().charAt(0).toUpperCase()+fruit.season().slice(1).toLowerCase());
// interface Person{
//     readonly name:string
//     readonly age:number 
// }
// let person:Person={
//     name: "Waqas",
//     age: 22,
// }
// console.log(person);
