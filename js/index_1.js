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

// Interaction 3 : Loops

//3.1 solution 1
driver = "john";
/* const formatName = driver.toLocaleUpperCase().split("").join(" ");
console.log(formatName);  */

// solution 2
let separated = " ";
for (let i = 0; i < driver.length; i++) {
  separated += driver[i].toLocaleUpperCase() + " ";
}
console.log(separated.trim());

//3.2
const reverse = driver.split("").reverse().join("");
console.log(reverse);

let reversed = "";
for (let i = driver.length - 1; i >= 0; i--) {
  reversed += driver[i];
}
console.log(reversed);

//3.3
navigator = "matheo";
