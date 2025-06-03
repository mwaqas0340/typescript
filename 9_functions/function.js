// function myFun():void {
//      console.log("void function");
// }
// myFun()
// function myFun2():string {
//     return "return function"
// }
// console.log(myFun2())
// function myFun3(num1:number,num2:number):number {
//     return num1+num2
// }
// console.log(myFun3(3,5))
// function myFun() {
//     return idCard   
//   }
//   let idCard = {
//        Name: "Muhammad Waqas", 
//        RollNo: 226811,
//        City: "Mirpurkhas",  
//        Center: "Governor House Karachi",
//        Campus: "Main",
//        Batch: 1
//   }
//   console.log(myFun());
// function myIntro(firstName:string,lastName:string,castName?:string) {
//     return firstName+lastName
// }
// console.log(myIntro("Muhammad ","Waqas ","Rajpoot"));
// function myFun(num:number) {
//     if (num<=0) {
//         return;
//     }
//     console.log("Number",num);
//     myFun(num-1)
// }
// myFun(5);
// function myFun(num:number) {
//     if (num>10) {
//         return;
//     }
//     console.log(num);
//     myFun(num+2)
// }
// myFun(2)
// function toGaz(fit:number) {
//     let gaz1 = fit*2.5;
//     console.log(gaz1);
// }
// toGaz(3)
// function divide(num:number) {
//     let myNumber = num/3
//     console.log(myNumber);
// }
// divide(15)
// function greet(message="Hello, World!"):string {
//     return message
// }
// let msg = greet()
// console.log(msg);
// function myFun(name:string,age:number): {name:string,age:number}{
//     return {name,age};
// }
// console.log(myFun("waqas ",22));
// function greet(name?:string):string {
//     return `Hello, ${name}`} 
//     let message=greet()
//     console.log(message);
// function myFunc2(id:number[]|number) {
//     return id
// }
// console.log(myFunc2([1,2,3,4,5]))
// type myType={
//     a: number
//     b:number
// }
// function myFunc(num:myType) {
//     console.log("value of a is = "+num.a);
//     console.log("value of b is = "+num.b);
// }
// myFunc({a:10,b:20})
// interface myType2{
//     a: number
//     b:number
// }
// function myFunc2(num:myType2) {
//     console.log("value of a is = "+num.a);
//     console.log("value of b is = "+num.b);
// }
// myFunc({a:10,b:20})
// function myFunc1(person:{name:string,age:number}) {
//     return person
// }
// console.log(myFunc1({
//     name: "Waqas",
//     age: 22
// }));
// interface Person{
//    name: string
//    age: number
//    city: string
// }
// function myFunc2(person:Person) {
//     return person
// }
// console.log(myFunc2({name: "Waqas",age: 22,city:"Mirpurkhas"}));
// let myFun = function(a:number,b:number):number{
//     return a+b
// }
// let myFun1:(a:number,b:number)=>number=function(a:number,b:number){
//   return a+b
// }
// console.log(myFun1(2,5));
// let myFun2=(a:number,b:number)=> a+b
// function applyDiscount(price:number,discout:number=0.05) {
//     return price *(1-discout)
// }
// console.log(applyDiscount(100));
// function myFun1(...name:string[]) {
//     return name
// }
// let fruits = myFun1("Apple","Mango","Orange")
// console.log(fruits.join());   
// function add(...num:number[]) {
//    return num
// }
// console.log(add(1,2,3,4,5));
// function myFun(callback:any) {
//     console.log("myFunc");
//     callback()
// }
// function result() {
//     console.log("result");  
// }
// myFun(result);
// function test():Promise<void>{
//   return new Promise((resolve,reject)=>{
//   console.log("InshaAllah, I will attempt out test next wednesday.");
//   resolve()
//   // setTimeout(() => {
//   // console.log("I was not attempt out test previous week"); 
//   // }, 1000);
//   // reject()
//     })
// }
// function result():Promise<void> {
//   return new Promise((resolve,reject)=>{
//   console.log("I have passed.");
//   resolve()
//   })
// }
// async function myFun() {
//     try {
//      await test();
//      await result();   
//     } 
//     catch (error) {
//      console.log(error);  
//     }
// }
// test()
// result()
// function myFun() {
//   return new Promise<void>((resolve,reject)=>{
//   let score = 30;
//   if (score<=50 && score>=21) {
//     console.log("Your score is, "+score +" Passed.");
//     resolve()
//   } else {
//     console.log("Your score is, "+score+" Failed.");
//     reject()
//   }
//   })
// }
// async function result() {
//  try {
//   await myFun()
//   console.log("Congratualation...");
//  } 
//   catch (error) {
//   console.log(error);
//   console.log("Try again."); 
//  } 
// }
// result()
// function dataRecieve() {
//   return new Promise<void>((resolve,reject)=>{
//   setTimeout(() => {
//     console.log("continue data");
//     resolve()
//   }, 1000);
//   })
// }
// function dataReject() {
//   return new Promise((resolve,reject)=>{
//   setTimeout(() => {
//     console.log("data reject");
//     reject
//   }, 1000);
//   })
// }
// async function myFun() {
//   try {
//     await dataRecieve()
//     await dataReject()
//   } 
//   catch(error) {
//     console.log(error);
//   }
// }
// myFun()
function func(name, age) {
    return name + age;
}
console.log(func("waqas", 24));
