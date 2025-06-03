// Synchronous Function will be executrd line wise. 
// console.log("First = "+1);
// console.log("Second = "+2);
// console.log("Third = "+3);

// Asynrconos Function will be executed condition wise.
// console.log("first = "+1);

// setTimeout(function(){
//    console.log("Fifth = "+5);
   
// }, 4000)

// console.log("Second = " +2);

// setTimeout(() => {
//     console.log("Third = "+3 );
    
// }, 2000);

// setTimeout(() =>{
//     console.log("Fourth = "+4);
    
// },3000);

// console.log("please wait few micro second");

// console.log("First in all.");

// setTimeout(function(){
//     console.log("Open the zip for bag.");  
// });

// setTimeout(function(){
//     console.log("To open the vs code");
    
// },3000)

// setTimeout(function(){
//     console.log("Refresh the Leptop screen");
// },2000);

// setTimeout(function(){
//     console.log("Press right side button to open leptop");
    
// },1000)
   
// function sum(num1:number,num2:number) {
//     console.log(num1+num2);
    
// }
// function operator(num1:number,num2:number,sumCallback) {
//      sumCallback(num1,num2)
    
// }
// operator(2,6,sum)

// function add(num1:number,num2:number) {
//     return num1+num2
    
// }

// const myFunc1 = function () {
//     setTimeout(() => {
//      console.log("Print after 1 second");
      
//     },);
//     console.log("statement 1...");  
// }
// myFunc1()

// function cookBiryani(callback: ()=>void) {
//     console.log("Prepare Biryani");
    
//     setTimeout(() => {
//         console.log("Biryani is ready");
//         callback();
   
//     }, 1000);
//  }
// function packBag() {
//     console.log("All things is ready");
//     setTimeout(() => {
//         console.log("Baged are packed");
        
//     }, 2000);  
// }
// cookBiryani(packBag)

// function chicken(callback:()=>void) {
//     console.log("cutting chicken");
//     setTimeout(() => {
//         console.log("chicken is ready");
//         callback();
//     }, 1000);   
// }
// function pots() {
//     console.log("wash pots");
//     setTimeout(() => {
//         console.log("all pots is ready");
    
//     }, 1500);
// }
// chicken(pots)

// function myFunc1(callback:any) {
//     callback("waqas")
 
// }
// let result=(name:string)=>{
//     console.log(`Hello ${name}`);    
// }   
// myFunc1(result)

// function myFunc(callback:any) {
//     console.log(callback);
   
// }
// myFunc("Waqas")

// function myFunc1(callback1:any,callback2:any):void {
//     console.log("Hello");
    
//     callback1()
//     callback2()
   
// }
// let result =()=>{
//    console.log("Result1");  
// }
// let result2 =()=>{
//     console.log("Result2")
// }

// myFunc1(result,result2)

// function myFunc(callback:any) {
      
//     callback("Waqas")
// }
// let arrow =(name:string,cast:string)=>{
//      console.log(`Hello ${name}`)    
// }
// myFunc(arrow)

// function userInput(callback:any) {
//     console.log("Personal information");
//     setTimeout(() => {
//     console.log("Enter your fullname"); 
//     callback()   
//     }, 1000);


// }
// let myFunc=()=>{
//    setTimeout(() => {
//     console.log("Enter your email"); 
//    }, 2000);
  
   
// }
// userInput(myFunc)

// let myFun=(callback:any)=>{
//     console.log("Run first function");
//     setTimeout(() => {
//         console.log("After two seconds run second function");
//         callback()  
//     }, 2000);
    
// }
// let myFun1=()=>{
//     setTimeout(() => {
//         console.log("Run second functoin");
//     }, 2000);
    
// }
// myFun(myFun1)

// const myFun = (email:any,password:any, cb:any)=>{
//     setTimeout(() => {
//         cb("Waqas")
    
//     }, 1000);   
// }

// const getCourse = (email:any,cb:any)=>{
//     setTimeout(() => {
//         cb("TypeScript")
//     }, 2000);   
// }
// const payFee = (cb:any)=>{
//     setTimeout(() => {
//         cb("$100/=")
//     }, 4000);   
// }

////console.log(myFun("mwaqasrapoot100@gmail.com",12345)) 
// myFun("mwaqasrapoot100@gmail.com",12345,(name:any)=>{
//      console.log("Hi", name,"Congratulation you are login to our course.")
//      getCourse(name,(course: any)=>console.log(course));
//      payFee((fee:any)=>console.log("pay $100/="));
//      });
   

// const ourCourse = (programming:any,freelancing:any,cb:any)=>{
//    setTimeout(() => {
//     cb(programming)
//    }, 1000);
// }
// const rejCourse=(programing:any,freelancing:any,cb:any)=>{
//     setTimeout(() => {
//         cb(freelancing)
//     }, 2000);
// }
// const finalySelect=(programing:any,freelancing:any,cb:any)=>{
//     setTimeout(() => {
//         cb(programing)
//     }, 4000);
// }
// ourCourse("Typescript","Digital Marketing",()=>{ 
//     console.log("I have select TypeScript course.")});
//     rejCourse("Typescript","Digital Marketing",()=>{
//     console.log("I did not select Digital Marketing course.")});
//     finalySelect("Typescript","Digital Marketing",()=>
//         console.log("Yes! I have finally select TypeScript course."));

// let myFun = function(a:number,b:number){
//      return a+b
// }
// console.log(myFun(6,3));

// function course(callback:any) {
//     console.log("course is completed");
//      callback()
// }
// function exam(callback:any) {
   
//     setTimeout(() => {
//         console.log("preparation the exam"); 
//         callback()  
//     }, 1000);
// }
// course(function(){
//     exam(function(){
        
//     })
// });

