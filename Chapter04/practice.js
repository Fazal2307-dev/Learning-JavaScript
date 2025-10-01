

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

function getVal(val){
    if(val<100) return "A";
    else if(val<75) return "B";
    else if(val<65) return "C";
    else return "D";

}
console.log(getVal(76));