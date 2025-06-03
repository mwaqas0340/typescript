function myFunc(a:string|number,b:string|number) {
    if (typeof a==="string" && typeof b==="string") {
     console.log(a+b);
    }
    if (typeof a==="number" && typeof b==="number") {
     console.log(a+b);
    }  
 }
 myFunc("Muhammad ","Waqas");
 myFunc(3,5)


function add(arg1:string,arg2:string):string
function add(arg1:number,arg2:number):number
function add(arg1:boolean,arg2:boolean):boolean

function add(arg1:any,arg2:any):any {
    return arg1+arg2
}

console.log(add("Muhammad ","Waqas"));
console.log(add(2,5));
console.log(add(true,false));
//               1  ,  0


function studentName(fisrtName:string,lastName:string):string
function studentName(fisrtName:string,lastName:string):string

function studentName(fisrtName:string,lastName:string):string{
    return fisrtName+lastName
}
console.log(studentName("Muhammad ","Waqas"));
console.log(studentName("Fahham ","Ali"));



function leng(str:string):number;
function leng(arr:any[]):number;

function leng(x:any):number {
    return x.length
}
const result1 = leng("Waqas")
const result2 = leng(["a","b","c"])
console.log(result1);
console.log(result2);





