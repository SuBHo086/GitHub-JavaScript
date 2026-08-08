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

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//stack(primitive) -- heap(non-primitive)

let var1 = "Sayan Dhar"
let var2 = var1;

console.log(var1)
console.log(var2)

// shares the copy of the var val so changing one var does't affect another

var2 = "Suman Dhar"
console.log(var2)

let myObj = {
    name : "Sayan" ,
    age : 21
}

let myObj2 = myObj;
myObj2.age = 18 // it just shares the same heap address to both vars of the same object, so changing any one causes to change the real val

console.log(myObj.age)
console.log(myObj2.age)