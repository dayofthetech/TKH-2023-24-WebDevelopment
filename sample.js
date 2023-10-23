/* Using if..else, write the code which gets a number via prompt
and then shows in alert:

1, if the value is greater than zero,
-1, if less than zero,
0, if equals zero.
In this task we assume that the input is always a number. */

// driver - Alberto
// Kehinde - navigator
// Mahamad - navigator

const prompt = require("prompt-sync")({ sigint: true });
const age = prompt("How old are you? ");
console.log(`You are ${age} years old.`);