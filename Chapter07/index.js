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
let {lang,lat}=user.address.location















































*/
