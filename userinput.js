console.log("hey Md ");

const readlineSync = require('readline-sync');

const userName =  readlineSync.question('May I know your name? ');
console.log(`Welcome, ${userName}!`);

const userAge = readlineSync.question('whats your age! ');

const userAgeNumber = Number(userAge);

if(!isNaN(userAgeNumber)){
    const currentYear = new Date().getFullYear();
    const birthYear = currentYear - userAgeNumber;
    console.log(`you'r born on this ${birthYear}.`);
}
else{
    console.log("please provide correct age?:");
}

