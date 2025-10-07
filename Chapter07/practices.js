// let obj = {
// name:"Fazal",
// age:24,
// email:"mdfazal@gmail.com",
// eduction:"B.Tech(cse)",
// college: "LPU",
// }
// console.log(obj.name);
// console.log(obj['age']);

const user = {
name:"FAZAL",
Address:{
city:"Patna",
Pincode:803213,
location:{
lat:22.5,
lang:12.87,
     },
  },
};

// console.log(user.Address.location.lang)
let {lang,lat}=user.Address.location
console.log(lang);