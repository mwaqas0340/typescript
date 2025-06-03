// function myFun(callback:any) {
//     console.log("hello");
//     callback()
// }
// myFun(function abc() {
//    function add(a:number,b:number) {
//     return a+b
//    }
//    console.log(add(2,5)); 
// })


// function cookBiryani(callback: ()=>void) {
//     setTimeout(() => {
//         console.log("Biryani is ready");
//     }, 1000);
//     callback();
// }

// function packBag() {
//    setTimeout(() => {
//       console.log("Baged are packed");  
//    }, 2000); 
// }
// cookBiryani(packBag)

// function chicken(callback:()=>void) {
//     setTimeout(() => {
//        console.log("cook chicken");
//     }, 3000);
//     callback();
// }
// function picnic() {
//     setTimeout(() => {
//        console.log("Go to picnic");
//     }, 4000);
// }
// chicken(picnic)

// const marks = ()=>{
//   let score = 32;
//    return new Promise((resolve,reject)=>{
//     if (score<=50 && score>=41) {
//         resolve(`Your score is ${score}, Passed`)
//         console.log("Grade A");
//     }else if(score<=40 && score>=31 ){
//         resolve(`Your score is ${score}, Passed`)
//         console.log("Grade B");  
//     }else {
//         reject(`Your score is ${score}, Faild`)
//     }   
//    })
// }
// marks()
// .then((score)=>{
//   console.log(score);
// })
// .catch((error)=>{
//     console.log(error);
//     console.log("Try again");
           
// })

// weather()

// const promise = new Promise(()=>{
   
// });
// console.log(promise);


// const userLogin=(name:any,password:any)=>{
//     return new Promise((resolve,reject)=>{
//       setTimeout(() => {
//         if (name === "Waqas" && password === 2073) {
//             resolve("You are login successfully.")
//         } else {
//             reject("Incorrect email or password. Try again.") 
//         }
//       }, 1000);
//     })
// }
// userLogin("Waqas",2073)
//  .then((name)=>{
//    console.log(name);
//  })
//  .catch((err)=>{
//     console.log(err); 
//  })

// function myFun(callback:any) {
//     console.log("excicute 1st console");
//     setTimeout(() => {
//      console.log("print after one second");
//      callback()
//     }, 1000); 
// }
// function result() {
//     setTimeout(() => {
//     console.log("excicute a few milisecond");
//     }, 1000);   
// }
// myFun(result)

// function myFun(callback:any) {
//     console.log("eligible student");
//     setTimeout(() => {
//      let arr = [17,21,16,25,19,22,18,15]
//      console.log(arr.sort().filter((num)=>{
//         return num>=18
//      }));
     
//      callback()
//     }, 1000); 
// }
// function myFun2(callback:any) {
//     console.log("checking list");
//     setTimeout(() => {
//      console.log("fill the form");
//      callback()
//     }, 2000); 
// }
// myFun(function(){
//     myFun2(function(){
//     })
// })


// function course1() {
//     return new Promise((resolve,reject)=>{
//      console.log("first quarter is typescript.");
//      setTimeout(() => {
//         //resolve("typescript is completed")
//      }, 1000);
//      setTimeout(() => {
//         reject("try again");
//      }, 1000);
//     })
// }
// course1()
// .then((res)=>{
//    console.log(res);
//    return "second quarter is next-js."
// })
// .then((res)=>{
//     setTimeout(() => {
//     console.log(res);
//     }, 2000);
//     return "third quarter is python or generative ai."
// })
// .then((res)=>{
//     setTimeout(() => {
//     console.log(res);    
//     }, 3000);
//     return `fourth quarter is ai specialist.`
// })
// .then((res)=>{
//    setTimeout(() => {
//     console.log(res);
//    }, 4000);
   
// })
// .catch((err)=>{
//     console.log(err);
// })

// function weather() {
//     return new Promise((resolve,reject)=>{
//     console.log("checking weather");
//     setTimeout(() => {
//         resolve("loading")    
//     }, );
//     setTimeout(() => {
//         reject("loading")
//     }, 500);
//     })
// }
// weather()
// .then((res)=>{
//     setTimeout(() => {
//         console.log(res);
//     }, 2000);
//     return "weather is clear"
// })
// .then((res)=>{
//     setTimeout(() => {
//         console.log(res);
//     }, 3000);
// })
// .catch((err)=>{
//     setTimeout(() => {
//         console.log(err);
//     }, 2000);
//     return `weather is cloudy`
// })
// .then((res)=>{
//     setTimeout(() => {
//         console.log(res);
//     }, 3000);
    
// })



// function userName() {
//     return new Promise<void>((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("Enter username")
//         }, 500);
//         resolve()
//         reject()
//     })
// }
// function password() {
//     return new Promise<void>((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("Enter strong password")
//         }, 2000);
//         resolve()
//         reject()
//     })
// }
// function userLogin() {
//     return new Promise<void>((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("Thanks, Your trust in our web page")
//         }, 3500);
//         resolve()
//         reject()
//     })
// }
// async function userData() {
//     try {
//         await userName()
//         await password()
//         await userLogin()
//     }
//     catch (error) {
//     console.log(error);  
//     }
// }
// userData()




