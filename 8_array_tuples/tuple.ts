
let myTuple: [string,string]=["apple","mango"];
console.log(myTuple);

let myTuple2 =["Waqas", 3, true]
console.log(myTuple2);


let myTuple1:[string, number, boolean]=["waqas", 22, true];
myTuple1.push("kashif");
console.log(myTuple1);

let myTuple3:[any,any,any,any]=["waqas", 5, true, null];
myTuple2.push("kashif");
console.log(myTuple2);

// let myTuple:[number,number]=[2,4]
// myTuple.push(5)
// myTuple.unshift(1)
// myTuple.splice(2,0,3)
// console.log(myTuple); 

let myTuple4:[string,number,boolean,object]=["waqas",5,true,[{name:"Waqas",age:23}]]
console.log(myTuple4[2]);

const tuple5:[object]=[{name:"Muhammad Waqas",rollNo:2226811,city:"Mirpurkhas",batch:1}]
console.log(tuple5);

let tuple6:[string,number]=["waqas",22]
let myTuple6=tuple6[1]                 // accesses tuple index
console.log(myTuple6);

let tuple2:[string|number]=[22]
console.log(tuple2);         // union operator 

let tuple3:[string,number]=["{name:Waqas} ",22]
console.log(tuple3);

type data=[number,string,string]
const stdData:data[]=[
    [0,"Waqas", "mwaqas100@gmail.com"],
    [1, "Fahham", "fahhamali134@gmail.com"],
    [2 , "Tanzeela", "tanzeela265@gmail.com"]
]
console.log(stdData);

interface myType{
    id:number
    name:string
    email:string
    class: string
}
// const tuple4:myType[]=[
//     {
      
//     },{
//         id: 6,
//         name: "Ali",
//         email: "ali903@gmail.com",
//         class: "online"
//     }
// ]
// console.log(tuple4);


