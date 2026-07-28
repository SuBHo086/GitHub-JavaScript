console.log(null > 0) //false
console.log(null == 0) //false 
console.log(null >= 0) //true

console.log(undefined >= 0) //false 
console.log(undefined == 0) //false 
console.log(undefined === 0) //false 
console.log(undefined > 0) //false 

// avoid these kind of comparisons at any cost cuz the output is not reliable

console.log("2" == 2) //true
console.log("2" === 2) //false

// === => checks datatype also unlike == which checks value only

