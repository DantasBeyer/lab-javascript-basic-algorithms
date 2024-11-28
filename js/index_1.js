//remake

console.log("i'am ready!");
// Iteration 1: Names and Input
let hacker1 = "XXXXaa";
console.log(`The Driver is: ${hacker1}.`);
let hacker2 = "YYYYaa";
console.log(`The Navigator is: ${hacker2}.`);

// Interation 2 : Conditionals
if (hacker1.length !== hacker2.length) {
  const longName = hacker1.length > hacker2.length ? "Driver" : "Navigator";
  console.log(`The ${longName} has the longest name`);
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker2.length} characters.`
  );
}

// Interaction 3.1 : Loops
driver = "john";
const formatName = driver.toLocaleUpperCase().split("").join("");
console.log(formatName);
