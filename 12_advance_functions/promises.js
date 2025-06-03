"use strict";
// const promise = new Promise(()=>{});
// console.log(promise);
Object.defineProperty(exports, "__esModule", { value: true });
// const userLogin=(name:any,password:any)=>{
//     return new Promise((resolve,reject)=>{
//       setTimeout(() => {
//         if (name === "Waqas" && password === 2073) {
//             resolve("You are login successfully.")
//         } else {
//             reject("Incorrect email or password, Try again.") 
//         }
//       }, 1000);
//     })
// }
// userLogin("Waqas",2073)
//  .then((res)=>{
//    console.log(res);
//  })
//  .catch((err)=>{
//     console.log(err); 
//  })
// const myCourse = (programming:any,freelancing:any)=>{
//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         if (programming==="TypeScript" && freelancing === "Digital Marketing") {
//             resolve("I enroll in this course")
//         } else {
//             reject("I did not enroll other course")
//         }
//     }, 1000);
//  })
// }
// myCourse("TypeScript","Digital Marketing")
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })
// const myFun = new Promise(function(resolve,reject){ 
//     let order = false;
//     if (order) {
//        resolve("Your order deliver successfully");
//     }else{
//        reject("Sorry, your order has been rejected")
// }   
// })   
// console.log(myFun);
// const myFun1 = new Promise(function (resolve,reject) {
//     resolve("true");
//     reject("false");
// });
// console.log(myFun1);
// let myPromise = new Promise((resolve,reject)=>{
//     console.log("Pennding");
//     let result = false;
//     if (result) {
//         setTimeout(() => {
//             console.log("Your order delivered has been successfully");
//           resolve(result)  
//         },2000)  
//     }else{
//         setTimeout(() => {
//             console.log("Sorry, Your order has been rejected");
//           reject(result)   
//         },1000)
//     }
// })
// myPromise
// .then((val) => console.log(val));
// function accoutVarification():Promise<void>{
//   return new Promise((resolve,reject)=>{
//      console.log("Processing...");
//      setTimeout(() => {
//       console.log("Process successfully completed");
//       resolve()
//      }, 1500);
//   })
// }
// function accoutVarificationCan():Promise<void> {
//   return new Promise((resolve,reject)=>{
//      console.log("Processing...");
//      setTimeout(() => {
//       console.log("Sorry, data failed");
//       reject()
//      }, 2000);
//   })
// }
// accoutVarification()
// .then(accoutVarificationCan)
// .catch((err)=> console.log("error"));
// let myPromises = new Promise((resolve,reject)=>{
//     let yourOrder = true;
//     console.log("Dear Customer, your shipment has been processing...");
//     console.log("!-------------------------------------------------!");
//     if (yourOrder) {
//       setTimeout(() => {
//         console.log("Dear Customer, your shipment has been booked.");
//         resolve(yourOrder)
//       }, 2000);
//       setTimeout(() => {
//         console.log("!--------------------------------------------------!");
//         console.log("Dear Customer, your shipment has been recieved by M Waqas (4410903955375).");
//         resolve(yourOrder)
//       }, 6000);
//     } else {
//       setTimeout(() => {
//         console.log("Sorry, your shipment has been rejected.");
//         reject(yourOrder)
//       }, 2000);
//     }
// })
// myPromises
// let course = function() {
//           return new Promise(function(resolve,reject) {
//             //resolve("Resolve")
//             reject("Reject")
//           })
// }
// course()
//  .then(function(response){
//    console.log(response);
// })
//  .catch(function(error){
//    console.log(error);
//  })
// const exam=function() {
//     return new Promise((resolve,reject)=>{
//         let myresult = false
//         if (myresult) {
//             resolve("Passed")
//         } else {
//             reject("Failed")
//         } 
//     })
// }
// exam()
//  .then((response)=>{
//     console.log(response); 
//  })
//  .catch((error)=>{
//     console.log(error);
//  })
// function add() {
//     return new Promise((resolve,reject)=>{
//     let myScore = 24;
//     if (myScore<=50 && myScore >=41) {
//         resolve("Grade 'A', "+"marks = "+myScore);
//     } 
//     else if(myScore<=40 && myScore>=31){
//         resolve("Grade 'B', "+"marks = "+myScore);
//     }
//     else if(myScore<=30 && myScore>=21){
//         resolve("Grade 'C', "+"marks = "+myScore);
//     }
//     else {
//         reject("Grade Failed, "+"marks = " +myScore)
//     } 
//     })
// }
// add()
//  .then((res)=>{
//     console.log("Pass",res);  
//  })
//  .catch((error)=>{
//     console.log("Sorry!",error);
//  })
// function color() {
//     return new Promise((resolve,reject)=>{
//         let favoriteColor = "red";
//         switch (favoriteColor) {
//             case "red":
//               resolve(`${favoriteColor} is my favorite color.`)    
//                 break;
//             case "green":
//                resolve(`${favoriteColor} is my favorite color.`)  
//                 break;
//             case "blue":
//                resolve(`${favoriteColor} is my favorite color.`)  
//                  break;
//             default:
//                 reject(`${favoriteColor} is not my favorite color.`)
//                 break;
//         }
//       })  
// }
// color()
//  .then((Resolve)=>{
//     console.log(Resolve)
//     return "this is natural color" 
//  })
//  .then((res)=>{
//   console.log(res);
//   return "and my favorite color"
//  })
//  .then((res)=>{
//   console.log(res);
//  })
//  .catch((error)=>{
//     console.log(error);
//  })
// function myWork() {
//   return new Promise((resolve,reject)=>{
//      console.log("Loading...");
//     setTimeout(() => {
//       resolve("additor open")
//    }, 1000);
//     setTimeout(() => {
//       reject("Your internet connection was restored.")
//     }, 1000);
//   });
// }
// myWork()
// .then((res)=>{
//   console.log(res);
//   return "start work..."
// })
// .then((res)=>{
//   setTimeout(()=>{
//   console.log(res);
//   },2000)
//   return "complete work"  
// })
// .then((res)=>{
//   setTimeout(() => {
//     console.log(res);
//   }, 3000);
// })
// .catch((error)=>{
//    console.log(error);
//    return "try again"
// })
// .then((response)=>{
//     console.log(response);  
// })
// .finally(()=>{
//   setTimeout(() => {
//     console.log("finally");  // .finally excicute .than and .catch
//   }, 3500);
// })
// function score() {
//     return new Promise((resolve,reject)=>{
//       let yourScore = 36;
//       if (yourScore<= 50 && yourScore>=31) {
//         resolve("Pass")
//       } else {
//         reject("Fail")
//       }
//     })
// }
// score()
//  .then((res)=>{
//     console.log(res);
//  })
//  .catch((err)=>{
//     console.log(err);
//  })
//  async function getResult() {
//   try {
//     await score();
//   //  console.log(res);
//   } catch (error) {
//     console.log(error); 
//   }
//  }
//  getResult()
