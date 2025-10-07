/*
Object->-------------------------------------------------------
let obj = {
name:"Fazal",
age:24,
email:mdfazal@gmail.com,
eduction:"B.Tech(cse)",
college:"LPU",
};
console.log(obj.name);
console.log(obj['age']);
key value pair->
let obj = {
name:"FAZAL"
}
name - key,
"Fazal"-value

dot vs bracket 
 let obj ={
 name:"FAZAL",
 age:23,
 }
 obj.name;'fazal'
 obj['name];'fazal
 both give you answer

 nesting and deep access->----------------------------------------

const user = {
name:"FAZAL",
Address:{
city:"Patna",
Pincode:803213,
location:{
lat:22.5,
lang:12.87,
     }
  }
}

console.log(user.Address.location.lang)
//destructure
let {lang,lat}=user.address.


// for in

 let obj ={
 name:"FAZAL",
 age:23,
 gmail:"mdfazalbarh@gmail.com"
 }
 for(let key in obj){
 console.log(key)}
Object.keys(obj)
ye object ka key dega in array
['name','age','gmail'] is trah  vo answer dega
Object.entries(obj)
ye show karega arraay of array
like this 
[Array(2),Array(2),Array(2)]
ye isliye  show kar raha hai kunke har array m do value hai key and value name ,and "fazal" ys do hai

using spread operator for copy
let obj = {
name:"Fazal",
age:23,
gmail:"mdfazalbarh@gmial.com"
};
let obj2={...obj}
console.log(obj2);














































*/
