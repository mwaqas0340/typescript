
let a = 5             // a is global variable -> accessible function body and outer of function.

function myFun3() {
    let b = 4         // b is local variable  -> only accessible function body.
    console.log(a);   
    console.log(b);
}
myFun3()
console.log(a);

console.log("----------------")


let num1 = 5

function multiply() {
    let num2 = 2
    num1 = num2*3
    console.log(num1);
}
//console.log(num1);
multiply()




