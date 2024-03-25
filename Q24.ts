// Question 24 - More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// Answer

// Tests for equality and inequality with strings

let string1 = "hello";
let string2 = "world";
console.log("Is string1 == string2? I predict False.");
console.log(string1 == string2);

let string3 = "hello";
let string4 = "hello";
console.log("Is string3 == string4? I predict True.");
console.log(string3 == string4);

// ------------------------------------------------------------------------------------------------

// Tests using the lowercase function

let upperCaseString = "HELLO";
let lowerCaseString = "hello";

console.log(
  "Is upperCaseString.toLowerCase() == lowerCaseString? I predict True."
);
console.log(upperCaseString.toLowerCase() == lowerCaseString);

// ------------------------------------------------------------------------------------------------

// Numerical tests

let num1 = 10;
let num2 = 5;
console.log("Is num1 > num2? I predict True.");
console.log(num1 > num2);

console.log("Is num1 <= num2? I predict False.");
console.log(num1 <= num2);

// ------------------------------------------------------------------------------------------------

// Tests using "and" and "or" operators

let a = 5;
let b = 10;
let c = 15;
console.log("Is a < b and b < c? I predict True.");
console.log(a < b && b < c);

console.log("Is a < b or b > c? I predict True.");
console.log(a < b || b > c);

// ------------------------------------------------------------------------------------------------

// Test whether an item is in an array

let fruits = ["apple", "banana", "orange"];
let fruitToCheck = "banana";
console.log("Is " + fruitToCheck + " in fruits? I predict True.");
console.log(fruits.includes(fruitToCheck));

// ------------------------------------------------------------------------------------------------

// Test whether an item is not in an array

let numbers = [1, 2, 3, 4, 5];
let numberToCheck = 6;
console.log("Is " + numberToCheck + " not in numbers? I predict True.");
console.log(!numbers.includes(numberToCheck));

// ------------------------------------------------------------------------------------------------
