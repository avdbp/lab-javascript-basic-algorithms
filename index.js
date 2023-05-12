// Iteration 1: Names and Input
let hacker1 = "Alejandro";
console.log(`The driver's name is ${hacker1}.`);

let hacker2 = "Camila";
console.log(`The navigator's name is ${hacker2}.`)

// Iteration 2: Conditionals
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

