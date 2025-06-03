console.log("One");
console.log("Two");


setTimeout(function(){
    console.log("Three");
    
},4000)
console.log("Four");

setTimeout(()=>{
    console.log("Five");
    
},1000)


