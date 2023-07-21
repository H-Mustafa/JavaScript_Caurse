// 1st Assignment
// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(10 ** 5); // 100000
console.log(1e5); // 100000
console.log(1e2 * 1e3); // 100000
console.log(1e3 / 10e-3); // 100000
console.log(1e4 + 90e3); // 100000
console.log(Math.pow(10, 3+2)); // 100000
console.log(Math.round(99999.5)); // 100000
console.log(Math.ceil(99999.2)); // 100000
console.log(Math.floor(100000.9)); // 100000
console.log(Math.trunc(100000.6454)); // 100000

// 2nd Assignment
console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991

// 3rd Assignment
console.log(Number.MAX_SAFE_INTEGER); // 16

// 4th Assignment
let myVar = "100.56789 Views";

console.log(Number.parseInt(myVar)); // 100
console.log(+Number.parseFloat(myVar).toFixed(2)); // 100.57

// 5th Assignment
