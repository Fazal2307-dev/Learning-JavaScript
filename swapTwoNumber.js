let readlineSync = require("readline-sync");
let a = Number(readlineSync.question('please Enter Value of a? '));
let b = Number(readlineSync.question('please Enter Value of b? '));
a = a+b;
b = a-b;
a = a-b;
console.log(a);
console.log(b);