// Immediately Invoked Function Expressions (IIFE)

(function test(){
    console.log("this is test")
})() ; // named IIFE 

// in IIFE we have to provide ; to tell js where to stop 

(() => {
    console.log("this is test 2")
})()