const accNumber = 14542723086
let accMail = "sayan@testmail.com"
var accType = "savings"
accOrigin  = "india"

// avoid using var as it doesn't follow block scope and functional scope

// accNumber = 1454 -> it will throw error as const doesn't support reassignment

accMail = "sayan@newtestmail.com"
accType = "current"
accOrigin = "japan"

console.table([accNumber, accMail, accNumber, accType])