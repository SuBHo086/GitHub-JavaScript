// primitive

// 7 types : String , number , boolean , null , undefined , BigInt , Symbol

let score = 100
var def = 12

let isLoggedIn = true
let exists = null

let numVar // => value is undefined
let numVar1 = undefined // can also assign it 

let sym = Symbol("123")
let symTest = Symbol("123")

console.log(sym === symTest)

// Reference (Non-primitive)

// Array , Objects , Functions

let superHeroes = ["Ironman" , "Thor" , "Spiderman"]

let obj = {
    name : "sayan" , 
    age : 21
}

const myFunc = function(){
    console.log("this is just a test")
}

console.log(obj)