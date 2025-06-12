"use strict"; // treat all js code as newer verison

// alert(3 + 3); we are using node not browser

console.log(3
    +
    3); // code reability should be high
console.log("Saurabh");

let name = "Saurabh";
let age = 24;
//let isLoggedIn = false;

// number => 2 to pwer 23
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined =>
// symbol=> unique

// object

// console.log(typeof("Saurabh"));
// console.log(typeof(age));
// console.log(typeof(undefined));
// console.log(typeof(null));

// Primitive
// 7 types : Number, String, Boolean, null, undefined, BigInt, Symbol
const score = 40;//number
const scoreValue = 40.67;
const isLoggedIn = false;
const outsideTemp = null;
const id = Symbol('123');
const anotherId = Symbol('123');
let userEmail;


console.log(id === anotherId);
const bigNumber = 919673485951n;

console.log(`Score is ${score} and its type is :${typeof score}`);
console.log(`score value is ${scoreValue} and its type is :${typeof scoreValue}`);
console.log(`big number is ${bigNumber} and its type is ${typeof bigNumber}`);

function dataTypes() {
    console.table([score,scoreValue,id,anotherId,isLoggedIn,outsideTemp,userEmail,bigNumber]);
}


console.log("Primitive Data Types");
dataTypes();


// Array, Object, Function

// Array
const gods = ["Vishnu","Brahma","Shiva"];
console.log(gods);
console.log(`this is gods array : ${gods} and its type is ${typeof gods}`)

// Object
let mySelf = {
    name :"Saurabh Varule",
    age : 24,
    birtDate : "10/07/2001",
    degree : "Computer Engineering",
    graduationYear : 2023,
}

// Object Function
const myFunction = function() {
    console.log(mySelf);
}

// Function
function myInfo(){

    console.log(`Hello my name is ${mySelf.name}`);
    console.log(`Hello my age is ${mySelf.age}`);
    console.log(`Hello my degree is in ${mySelf.degree}`);
}
console.log();


console.log(typeof myFunction);
myFunction();
console.log(typeof myInfo);
myInfo();