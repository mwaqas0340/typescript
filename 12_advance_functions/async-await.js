"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function accoutVarification() {
    return new Promise((resolve, reject) => {
        console.log("Processing...");
        setTimeout(() => {
            console.log("Process successfully completed");
            resolve();
        }, 1500);
    });
}
function accoutVarificationCan() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Sorry, data failed");
            reject;
        }, 2000);
    });
}
async function result() {
    try {
        await accoutVarification();
        await accoutVarificationCan();
        console.log("all work completed");
    }
    catch (error) {
        console.log(error);
    }
}
result();
//   function dataOpen() {
//   return new Promise((resolve,reject)=>{
//     resolve("Data Resolve")
//     //reject("Data Reject") 
//   })
// }
// async function result() {
//   try {
//      let res = await dataOpen();
//      console.log(res);     
//   } catch (error) {
//      console.log(error); 
//   } 
// }
// result()
// function myFun() {
//   return new Promise((resolve,reject)=>{
//     resolve("Data Resolve")
//     reject("Data Reject")
//   })
// }
// async function getRes() {
//     try {
//         const response = await myFun()
//          console.log(response);
//         setTimeout(() => {
//          console.log("exicute try block"); 
//         }, 1000);  
//     } 
//     catch (error) {
//          console.log(error); 
//         setTimeout(() => {
//          console.log("exicute catch block"); 
//         }, 1000);
//     }
// }
// getRes()
/////////////////////////////////////////////
// function accoutVarification(){
//   return new Promise((resolve,reject)=>{ 
//     resolve("Processing...")
//      //reject("Processing...")
//   })
// }
// async function myFun() {
//     try {
//         let answer = await accoutVarification()
//         console.log(answer);
//         setTimeout(() => {
//             console.log("Process successfully completed");
//         }, 1500);
//     } catch (error) {
//         console.log(error);
//         setTimeout(() => {
//             console.log("Sorry, data failed");
//         }, 1500); 
//     }
// }
// myFun()
// function getData1() {
//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       console.log("data 1"); 
//       resolve("success") 
//     }, 500);
//   })
// }
// async function result() {
//   try{
//   await getData1();
//   await getData2();
//   await getData3();
//   await getData4();
//   }
//   catch(error){
//   console.log(error);
//   }
// }
// result()
// function getData2() {
//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       console.log("data 2"); 
//       resolve("success") 
//     }, 1000);
//   })
// }
// function getData4() {
//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       console.log("data 4"); 
//       resolve("success") 
//     }, 2000);
//   })
// }
// function getData3() {
//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       console.log("data 3"); 
//       resolve("success") 
//     }, 1500);
//   })
// }
// function enterName() {
//   return new Promise((resolve,reject)=>{
//        console.log("Enter your fullName")
//       resolve("success")
//       reject("try again")  
//   })
// }
// function enterEmail() {
//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       console.log("Enter your email");
//     },1500);
//       resolve("success")
//       reject("Try again")  
//   })
// }
// function enterPassward() {
//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       console.log("Enter your passward");
//     }, 3000);
//       resolve("seccess")
//       reject("Try again")  
//   })
// }
// async function stdResult() {
//   try{
//   await enterName();
//   await enterEmail();
//   await enterPassward();
//   }
//   catch(error){
//   console.log(error);
//   }
// }
// stdResult()
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
//       console.log("All my work is ready"); 
//     }
//     catch(error){
//     console.log(error);
//   }   
// }
// allWorkCompl()
// function weather() {
//     return new Promise((resolve,reject)=>{
//      let result = true;
//      if (result) {
//         resolve("Promise true")
//      } else {
//         reject("Promise false")
//      }
//     }) 
// }
// async function myFun() {
//    try {
//     let res =await weather()
//     console.log(res);
//    } catch (error) {
//     console.log(error);  
//    }    
// }
// myFun()
// function stdScore() {
//     return new Promise((resolve,reject)=>{
//      let score = 27;
//      if (score<=50 && score>=25) {
//         resolve("Pass")
//      } else {
//         reject("Fail")
//      } 
//     }) 
// }
// async function stdResult() {
//    try {
//      let result = await stdScore()
//     console.log(result);
//    } catch (error) {
//     console.log(error);
//    }
// }
// stdResult()
// function weather() {
//     return new Promise((resolve,reject)=>{
//     console.log("checking weather");
//     setTimeout(() => {
//         resolve("loading...")    
//     }, 500);
//     setTimeout(() => {
//         //console.log("weather is clear");
//     }, 1500);
//     setTimeout(() => {
//         console.log("weather is cloudy");
//     }, 1500);
// })
// }
// async function result() {
//     try {
//         let myVar = await weather()
//         console.log(myVar);
//     } catch (error) {
//         console.log(error);
//     } finally{
//        setTimeout(() => {
//          console.log("after two days  weather is properly clear.");
//        }, 2000); 
//     }
// }
// result()
// function charging() {
//    return new Promise((resolve, reject) => {
//       let charge = 16;
//       if (charge<=100 && charge>=20) {
//          resolve(charge + "% remaining")
//       } else {
//          reject(charge + "% battery low")
//       }
//    })
// }
// async function laptop() {
//    try {
//       let myCharge = await charging()
//       console.log(myCharge);
//    } catch (error) {
//       console.log(error);
//    }
// }
// laptop()
