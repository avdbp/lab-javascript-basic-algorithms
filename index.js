// Iteration 1: Names and Input

// Iteration 1: Names and Input
// 1.1 Create a variable hacker1 with the driver's name.
// 1.2 Print "The driver's name is XXXX".
// 1.3 Create a variable hacker2 with the navigator's name.
// 1.4 Print "The navigator's name is YYYY".

let hacker1 = "Alejandro";
console.log(`The driver's name is ${hacker1}.`);

let hacker2 = "Camila";
console.log(`The navigator's name is ${hacker2}.`)

// Iteration 2: Conditionals

// Iteration 2: Conditionals
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.

if(hacker1.length > hacker2.length) {
    console.log(`The driver has the longer name, it has ${hacker1.length}.`);
}
else if(hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length}.`);
}
else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`);
}


// Iteration 3: Loops

// 3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".

// 3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".

// 3.3 Depending on the lexicographic order of the strings, print:

// The driver's name goes first.
// Yo, the navigator goes first, definitely.
// What?! You both have the same name?

let hacker1UpperCase = hacker1.toUpperCase();
let hacker1UpperCaseSeparate = "";
for(let i = 0; i < hacker1UpperCase.length; i++){
    hacker1UpperCaseSeparate = hacker1UpperCaseSeparate + hacker1UpperCase[i] + " ";
}
console.log(hacker1UpperCaseSeparate);

let hacker2Reverse = "";
for(let i = hacker2.length - 1; i >= 0; i--) {
  hacker2Reverse = hacker2Reverse + hacker2[i];
}
console.log(hacker2Reverse);

