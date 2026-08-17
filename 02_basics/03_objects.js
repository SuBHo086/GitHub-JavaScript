// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Sayan",
    "full name": "Sayan Dhar",
    [mySym]: "mykey1", // to get the key as symbol we use [] or else it will act as str
    age: 21,
    location: "Kolkata",
    email: "sayan@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym]) 

JsUser.email = "sayan@chatgpt.com"
// Object.freeze(JsUser)   // it freezes the obj which restricts to change anything 
JsUser.email = "sayan@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // this refers the current object
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());