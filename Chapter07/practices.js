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

// let role = "admin";
// let obj = {
// name:"Fazal",
// age:23,
// gmail:"mdfazalbarh@gmial.com",
// Address:{
// city:"Patna",
// },
// [role]:"Fazal",
// };

// console.log(obj);

//practices question->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>----->-----------------..->----------------
//q1.create an object for student with name,age,isEnrolled
// let student = {
// name:"Fazal",
// age:24,
// isEnrolled:true,
// };
// console.log(student);

//q2.can  key be number 
// const obj={
//     name:"Fazal",
//     true:"yes",
//     42:"age",
// };
// console.log(obj);

//q3given a dynamic key let key = "age",how will you access user[key];
// let key = "age";
// let obj={
//     age:26,
//     age:24,
//     age:25,
// };
// console.log(obj[key])

//q4.destructure the key "First-name" as a variable called firstname

// let obj={
//     "First-name":"Fazal"
// }
// let {"First-name":firstName}= obj;
// console.log(firstName);

//q5.use for in  to log all keys in this object 
// const users={
//     title:"JS",
//     duration:4,
// }
// for(let key in users)
//     console.log(key);

//q6.use object.entries() to print all the key-value pairs as:
// const course ={
//     title:"JS",
//     duration:4,
// };
// Object.entries(course).forEach(function(val){
//     console.log(val[0] + ": " + val[1] );
// });

//q7.what's problem in this
// const obj1 = {
//     info:{
//         score:80,
//     }
// }
// const clone = JSON.parse(JSON.stringify(obj1));
// console.log(obj1);
// console.log(clone);
// clone.info.score=100;
// console.log(clone);

// let obj = {
//     name:"fazal"
// }
// Object