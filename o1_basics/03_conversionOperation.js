let score = "46"

console.log(typeof score);

let valueInNumber = Number(score)
console.log(typeof valueInNumber);

// "46"  => 46
// "46abc"  => NaN
// true => 1 ; false => 0

let isLoggedIn = ""
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true ; 0 => false
// "" => false
// "Abhay" => true