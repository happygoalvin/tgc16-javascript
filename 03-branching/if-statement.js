const prompt = require("prompt-sync")();

let password = "rotiprata123";
if (password === "rotiprata123") {
    console.log("login successful!");
} else {
    console.log("Wrong password");
}

let score = 65;
if (score >= 90) {
    console.log("Distinction");
} else if (score >= 80) {
    console.log("A");
} else if (score >= 70) {
    comsole.log("B");
} else if (score >= 60) {
    console.log("C");
} else if (score >= 50) {
    console.log("D");
} else {
    console.log("F");
}

let x = 42;
if (x > 10) {
    console.log("Do something");
}
if (x > 20) {
    console.log("do something else");
}

//WARNING WON'T WORK
if (x=43) {
    console.log("Secret of life is found")
} else {
    console.log("Sorry not found")
}

// x = 43
// ==> x
// ==> 43

let i = parseInt(prompt("Please key in a number"));
if (i%2 === 0) {
    console.log("Even")
} else {
    console.log("Odd")
}


