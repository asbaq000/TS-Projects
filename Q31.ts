// Question 31 - No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

// Answer

let usernames1 = ["Asbaq", "Hadi", "admin", "Ali", "Daniyal", "Shehroze"];

if (usernames1.length > 0) {
  for (let username of usernames1) {
    if (username === "admin") {
      console.log("Hello admin, would you like to see a status report?");
    } else {
      console.log("Hello " + username + ", thank you for logging in again.");
    }
  }
} else {
  console.log("We need to find some users!");
}

usernames1 = [];

if (usernames1.length > 0) {
  for (let username of usernames1) {
    if (username === "admin") {
      console.log("Hello admin, would you like to see a status report?");
    } else {
      console.log("Hello " + username + ", thank you for logging in again.");
    }
  }
} else {
  console.log("We need to find some users!");
}
