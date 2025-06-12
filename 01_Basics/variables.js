
const accountId = 12334
let accountEmail = "sv@sv@gmail.com"
var accountPass = "18y4r7"
accountCity = "Malegaon"   // we can also declare variable like this  just for your knowledge purpose

// accountId = 12321   --> not allowed
accountEmail = "saurabhvarule@gmail.com"
accountPass = "Malegaon@41"
accountCity = "Malegaon"
console.log("account id = " + accountId)
console.log("Account mail = " + accountEmail)
console.log("account password = " + accountPass)
console.log("account city = " + accountCity)  
let accountstate; // --> this is undefined 
console.log(accountstate)  

console.table([accountEmail,accountId,accountPass,accountCity])

/* 
prefer not to use var 
bacuase of issue in block scope and functional scope
*/

