//primitive
//7 type- string,number,boolean,null,undefined,symbol,BigInt
// Refrence(non primitive)- Array, object , Functions

// const score = 100
// const scoreValue = 100.3
// const isLoggedIn = false
// const outsideTemp = null (empty);
// let userEmail ;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

// const heros = ["shaktiman", "naagraj" , "doga"]
// let obj = {
//     name : "rishi",
//     age : 31,
// }
// const myFunction = 
//  function(){
//     console.log("Hello world");
//  }

//  let BigInt = 12345678n
//  console.log(typeof BigInt);
 //++++++++++++++++++++++++++++++++++++

 //stack and heap memory

 //primitive(stack)
 //non primitive (heap)

// let myName = "Rishi";
// let otherName = myName;
// otherName = "snehil";
// console.log(myName);
// console.log(otherName);

let userOne = {
    email:"user@gmail.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "rishi@gmail.com",

console.log(userOne);
console.log(userTwo);





