// The First Assignment
// Replace ? With Arithmetic Operators
console.log(10 * 20 * 15 / 5 % 190 % 10 * 400); // 0

// ------------------------------------------------------

// The 2nd Assignment
let num = 3;
let tr = true;
let fal = false;

// Solution One
console.log(num * ++tr); // 6

// Solution Two
console.log(num + ++tr); // 6

// Soultion Three
console.log(num++ + tr++ + fal++); // 6

// Soultion Four
console.log(num + tr - ++fal); // 6

// Soultion Five
console.log(++num + tr - ++fal); // 6

// Soultion Six
console.log(++num); // 6

// ------------------------------------------------------

// The 3rd Assignment
let numb = "10";
let t = true;
let f = false;

// Solution One
console.log(+numb++ * ++t - f++); // 20 // numb => 11, true => 2
// Solution Two
console.log(+numb * t++ - ++f); // 20 // numb => 11, t => 3, f => 2

// Solution Three
console.log(++numb * f - ++t); // 20 // numb => 12, t => 4, f => 2

// Solution Four
console.log(+numb + t * f); // 20

// ------------------------------------------------------

// The 4th Assignment
let points = 10;
let tru = true;
let fals = false;

// Write Your Code Here
console.log(points + ++tru + ++fals); // 13

// Write Your Code Here
console.log(points - tru); // 8;