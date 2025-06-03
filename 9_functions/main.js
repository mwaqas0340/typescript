"use strict";
// Basic Functions
//  function showMessage() {
//                    //Parameter
//      console.log("Hello World!");   
//  }  
//  showMessage();
//             //Argument
// Note: Rest, optional and default parameters can only be at the end of the parameter list.
// VOID FUNCTION 
// function greeting(name: string){
//   console.log(`Hello, ${name} you are study at typeascript`);
// }
//   greeting("Muhammad Waqas");
//   greeting("Fahham");
// function multiply(num1:number,num2:number){
//     console.log(num1+num2);
// }
//  multiply(4,8);
//  multiply(5,9);
// There are two types of parameter. (1)Optional parameter (2)Default parameter
// Optional Parameter
// function myIntro(name:string,student:string,country?:string){
//   console.log("My name is ",name);
//   console.log(`I am an ${job} student`);
//   if (country) {
//     console.log("My country name is ",country);
//   }
// }
//   myIntro("waqas","Artificial Intelligence","Pakistan");
//   console.log("==================");
//   myIntro("Ali","Data Science(params:type) 
// function myITCourse(course1:string,course2:string,course3?:string) {
//     console.log(`Before in this course you must have cover ${course1}`);
//     console.log(`Before in this course you must have cover ${course2}`);
//     if (course3) {
//         console.log(`You have cover ${course3}`);  
//     }      
// }
//    myITCourse("HTML","CSS")
// Default Parameter();
// function defaultPara(name:string="Waqas",study:string="IT",country:string="Pakistan") {
//        console.log(`My name is ${name}`);
//        console.log(`I am an ${study} student `);
//        console.log(`I am from ${country}`);  
// }
// function addNumber(num1:number=5,num2: number=4) {
//     console.log(num1+num2);
// }
//   addNumber()
// function findgrade(totalMark:number) {
//    if (totalMark <= 50 && totalMark >= 25) {
//       console.log("Passed");
//    }  else{
//       console.log("Failed");  
//    }
//    }
//     findgrade(30);
//     findgrade(23)
//     findgrade(47)
// function myFun(params1: string,params2:string) {
//    console.log(params1+params2);
// function addNumber(num1:number,num2:number) {
//   return num1+num2;
//   }
//   let sum = addNumber(2,5)
//   console.log(sum);
// RERURN FUNCTOIN
// function myFun(result:string){
//    console.log(result);  
//    return;
// }
// myFun("Waqas");
// myFun("Tanzeela");
// function myFun(para:string) {
//    return para;
// }
//   let myName = myFun("Waqas")
//   console.log(myName);
// function leptop(lat1:string,lat2:string,lat3:string) {
//   return (lat1+lat2);  
// }
// console.log(leptop("dell ","hp ","leno"));
// function addNumber(num1:number,num2:number,num3:number) {
//   return(num1+num2);
// }
// console.log(addNumber(2,4,5));
// function showMessage(name:any){
//                    //Parameter
//     console.log("Hello "+name);
// }
// showMessage("Muhammad");
// showMessage(45);
//           //Argument
// function myFun(pera1:number,pera2:number) {
// //return (2*4);
// }
// console.log(2*3);
// function myName(name:string,email:any,Passed:number) {
//     return name+email+Passed;
// }
//   console.log("Waqas","mwaqasrajpoot100@gmail.com",12345);
//   console.log("Kashif","mkashifrajpoot100@gmail.com",26477);
//   console.log("Asif","asifalirajpoot100@gmail.com",17864);
//   console.log("Rashid","rashidalirajpoot100@gmail.com",65242);
// function genTab(num1:number) {
// console.log(num1 +"x" +1+ "=" +num1*1);
// console.log(num1 +"x" +2+ "=" +num1*2);
// console.log(num1 +"x" +3+ "=" +num1*3);
// console.log(num1 +"x" +4+ "=" +num1*4);
// console.log(num1 +"x" +5+ "=" +num1*5);
// console.log(num1 +"x" +6+ "=" +num1*6);
// console.log(num1 +"x" +7+ "=" +num1*7);
// console.log(num1 +"x" +8+ "=" +num1*8);
// console.log(num1 +"x" +9+ "=" +num1*9);
// console.log(num1 +"x" +10+ "=" +num1*10);
// }
// genTab(3);
// genTab(4);
// function genTab(num1:number) {
// //const num1 = 5;
// for (let i = 1; i <= 10; i++) {
//   console.log(num1+ "x" +i+ "=" +num1*i);
// }
// }
// genTab(4);
// genTab(7);
// genTab(9)
// function myFun(params:string) {
//     let arr1 = ["apple","mango","banana","orange"]
//     return arr1
// }
// console.log(myFun("arr1"));
// console.log(myFun("arr1"));
// function myFun1(params1:any) {
//     let idCard = {
//         Name: "Muhammad Waqas",
//         RollNo: 226811,
//         City: "Mirpurkhas",
//         Center: "Governor House Karachi",
//         Campus: "Main",
//         Batch: 1
//     }
//     return idCard
//     }  
//     console.log(myFun1("idCard"));
// function myFun(price:number,discout:number=0.10) {
//     return price*(1-discout)
// }        
// console.log(myFun(100));
// function gstTex(price:number,tex:number=0.15) {
//     return price*(1-tex)
// }
// console.log(gstTex(80));
// function fryEgg(egg:number,butter:string,salt:number):number|string {
//     let sumEgg = 1+"water"+3
//     return sumEgg
// }
//     console.log(fryEgg(1,"water",3));
// const myEgg = fryEgg;
// function fryEgg(egg:number,butter:number,salt:number):number {
//      return egg+butter+salt
// }
//      console.log(myEgg(1,1.5,3))
// Arrow Function
// let myEgg = () => {return 1+1.5+3}
// let response = myEgg();
// console.log(response);
// let myEgg = () => 1+1.5+3
// let response = myEgg();
// console.log(response);
// Arrow Function
// let myFun = (num1:number,num2:number):void => {
//     let sum = 3+5
//     console.log(sum);   
// }
// myFun(3,5)
// let myFun = (egg:number, butter:number ,salt:number):number => {
//     let response = 1+1.5+3
//     return response
// };
// console.log(myFun(1,1.5,3));
// Rest Parameter 
// function myFun(...num:number[]) {
//     return num
// }
//console.log(myFun(5,3,7,8,2,8,6,9));
// function myFun1(...name:string[]) {
//       console.log(...arguments);    //Spread operator
//     return name
// }
// let fruits = myFun1("Apple","Mango","Orange")
// console.log(fruits.join());      // .join
// function rest(firstName:string,...lastName:string[]) {
//     return  firstName+lastName.toString()
//  }
//  let studentName=rest("waqas ","tanzeela","fahham","unzeela")
//  console.log(studentName);
// function myFun(fname: string,lname: string) {
//   console.log(fname+lname);
//   //return fname+lname 
// }
// let fullname = myFun("Muhammad ","Waqas")
// console.log(fullname);
// function addNumber(num1:number,num2:number) {
//      return num1+num2 
// }
// let result= addNumber(2,4)
// console.log(result);
// let result = (1+2+4)
// function myRec(egg:number,butter:number,salt:number){
//      let result = (1+2+1);
//       return result 
// }
// // let result = myRec(1,2,1)
// console.log(myRec(1,2,1))
// // console.log(result);
// function myFun() {
//   return idCard   
// }
// let idCard = {
//      Name: "Muhammad Waqas", 
//      RollNo: 226811,
//      City: "Mirpurkhas",  
//      Center: "Governor House Karachi",
//      Campus: "Main",
//      Batch: 1
// }
// console.log(myFun());
//default para
// function myIntro(fullName:string,centerName:string="is study at Governor House Karachi"):string {
//      return fullName+centerName
// }
// let myName= myIntro("Waqas ");
// console.log(myName);
// function addNumber(num1:number,...[]) {
//      console.log(...arguments);
//     return 1+4+6+9
// }
// console.log(addNumber(1,4,6));
// function addNumber(num1:number,...[]) {
//      console.log(...arguments);
//     return 1+4+6+9
// }
// function addNumber(num1:number,...[]) {
//      console.log(...arguments);
//     return 1+4+6+9
// }
// } function addNumber(num1:number,...[]) {
//      console.log(...arguments);
//     return 1+4+6+9
// }
// function addNumber(num1:number,...[]) {
//      console.log(...arguments);
//     return 1+4+6+9
// }
// function addNumber(num1:number,...[]) {
//      console.log(...arguments);
//     return 1+4+6+9
// }
// addNumber(2,3)
// function myIntro(firstName:string,lastName:string,castName?:string) {
//     return firstName+lastName
// }
// console.log(myIntro("Muhammad ","Waqas"));
// Arrow Function
// let myFun=(fname:string)=>
//         fname  
//    console.log("arrow function");
// Anonemous Function
// example 1
// let myFun1=function(fname: string){
//      return fname
// }
// console.log(myFun1("Muhammad"))
//example 2
// let myFun:(fname:string)=>string=(fname:string)=>{
//     return fname
// }
// console.log(myFun("Muhammad"));
// function myFun1(){
//     console.log("Simple Function"); 
// }
// myFun1()
// const myFun2=()=>{
//     console.log("Arrow Function");  
// }
// myFun2()
// const myFun3=function(){
//     console.log("Anonemous Function");
// }
// myFun3(); 
// function count(condi:number) {
//     if (condi <= 0) {
//        console.log("Let start");
//        return;
//     }
//     console.log(condi);
//     count(condi -1)   
// }
// count(5)
// Recursive Function
// function myFun(num:number) {
//     if (num <= 0) {
//         return;
//     }
//     console.log(num);
//     myFun(num - 1)
// }
// myFun(5)
// function add(a:number,b:number):number {
//     const myFunc1=function () {
//       console.log("Arrow Function");
//         }
//        myFunc1()
//      return a+b;
//   }
// console.log(add(2,6));
// const myFunc =()=> {
//      const myFunc1=()=> {
//     console.log("Inner arrow function");
//   }
//   myFunc1()
//   console.log("Outer arrow function");
// }
// myFunc()
// function outer(num1:number,num2:number):number {
//     function inner(num3:number,num4:number):number {
//       function third(num5:number,num6:number):number {
//         return num5+num6
//       }
//       console.log(third(1,2));
//       return num3+num4
//     }
//     console.log(inner(2,3));
//     return num1+num2
//   }
//   console.log(outer(4,5));
//   const myFun=(name:string)=>{
//     return name;
//  }
//  console.log(myFun("Waqas"))
//  const myName = myFun("Waqas");
//  console.log(myName);
//  const add = (num1:number,num2:number)=>{
//       return num1+num2
//  }
//  console.log(add(3,6));
//  let sum = add(2,6);
//  console.log(sum);
//  const addition =()=>{
//      console.log(sum);
//  }
//  addition()
//  let mydata= myFun("Muhammad");
//  console.log(mydata);
// let makeBiryani= function(){
//   return new Promise(
//     function (resolve,reject) {
//       let biryaniReady= true;
//       if (true) {
//        resolve("biryani is ready")
//       } else {
//         reject("biryani is not ready")
//       }
//     }
//   )
// }
// console.log(makeBiryani());
// function myFunc() {
//     return `0340-0312073`
// }
// let myArr2 = []
// myArr2.push(myFunc())  // Function push in Array
// console.log(myArr2);
// function add(num1:number,num2:number) {
//     return num1+num2
// }
// console.log(add(5,2));
// function sub(num1:number,num2:number) {
//     return num1-num2
// }
// console.log(sub(7,3));
// function mul(num1:number,num2:number){
//     return num1 * num2
// }
// console.log(mul(4,3));
// function div(num1:number,num2:number) {
//     return num1 / num2
// }
// console.log(div(6,2));
// Function use in Object
// function myObject() {
//     const obj={
//     name: "Waqas",
//     age: 22,
//     gender: "male",
// }
//     const obj2={
//     name: "Tanzeela",
//     age: 3,
//     gender: "female",   
// }
// console.log(obj);
// console.log(obj2);
// }
// myObject();
// Function use in Array
// function myFunc() {
//    let arr:string[] = ["apple","mango","orange"]
//    console.log(arr);  
// }
// myFunc();
// function operator(num1:number,num2:number,operator:string) {
//    if (operator==="addition") {
//     console.log(num1+num2);
//    } else if(operator==="subtraction"){
//     console.log(num1-num2);
//    } else if(operator==="mutiplication"){
//     console.log(num1*num2);
//    }else if(operator==="division"){
//     console.log(num1/num2);
//    } 
// }
// operator(5,2,"addition");
// operator(7,3,"subtraction")
// operator(4,3,"mutiplication")
// operator(8,2,"division")
