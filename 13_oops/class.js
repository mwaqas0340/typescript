"use strict";
// There are four pillar of oops.
// 1. Inheritance
// 2. Encapsulation  => use public, private and protected key word
// 3. Polymorphism
// 4. Abstraction
Object.defineProperty(exports, "__esModule", { value: true });
// class Student {     //// create a blue print
//     name: string    //// attribute or key or property of blue print  
//     email: string
//     batch: number
//     city: string
//     constructor(n:string,e:string,b:number,c:string){
//         this.name=n
//         this.email=e
//         this.batch=b
//         this.city=c
//     }
//     studentFunc(){
//         return `Student name is ${this.name} , email is ${this.email} , batch is ${this.batch} and city is ${this.city}.`
//     } 
//      }
// const student1 = new Student("Waqas","mwaqas100@gmail.com",1,"Mirpurkhas")
// const student2 = new Student("Ali","ali243@gmail.com",1,"Karachi")
// const student3 = new Student("Ahmer","ahmer562@gmail.com",1,"Hyderabad")
// let studentData1:Student[] = []
// studentData1.push(student1)
// let studentData2:Student[] = []
// studentData2.push(student2)
// let studentData3:Student[] = []
// studentData3.push(student3)
// console.log(studentData1);
// console.log(studentData2);
// console.log(studentData3);
//  console.log(student1.studentFunc()); 
//  console.log(student2.studentFunc());
// class car {
//     brand: string
//     name: string
//     color: string
//     constructor(b:string,n:string,c:string) {
//         this.brand=b
//         this.name=n
//         this.color=c
//     }
// }
// const car1=new car("Toyota","Corolla","White")
// const car2=new car("Honda","City","Gray")
// const car3=new car("Kia","Sportage","Black")
// let myArr=[]
// myArr.push(car1)
// myArr.push(car2)
// myArr.unshift(car3)
// car1.name="Vitz"
// console.log(myArr);
// console.log(car1)
// class Person{
//     public name:string
//     public age?:number
//     public job:string
//     private idNo: number 
//     constructor(n:string,a:number,j:string,i:number){
//        this.name=n
//        this.age=a
//        this.job=j
//        this.idNo=i
//     }  
//      personMethod(){
//      return `Person name is ${this.name} age is ${this.age} years and job title is ${this.job}.`
//     }
// }
// const person= new Person("John",32,"Programming",524)
// console.log(person.personMethod());
// class Alean extends Person{
// constructor(n:string,a:number,j:string,i:number){
//     super(n,a,j,i)
// } 
//     getSpeed() : string {
//     return `100km/hour`
// }
// protected fight:string="Fighting"
// }
// const alean = new Alean("Aroot",56,"Flying",234)
// console.log(alean.getSpeed());
// class Phone {
//     name:string
//     model: string
//     battery:string
//     camera: string
//     constructor(n:string,m:string,b:string,c:string) {
//         this.name=n
//         this.model=m
//         this.battery=b
//         this.camera=c
//     }
// }
// const phone1 = new Phone("Infinix","Note8i","5200mAh","48MP")
// // const phone2 = new Phone("Techno","Spark4","500mAh","28MP")
// let myArr2:Phone[] = [];
// myArr2.push(phone1)
// // console.log(myArr2);
// // // console.log(phone1)
// // // console.log(phone2);
// function myFunc() {
//     return myArr2
// }
// console.log(myFunc());
// // console.log(myFunc());
// class rateList {
//     sugar: number
//     rice: number
//     mezban: number
//     oil: number
//     onion: number
//     potato: number
//     constructor(s:number,r:number,m:number,oi:number,on:number,p:number) {
//         this.sugar=s
//         this.rice=r
//         this.mezban=m
//         this.oil=oi
//         this.onion=on
//         this.potato=p
//     }
// }
// let shop = new rateList(145,220,980,350,100,90)
// console.log(shop)
// console.log("1 kg sugar rate is = "+shop.sugar);
class augustW1 {
    thu;
    fri;
    sat;
    sun;
    mon;
    tue;
    wed;
    constructor(th, f, s, su, m, t, w) {
        this.thu = th;
        this.fri = f;
        this.sat = s;
        this.sun = su;
        this.mon = m;
        this.tue = t;
        this.wed = w;
    }
}
let week1 = new augustW1(1, 2, 3, 4, 5, 6, 7);
// console.log(week1);
class augustW2 {
    thu;
    fri;
    sat;
    sun;
    mon;
    tue;
    wed;
    constructor(th, f, s, su, m, t, w) {
        this.thu = th;
        this.fri = f;
        this.sat = s;
        this.sun = su;
        this.mon = m;
        this.tue = t;
        this.wed = w;
    }
}
let week2 = new augustW2(8, 9, 10, 11, 12, 13, 14);
// console.log(week2);
class augustW3 {
    thu;
    fri;
    sat;
    sun;
    mon;
    tue;
    wed;
    constructor(th, f, s, su, m, t, w) {
        this.thu = th;
        this.fri = f;
        this.sat = s;
        this.sun = su;
        this.mon = m;
        this.tue = t;
        this.wed = w;
    }
}
let week3 = new augustW3(15, 16, 17, 18, 19, 20, 21);
// console.log(week3);
class augustW4 {
    thu;
    fri;
    sat;
    sun;
    mon;
    tue;
    wed;
    constructor(th, f, s, su, m, t, w) {
        this.thu = th;
        this.fri = f;
        this.sat = s;
        this.sun = su;
        this.mon = m;
        this.tue = t;
        this.wed = w;
    }
}
let week4 = new augustW4(22, 23, 24, 25, 26, 27, 28);
// console.log(week4);
class car {
    brand;
    model;
    color;
    constructor(b, m, c) {
        this.brand = b;
        this.model = m;
        this.color = c;
    }
}
let Car = new car("Toyota", 2024, "White");
console.log(`my car model is ${Car.model}`);
