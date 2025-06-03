
for(let i = 0; i <= 10; i++){
    console.log(i);   
}

let num = 5;
for(let i = 1; i <= 10; i++){
    console.log(num +"x"+ i +"="+ (num*i));   
    //console.log(`${num} x ${i} = ${num*i}`);   
}

for(let i = 10; i >= 1; i--){
    console.log(i);
  }

for(let i = 1; i <= 20; i++){
    if(i % 2 === 1){
        continue;
    }
    else
    console.log(i);
}

    
for(let i = 1;  ; i++){
    if(i > 10){
        break;
    }
    else
    console.log(i);
    }

// for of loops.

const cities: string[] = ["Karachi", "Hyderabad","Mirpurkhas","Sukkur"];
for(const letter of cities){
console.log(letter);
}

for(let i = 1; i <= 10; i++){
    console.log(i);
}

let bool1 = 5;
let bool2 = 2;
while(true)
if(bool1 === 5){
    console.log("continue");  
    break; 
}
else{
    console.log("break");   
}


let j = 0;
while(j < 5){
console.log(j)
j++;
}


// let  = 0;
// do {
//     console.log(i)
//        i++;
// }
// while (i < 3);


let continuePackage = 1;
let Yourpackage = true;
while(Yourpackage){

if (continuePackage === 7) {
    Yourpackage = false;
    console.log("Your package has been expire ");
    break;

} else {
    console.log("Your package is continue");     
}
continuePackage++;
}

// let arr1= "waqas";
// console.log(arr1.charAt(0).toUpperCase()+arr1.slice(1).toLowerCase());

// let num = 9;
// for (let i = 1; i <= 10; i++) {
//   console.log(num +"x"+ i +"="+ num*i);   
// }

for (let index = 10; index >= 1; index--) { 
    console.log(index);
}

let num1 = 2
for (let i = 1; i <= 10; i++) {
   console.log(i*num1);      // create even number
}


// let num = 4
// for (let i = 1; i <=10; i++) {
//    console.log(i*num/2-1);    //create odd number
// }

let num2 = 2;
for (let i = 1; i <= 10; i++) {
   console.log(i*num2-1);        //create odd number   
}

for (let i = 1; ; i++) {
   if (i > 10) { 
     break;  
}else {
    console.log(i);
   }
}


let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}



// // for loop
// let arr = []
// arr.push("apple","banana")
// arr.splice(1,0,"mango")
// arr.unshift("dates")
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]); 
// }


// // while loop
// let arr2 = ["apple","banana"]
// arr2.splice(1,0,"mango")
// arr2.push("orange")
// let i = 0;
// while (i < arr2.length) {
//   console.log(arr2[i]);
//   i++;
// }


// do while loop
// let arr3 = ["apple","mango","banana"]
// let j = 0
// do {
//   console.log(arr3[j]);
//   j++;
// } while (j > arr3.length);



// for (let i = 0; i<5; i+=1) {
//     console.log(i);
    
// }
  // 1,2,4,6,8

// let i = 1
// for ( ; i <= 5; i++) {
//     console.log(i)   
// }


// for (let i = 1;  ; i++) {
//     console.log(i);
//     if (i>=5){ 
//      break;  
// }
// }

// let i = 1
// while (i < 5) {
//     console.log(i);
//     i++
// }

// let i =1;
// do {
//   console.log(i);
//   i++;    
// } while (i <= 6);

// let myArray = ["apple","mango","orange"]
// let arr = 0;
// while (arr < myArray.length) {
//     console.log(myArray[arr]);
//     arr++;
// }


let carInfo = {
    brand: "corola",
    year : 2024,
    color: "white",
    engine: "1500cc"
}
for (let i = 0; i< 5; i++) {
   console.log(carInfo);  
    
}

// let i = 0
// while (i < 5) {
//     console.log(carInfo);
//     i++;
// }

// const arr = ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"]
// for (let i = 0; i < arr.length; i++) {
//      console.log(arr[i].charAt(0).toUpperCase()+arr[i].slice(1).toLowerCase());
// }


// let i = -1;
// while(i<5) {
//     i++;
// console.log(i); 
// }
// console.log("---------------------------");

// const arr = "Waqas"
// for (let i = 0; i < 5; i++) {
//  console.log(arr);
// }

// let i = 0
// while (i<5) {
//    console.log(i);
//    i++;
// }
// console.log("*/////*");



// let carInfo = {
//     brand: "corola",
//     year : 2024,
//     color: "white",
//     engine: "1500cc"
// }
// let j = 0;
// do {
//   console.log(carInfo);
//   j++;  
// } while (j > 5);




