

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
function rps(user,comp){
    if(user === comp) return "Draw";
    if(user === "rock" && comp==="scissor") return "user";
    if(user==="scissor" && comp==="papper") return "user";
    if(user==="papper" && comp==="rock") return "user";

    return "computer";
}


console.log(rps("rock","paper"));