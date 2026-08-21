// const tinderUser = new Object() // declare a object

const tinderUser = {} // another way to declare a object

tinderUser.name = "Sayan"
tinderUser.age = 22
tinderUser.loggedIn = false


// console.log(tinderUser);

const newObj = {
    id : 11,
    fullname : {
        firstname : "sayan",
        lastname : "dhar",
        nickname : {
            firstname : "subho" , 
            lastname : "dhar"
        }
    }
}

// console.log(newObj.fullname.nickname.firstname);
// console.log(newObj.fullname);

const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"a" , 4:"b"}

// const obj3 = Object.assign(obj1, obj2)

const obj3 = {...obj1 , ...obj2} // its the popular way to merge objects

// console.log(obj3);

console.log(Object.keys(tinderUser)); // returns all keys
console.log(Object.values(tinderUser)); // returns all values
console.log(Object.entries(tinderUser)); // returns all key value pairs as array

console.log(tinderUser.hasOwnProperty("loggedIn")) // checks for the keys