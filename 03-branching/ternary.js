const prompt = require("prompt-sync")();

//unary - operator that works with one clause
let x = 3;
x++; // => x + 1
console.log("x after x++ =", x);

// binary operators
console.log(3+3);

//ternary operator
// <expression> ? <do this if true> : <otherwise do this>
let number = parseInt(prompt("Number please: "));

// => assume user enters -5
number = number > 0 ? number : 0
// => number = -5 > 0 ? -5 : 0
// => number = false ? -5 : 0
// => number = 0


if (number % 2 == 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

// do it once more, with ternary operators
number % 2 == 0 ? console.log("even") : console.log("odd");
console.log(number % 2 == 0 ? "Even" : "Odd");
// assuming number is 5
// => console.log( 5%2 == 0 ? "Even" : "Odd")
// => console.log(false ? "Even" : "Odd")
// => console.log("Odd");

alphabet = "A";
console.log (alphabet == "A" ? "apple" : alphabet == "B" ? "banana" : "not recognised")

