// Question 3 - Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

// Answer

let personName2 = "Asbaq Sajjad";

console.log("Name In Upper Case Is : " + personName2.toUpperCase());
console.log("Name In Lower Case Is : " + personName2.toLowerCase());

function toTitleCase(str: string): string {
  return str.replace(/\b\w/g, (c: string) => c.toUpperCase());
}

console.log("Name in Title Case: " + toTitleCase(personName2));
