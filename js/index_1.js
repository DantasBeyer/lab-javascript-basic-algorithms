//remake

console.log("i'am ready!");
// Iteration 1: Names and Input
let hacker1 = "XXXXaa";
console.log(`The Driver is: ${hacker1}.`);
let hacker2 = "YYYYaa";
console.log(`The Navigator is: ${hacker2}.`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The Driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `The Navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker2.length} characters.`
  );
}

// Interation 2 Remaster : Conditionals
if (hacker1.length !== hacker2.length) {
  const longName = hacker1.length > hacker2.length ? "Driver" : "Navigator";
  console.log(`The ${longName} has the longest name`);
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker2.length} characters.`
  );
}
