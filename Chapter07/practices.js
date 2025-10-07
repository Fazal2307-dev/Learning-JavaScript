// let obj = {
// name:"Fazal",
// age:24,
// email:"mdfazal@gmail.com",
// eduction:"B.Tech(cse)",
// college: "LPU",
// }
// console.log(obj.name);
// console.log(obj['age']);

// const user = {
// name:"FAZAL",
// Address:{
// city:"Patna",
// Pincode:803213,
// location:{
// lat:22.5,
// lang:12.87,
//      },
//   },
// };

// // console.log(user.Address.location.lang)
// let {lang,lat}=user.Address.location
// console.log(lang);

//  let obj ={
//  name:"FAZAL",
//  age:23,
//  gmail:"mdfazalbarh@gmail.com"
//  }
// //  for(let key in obj){
// //  console.log(key,":",obj[key])}
// console.log(Object.keys(obj));
// console.log(Object.entries(obj));


// let obj = {
// name:"Fazal",
// age:23,
// gmail:"mdfazalbarh@gmial.com",
// Address:{
//     city:"Patna",
// }

// };
// let obj2 = JSON.parse(JSON.stringify(obj))
// console.log(obj);
// console.log(obj2);
// obj2.Address.city="delhi"
// console.log(obj2)

// let obj = {
// name:"Fazal",
// age:23,
// gmail:"mdfazalbarh@gmial.com",
// Addressess:{
// city:"Patna"
// },
// };
// console.log(obj?.Address?.city);

let role = "admin";
let obj = {
name:"Fazal",
age:23,
gmail:"mdfazalbarh@gmial.com",
Address:{
city:"Patna",
},
[role]:"Fazal",
};

console.log(obj);