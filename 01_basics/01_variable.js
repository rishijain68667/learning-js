const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "jaipur"

let accountState;

accountEmail ="hc@hc.com"
accountPassword = "21212121"

accountCity = "Bengaluru"

console.log(accountId);

/* 
prefer not to use var 
beacuse of issue in block scope and function scope 
*/

console.table([accountId , accountEmail , accountPassword , accountCity,
    accountState
])
