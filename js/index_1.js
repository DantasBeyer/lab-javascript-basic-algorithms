console.log("i'am ready!");

let hacker1 = 'XXXXaa';
console.log(`The Driver is: ${hacker1}.`);
let hacker2 = 'YYYYaa';
console.log(`The Navigator is: ${hacker2}.`);

if ( hacker1.length > hacker2.length){
  console.log(`The Driver has the longest name, it has ${hacker1.length} characters.`);
}else if ( hacker1.length < hacker2.length){
  console.log(`The Navigator has the longest name, it has ${hacker2.length} characters.`);
}else{
  console.log(`Wow, you both have equally long names, ${hacker2.length} characters.`);
}


