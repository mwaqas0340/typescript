
class Person {
    // short method create constructor 
    constructor(public name:string,public age:number) { 
}
   myMethod(){
   console.log(`I am ${this.name}`,"at home."); 
}
}
const atHome = new Person("Waqas",22)
atHome.myMethod()

class student extends Person{
   constructor(name: string,age:number){
       super(name,age);
   } 
   myMethod(): void {
   console.log(`I am ${this.name}`,"at class.");
      
   }
}
const atClass = new student("Student",22)
atClass.myMethod()
 
class Person2{
    name:string
    age:number
    constructor(n:string,a:number){
      this.name=n
      this.age=a
    }
    std(){
        return `Person name is ${this.name} age is ${this.age}`
    }
}
const person = new Person2("Ali",18)
// console.log(person.std());
console.log(person.std());

class Student extends Person2{
cast:string="Rajpoot"
std() {
  return `Person name is ${this.name}, cast is ${this.cast} and age is ${this.age} years`
}
}
const person2 = new Student("Hamza",4,)
console.log(person2.std());





