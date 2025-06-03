function weather(callback:()=>void) {
    console.log("checking weather");
    setTimeout(() => {
        console.log("weather is awesome");
        callback()
    }, 1000);
}

function chicken(callback:()=>void) {
    console.log("cook chicken");
    setTimeout(() => {
        console.log("chicken is ready");
        callback()
    }, 1000);   
}

function picnic(callback:()=>void) {
    console.log("all things is ready");
    setTimeout(() => {
        console.log("Go to picnic");
        callback()
    }, 1000);
    
}
weather(function(){
    chicken(function(){
        picnic(function(){

        })
    })
});
