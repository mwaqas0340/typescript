"use strict";
//AND operator.     onle false result false
// let a = 45;
// let b = a < 30 && a > 35;
// console.log(b);
// OR operator.     only one  true result true
// let a = 45;
// let b = a < 30 || a > 35;
// console.log(b);
//NOT operator.    true false and false true
// let a = 45;
// let b = a > 30;
// console.log(!b);
// let myFriend = "ali";
// if(myFriend === "ahmed" || myFriend === "ali"){
//     console.log(`${myFriend} is my friend`);
// }
// else{
//     console.log(`${myFriend} is not my friend`);   
// }
// let myLeptop = "dell";
// if (myLeptop==="dell" || myLeptop==="hp" || myLeptop==="lenovo") {
// console.log(`I will buy ${myLeptop} leptop.`);
// } else {
// console.log(`I will not buy ${myLeptop} laptop.`);   
// }
//  let myLeptop = "lenovo";
// if (myLeptop==="dell") {
//     console.log(`I will buy ${myLeptop} leptop.`);
//     }
// else if(myLeptop==="hp"){
//     console.log(`I will buy ${myLeptop} leptop.`);
// }   
// else if(myLeptop==="lenovo"){
//     console.log(`I will buy ${myLeptop} leptop.`);
// }   
//  else {
//     console.log(`I will not buy ${myLeptop} leptop.`);
// }
//Logical Operator.
// let num1 = 10;
// if(num1 >= 5 && num1 <= 10){
//  //  11   >= 5 && 11   <= 10
//     console.log("True value");   
// }
// else{
//     console.log("False value");  
// }
// let ourCrop = "nuts";
// if(ourCrop === "cotton"){
//     console.log("cotton is kharif crop.");
// }
// else if(ourCrop === "sugar cane"){
//     console.log("sugar cane is kharif crop.");    
// }
// else if(ourCrop === "seeds"){
//     console.log("seeds are kharif crop.");    
// }
// else if(ourCrop === "wheat"){
//     console.log("wheat is rabi crop.");    
// }
// else if(ourCrop === "rice"){
//     console.log("rice is rabi crop.");    
// }
// else if(ourCrop === "pulses"){
//     console.log("pulses are rabi crop.");    
// }
// else{
//     console.log("Please enter valid crop.");    
// }
let myColor = "cyan";
switch (myColor) {
    case "blue":
        console.log(`my favorite color is ${myColor}.`);
        break;
    case "red":
        console.log(`my favorite color is ${myColor}.`);
        break;
    case "green":
        console.log(`my favorite color is ${myColor}.`);
        break;
    default:
        console.log(`this is not my favorite ${myColor}.`);
        break;
}
