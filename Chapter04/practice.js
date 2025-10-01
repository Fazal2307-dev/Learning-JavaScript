

// let val = 2;

// Swtich(2) {
//     case 1:
//         console.log("Val 1");
//         break;
//     case 2:
//         console.log("Val 2");
//         break;
//     case 3:
//         console.log("Val 3");
//         break;
//     default:
// }

// function getVal(val){
//     if(val<100) return "A";
//     else if(val<75) return "B";
//     else if(val<65) return "C";
//     else return "D";

// }
// console.log(getVal(76));

// function getGrade(score){
// if(score>=90 && score<=100) return "A+";
// else if(score>=80 && score<=89) return "A";
// else if(score>=70 && score<=79) return "B";
// else if(score>=60 && score<=69) return "C";
// else if(score>=33 && score<=59) return "D";
// else if(score>=0 && score<=32) return "E";
// else return "Invalid marks";


// }
// console.log(getGrade(40));

//rock papper scissor
// function rps(user,comp){
//     if(user === comp) return "Draw";
//     if(user === "rock" && comp==="scissor") return "user";
//     if(user==="scissor" && comp==="papper") return "user";
//     if(user==="papper" && comp==="rock") return "user";

//     return "computer";
// }


// console.log(rps("rock","paper"));

//loop
// let n=10;
// for(let i=1;i<=n;i++){
//     console.log(2*i);
// }

// //while()
// let i=1;
// while(i<=32){
//     console.log(i);
//     i++;
// }

// let i=1;
// do{
//     console.log(i);
//     i++;
// }while(i<=32);

//break
// for(let i=1;i<200;i++){
//     console.log(i);
// if(i===32)
//     break;

// }

// for(let i=1;i<200;i++){
//     if(i===32)
//         continue;
//     console.log(i);
// }


// all question
//q1 print from 1 to 10 using for loop
// for (let i=1;i<=10;i++){
//     console.log(i);
// }

//q2 print number from 10 to 1 using while loop

// for (let i=10;i>=1;i--){
//     console.log(i);
// }
// let i=10;
// while(i>0){
//     console.log(i);
//     i--;
// }

//q3 print even numbers from 1 to 20 using for loop
// for(let i=1;i<=20;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }
//q4 print odd number from 1 to 15 using a while loop
// for(let i=1;i<=15;i++){
//     if(i%3===0){
//         console.log(i);
//     }
// }

// let i=1;
// while(i<=15){
//     if(i%2===1){
//         console.log(i);
//     }
//     i++;
// }

//q5 print the multiplication table of 5 (5*1=2)
// for(let i=1;i<=10;i++){
//     console.log(`5 * ${i} = ${5*i}`);
// }

//q6  find the sum of number from 1 to 100 using loop
let sum =0;
for(let i=1;i<=100;i++){
sum = sum +i;
}
console.log(sum);