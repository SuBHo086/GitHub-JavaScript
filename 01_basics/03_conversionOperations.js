let score = "23abc"

console.log(typeof(score))
console.log(typeof score)

let valInNumber = Number(score)

console.log(typeof valInNumber)

console.log(valInNumber) // => gives NaN which is Not A Number

// "33" => 33
// "33abc" => NaN
// true => 1 ; false => 0

let isLoggedIn = "subho"

let booleanLoggedIn = Boolean(isLoggedIn)

console.log(booleanLoggedIn)

// 1 => true; 0 => false 
// "" => false; "subho" => true

let randNum = 23 + 23

let randStr = String(randNum)

console.log(typeof randStr)


//*********************** Operations *************************

let val = 21
let negVal = -val

console.log(negVal)

let str1 = "Sayan"
let str2 = "Dhar"

console.log(str1 + " " + str2)
console.log("1" + 2)
console.log(1 + "2")
console.log("1" + "2")
console.log("1" + 2 + 2)
console.log(1 + 2 + "2")


