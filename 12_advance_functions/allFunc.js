"use strict";
//// callback
// const myFun1=(callback:any) =>{
//   setTimeout(() => {
//     console.log("1st Func.");
//     callback()
//   }, 1000);
// }
// function myFun2() {
//   setTimeout(() => {
//     console.log("2nd Func.");
Object.defineProperty(exports, "__esModule", { value: true });
//   }, 2000);
// }
// myFun1(myFun2)
//// callback hell
// const myFun1=(callback:()=>void) =>{
//   setTimeout(() => {
//     console.log("1st Func.");
//     callback()
//   }, 1000);
// }
// const myFun2=(callback:()=>void)=> {
//   setTimeout(() => {
//     console.log("2nd Func.");
//     callback()
//   }, 2000);
// }
// const myFun3=(callback:()=>void)=> {
//   setTimeout(() => {
//     console.log("3rd Func.");
//     callback()
//   }, 3000);
// }
//   myFun1(function(){
//     myFun2(function(){
//       myFun3(function(){
//       })
//     })
//   });
// const myFun1=(name:any) =>{
//   setTimeout(() => {
//     console.log("1st Func");
//     name()
//   }, 1000);
// }
// const myFun2=(name:any) =>{
//   setTimeout(() => {
//     console.log("2nd Func");
//     name()
//   }, 2000);
// }
// myFun1(()=>{
//   myFun2(()=>{
//   })
// })
// const myFun1=(callback:any) =>{
//   setTimeout(() => {
//     console.log("1st Func.");
//     callback()
//   }, 1000);
// }
// function myFun2() {
//   setTimeout(() => {
//     console.log("2nd Func.");
//   }, 2000);
// }
// myFun1(myFun2)
//// Promises
// function weather():Promise<void>{
//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       console.log("Is weather clear really?");
//       resolve()
//     }, 1000);
//   })
// }
// function isClear():Promise<void> {
//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       console.log("Weather is clear");
//       reject()
//     }, 2000);
//   })
// }
// weather()
// isClear()
// .then((_weather)=>{
//   console.log("Go to city");
// })
// .catch((error)=>{
//   console.log(error);
// });
// const usreData= (name:any,email:any)=>{
//     return new Promise((resolve,reject)=>{
//       setTimeout(() => {
//         if (name==="Waqas" && email==="waqas123@gmail.com") {
//           console.log("You are login.");
//           resolve(name)
//         } else {
//           console.log("incorrect name or email.Try again.");
//           reject()
//         }
//       }, 1000);
//     })
// }
// usreData("Waqas","waqas123@gmai.com")
// .then((usreData)=>{
// })
// .catch((error)=>{
//   console.log(error);
// })
//// async and await 
// function weather():Promise<void>{
//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       console.log("Is weather clear really?");
//       resolve()
//     }, 1000);
//   })
// }
// function isClear():Promise<void> {
//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       console.log("Weather is clear");
//       resolve()
//     }, 2000);
//   })
// }
// weather()
// isClear()
// .then((_weather)=>{
//   console.log("Go to city");
// })
// .catch((_error: any)=>{console.log("error");
// })
// function weather2():Promise<void>{
//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       console.log("Is weather clear really?");
//       resolve()
//     }, 1000);
//   })
// }
// function isClear2():Promise<void> {
//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       console.log("Weather is clear.");
//       reject()
//     }, 2000);
//   })
// }
// async function result() {
//   try {
//     await weather2();
//     await isClear2();
//   } 
//   catch (error) {
//     console.log(error);
//   }
// }
// result()
// function takeBag(): Promise<void> {
//   return new Promise((resolve,reject)=>{
//     console.log("To take Bag");
//     setTimeout(() => {
//       console.log("Open zip for Bag");
//       resolve();
//     }, 1000);
//   })
// }
// function openLep(): Promise<void> {
//   return new Promise((resolve,reject)=>{
//     console.log("Press right side button");
//     setTimeout(() => {
//       console.log("Loadding..! Screen On");
//       resolve();
//     }, 1500);
//   })
// }
// function vscode(): Promise<void> {
//   return new Promise((resolve,reject)=>{
//     console.log("Create new directory and work");
//     setTimeout(() => {
//       console.log("Allhamdulillah! I have understand complete work");
//       resolve();
//     }, 2000);
//   })
// }
// async function allWorkCompl(){
//     try {
//       await takeBag();
//       await openLep();
//       await vscode();
//       console.log("All my worked have ready"); 
//     }
//     catch(error){
//     console.log(error);
//   }   
// }
// allWorkCompl()
//   function myFun():Promise<void>  {
//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       console.log("1st Function");
//       resolve()
//     }, 1000);
//   })
// }
//   function myFun1():Promise<void> {
//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       console.log("2nd Function");
//       resolve()
//     }, 2000);
//   })
// }
// async function result() {
//   try {
//     await myFun();
//     await myFun1();
//   } catch (error) {
//     console.log(error);
//   }
// }
// result()
//  function weather(callback:()=>void) {
//   console.log("checking weather");
//   setTimeout(() => {
//       console.log("weather is awesome");
//       callback()
//   }, 1000);
// }
// function chicken(callback:any) {
//   console.log("cook chicken");
//   setTimeout(() => {
//       console.log("chicken is ready");
//       callback()
//   }, 1000);   
// }
// function picnic(callback:any) {
//   console.log("all things is ready");
//   setTimeout(() => {
//       console.log("Go to picnic");
//       callback()
//   }, 1000);
// }
// async function result() {
//   try {
//     await weather("")
//   } catch (error) {
//   }
// }
// async function myFun() {
//     return new Promise(
//         await function(resolve,reject) {
//             try{
//             resolve("Resolve")}
//             catch(err){
//             reject(err)}
//         }
//     )
// }
// console.log(myFun())
// //callback function
// function weather(callback:any) {
//     console.log("checking weather");
//     callback()
// }
// function isClear() {
//   console.log("weather is clear");
// }
// weather(isClear)
// //callbackhell function
// function weather(callback:()=>void) {
//     console.log("checking weather");
//     callback()
// }
// function isClear(callback:()=>void) {
//   console.log("weather is clear");
//   callback()  
// }
// weather(function(){
//     isClear(function(){
//     })
// })
////promises function
// function weather() {
//     return new Promise((resolve,reject)=>{
//      resolve("checking weather")
//     }) 
// }
// weather()
// .then((res)=>{
//     console.log(res);
//     return "weather is clear"
// })
// .then((res)=>{
//    console.log(res);  
// })
// .catch((error)=>{
//     console.log(error);
// })
// //async await function
// function weather() {
//     return new Promise((resolve,reject)=>{
//     //     console.log("checking weather");
//     //  resolve("success")
//      reject("you are currently offline, check your internet connection")
//     }) 
// }
// function isClear() {
//     return new Promise((resolve,reject)=>{
//         console.log("weather is clear");
//      resolve("success")
//      reject()  
//     }) 
// }
// async function result() {
//     try {
//       await weather() 
//       await isClear() 
//     } catch (error) {
//         console.log(error);   
//     }
// }
// result()
