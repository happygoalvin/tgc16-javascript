const prompt = require("prompt-sync")();

console.log("3 || 4 => ", 3 || 4);
console.log("0 || 4) =>", 0 || 4);

let name = prompt("enter a name: ");
// if name is empty, set to N/A
name = name || "N/A";
// if user enters "" for name
// name = "" || "N/A"
// name = "N/A"

// if the user enter "ahkow" for name
// name = "ahkow" || "N/A"
// name = "ahkow"

console.log("1 && 2 =>", 1 && 2);
console.log("1 && null =>", 1 && null);

