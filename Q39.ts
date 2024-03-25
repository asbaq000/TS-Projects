// Question 39 - City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

// Answer

function city_country(city: string, country: string) {
  return city + ", " + country;
}
let city1 = city_country("Lahore", "Pakistan");
let city2 = city_country("Delhi", "India");
let city3 = city_country("Tokyo", "Japan");

console.log(city1);
console.log(city2);
console.log(city3);
