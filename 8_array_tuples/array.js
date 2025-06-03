"use strict";
// let arr = ["one","two","three","four","five"]
// console.log(arr);
// let arr2 = [1,2,3,4,5]
// console.log(arr2.slice(1,4));
// We can create array in two methods. 
// 1st Method
// const fruitName = new Array("apple", "banana", "mango", "orange");
// console.log(fruitName);
// 2nd Method
// const fruitName1: string[]= ["apple", "banana", "mango", "orange"];
// fruitsNames1[0] = "strawbbery"      // update array index 0
// console.log(fruitName1);
// let userName: any=[
//     {
//         name: "Waqas",
//         passward: 12345,
//         email: "mwaqasrajpoot100@gmail.com"   
//     }
// ];
// console.log(userName);
// fruitName1.push("stawbbery"); // only string add this const because you have defined type string.
// console.log(fruitName1);
// const fruitName2: Array<number|string|boolean>= [45, "waqas"]; // union operator
// console.log(fruitName2);
// fruitName2.push(true); // you have stored multiple data type this const because you have use union operator. 
// console.log(fruitName2);
// const myArray:readonly string[]=["apple","mango"]; // you can not update value in readonly function.
// console.log(myArray);
//// index method
// const fruitName3: string[]= ["apple", "banana", "mango", "orange"]
// console.log(fruitName3[0]);
// console.log(fruitName3[1]);
// console.log(fruitName3[2]); // index number always start 0 index that is called length -1.
//// length method
// const fruitName3: string[]= ["apple", "banana", "mango", "orange"];
// console.log(fruitName3.length); // length number always start 1 length.
//// unshift method
//const arr1: string[]= ["apple","banana","mango"];
//arr1.unshift("greaps");
//console.log(arr1);                  // add first element in array
//// shift method
// const arr2: string[]= ["apple","banana","mango"];
// arr2.shift();                   
// console.log(arr2);                 // remove first element in array
//// push method
// const arr3: string[]= ["apple","banana","mango"];
// arr3.push("greaps");
// console.log(arr3);                 // add last element in array
//// pop method
// const arr4: string[]= ["apple","banana","mango"];
// arr4.pop();
// console.log(arr4);                 // remove last element in array
//// splice method
// const arr4: string[]= ["apple","banana","mango"];
// arr4.splice(0,1,"stawbbery");
//         //Add/Remove
// console.log(arr4);                 // add/remove element in array
//// slice method
// const arr4 = ["apple","banana","mango","stawberry","orange"];
// console.log(arr4);
// const arr5 = arr4.slice(0,3);
//                     // Return
// console.log(arr5);                 // return element in array
// let arr = ["apple","mango","banana","orange"]
// let mySlice = arr.slice(1)
// console.log(arr);
// console.log(mySlice);
//// sort method
// const arr4: number []=[34,45,56,34,2]; 
// arr4.sort();
// console.log(arr4);                 // adjust element in array
//// sort method
// const student: string[]=["waqas","kashif","asif","rashid"] 
// console.log(student.sort());
//// reverse method
// const student: string[]=["waqas","kashif","asif","rashid"] 
// console.log(student.reverse());      // reverse element in array
//// indexOf method
// let fruitsName1 = ["apple","banana","mango","orange","banana","greaps","stawbbery","dates"]
// console.log(fruitsName1.indexOf("banana",2));   // get element in array 
//// lastIndexOf method
// let fruitsName2 = ["apple","banana","mango","orange","greaps","banana","stawbbery","dates"]
// console.log(fruitsName2.lastIndexOf("banana"));    // return last index of array
//// Concate method1
// let myArray2:string[]=["red","green","blue"]
// let myArray3:string[]=["yellow","orange"]
// console.log(myArray2.concat("cyan"),myArray3);
//// Concate method2
// let myArray2:string[]=["red","green","blue"]
// let myArray3:string[]=["yellow","orange"]
// let myArray4 = [...myArray2,...myArray3];
// console.log(myArray4);
// let a = [1,2,3,4,5]
// let b = [6,7,8,9,10];
// // let c = [...a,...b]
// // console.log(c);
// console.log(a.concat().join(" "),b.join(" ").length);    // concate two array
//// toString method
// const student: string[]=["waqas","kashif","asif","rashid"] 
// console.log(student.toString());                           // array element convrt to string
//// fill method
// const student: string[]=["waqas","kashif","asif","rashid"] 
// console.log(student.fill("muhammad"));                // print one element // true or false
//// include method
// const student: string[]=["waqas","kashif","asif","rashid"] 
// console.log(student.includes("fahham"));                   // search array element
// const myNumber = [12,35,67,76,24,243,56,8,56,45,67]
// console.log(myNumber.includes(12,1));
// let arr1= "waqas rajpoot";
// console.log(arr1.charAt(0).toUpperCase()+arr1.slice(1).toLowerCase());
//// find method
// const stdAge = [13,21,19,17,23]
// console.log(stdAge.find((selector)=>{
//     return selector >= 18
// }));
//// findIndex method
// const dollar = [6,3,9,2,11]
// console.log(dollar.findIndex(result));
// function result(recieveMe:number) {
//    return recieveMe >= 5
// }
//// some method
// const dollar = [12,34,67,45,24,58]
// console.log(dollar.some((mujheChahiyein)=>{
//    return mujheChahiyein >=68
// }));
//// every method
// const dollar = [12,34,67,45,24,58]
// console.log(dollar.some((mujheChahiyein)=>{
//    return mujheChahiyein >=46
// }));
//// filter method
// const rupees=[200,456,123,167,432,145,789,213]
// console.log(rupees.sort().filter(myPara=>{ 
//     return myPara >= 200
// }))
// const ages=[12,23,17,25]
// console.log(ages.filter(adult));
// function adult(ages: any) {
//    return ages >= 23  
// }
//// reduce method
// let arr1 = [2,5,3,7,9]
// console.log(arr1.reduce((a,b)=>{
//    return a+b
// }));
//// forEach method
// const arr3 = ["ali","ahmed","faham","tanzeela"]
//    arr3.forEach((names:string, index:number)=>{
//     console.log(index.toString(),names.charAt(0).toUpperCase()+names.slice(1).toLowerCase());
//    })
// let vowel = ["A","E","I","O","U"]
// vowel.forEach((alphabet:string,index:number)=>{
//     console.log(index+" =",alphabet);
// })
// const num = [1,2,3,4,5,6,7,8,9,10];
// num.forEach((Number:number)=>{
//    console.log(Number)
// });
// const temp = [34,42,31,46,27,30,45,27]
// console.log(temp.map(function myFunc(calTemp:number) {
//     return calTemp*2
// }));
// let fruitsName2 = ["apple","banana","mango","orange","banana","greaps","stawbbery","dates"]
// //console.log(fruitsName2);
// let fruitName2 = ["apple","mango","banana","orange"]
// for (let i = 0; i < fruitName2.length; i++) {
//  console.log(fruitName2);
// }
// let arr = [16,21,19,17,20,14,23]
// console.log(arr.filter((eligible)=>{
//     return eligible>=18
// }));
// let arr = [1,2,3,4,5]
// arr.forEach((myNum)=>{
//     console.log(myNum);
// });
// function myFunc(...numbers:number[]):number {
//     let total = 0
//     numbers.forEach((num)=>total+=num
//     )
//     return total
// }
// console.log(myFunc(4,2,7,3,9));
//// D-Structuring
// let arr = ["mango","banana","orange"]
// let [friut0,fruit1] = arr;
// console.log(friut0,fruit1);
// let tuple:[string,string,string]=["apple","mango","banana"]
// let [, f1] = tuple;
// console.log(f1);
// let obj={
//     Name: "Waqas",
//     age: 22,
//     email: "waqas@gmail.com"
// }
// let {Name,age} = obj;
// console.log(Name,age);
let arr = [2, 4, 6, 8, 10];
arr.forEach((num, index) => {
    console.log(1 + index, num * 2);
});
