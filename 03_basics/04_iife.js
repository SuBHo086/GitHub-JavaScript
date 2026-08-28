// Immediately Invoked Function Expressions (IIFE)

(function test(){
    console.log("this is test")
})() ; // named IIFE 

// in IIFE we have to provide ; to tell js where to stop 

((name) => {
    console.log("this is test 2" , name)
})("Sayan")

// we can pass parameter to the last parenthesis