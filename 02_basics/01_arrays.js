// arrays

const array1 = [0,1,2,3,4]

console.log(array1) // prints whole array

console.log(array1[0]) // prints indexed element if available

const myArr = new Array(1,2,3,4,5) // another way to declare and initialize array

console.log(myArr)

// methods

myArr.push(12) // push element into the arrays

// console.log(myArr)

myArr.pop() // pops the last element

// console.log(myArr)

myArr.unshift(11) // adds element in the first index

console.log(myArr)

myArr.shift() // removes the first element from the array

console.log(myArr) 

// slice and splice

const newArray = [1,2,3,4,5,6]
const testArray = newArray

console.log(newArray.slice(0,4)) // slice just cuts the array according to index and prints it, main array remain untouched

console.log(newArray)

console.log(testArray.splice(0,4)) // splice cuts the array according to index but it affects the actual array and broke it from the ending index part

console.log(newArray)
console.log(testArray)