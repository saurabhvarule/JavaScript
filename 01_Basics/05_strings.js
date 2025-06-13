

const name = "Saurabh";
const age = 24;

// most common way to print statements: 
console.log("Hello my name is " + name + "and my age is " + age);

//preferred and latest way to print statements using backticks:
console.log(`Hello my name is ${name} and my age is ${age}`);

const email = new String("varulesaurabh@google.com");

// String methods:
console.log(`Lower case ${email.toLowerCase()}`);
console.log(`Upper case ${email.toUpperCase()}`);
const newEmail = email.substring(6,13);
console.log(newEmail);
console.log(email.slice());  
console.log(email.slice(0,6));