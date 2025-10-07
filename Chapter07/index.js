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

using spread operator for copy->----------------------------
let obj = {
name:"Fazal",
age:23,
gmail:"mdfazalbarh@gmial.com"
};
let obj2={...obj}
console.log(obj2);


Object.assign()->------------------------------
let obj = {
name:"Fazal",
age:23,
gmail:"mdfazalbarh@gmial.com"
};
let obj2 = Object.assign({ isLoggedin:true },obj);
smae like spread operator aur ek naya value daal skte hain

Deep copy->---------------------------------------------
let obj = {
name:"Fazal",
age:23,
gmail:"mdfazalbarh@gmial.com"
Address:{
city:"Patna"
},
};
let obj2 = {...obj}
cosnole.log(obj2) 
to answer same jaise hai waise hi hoga lekin agar main copy wale object address ke city
 ka value change kardun to vo parent wale objet m bhi chnage ho jayega kunke nested reference hota hai  na ke deep copy hotaa hai
 isko puri tah se copy karne ke liye aapko ye karna hoga
 let obj2 = JSON.parse(JSON.stringify(obj));
 JSON.stringify->copy bna kar usko string m chnage kar deta hai
 JSON.parse-> bane hue copied string ko phir se normal value m chnage kar deta hai

 optional chaining->-----------------------------------------------------------------------------------------
let obj = {
name:"Fazal",
age:23,
gmail:"mdfazalbarh@gmial.com"
Address:{
city:"Patna"
},
};
obj?.Address?.city
ye ? isliye likhte hain ki maan lo address ka naam chnage  ho gaya to agar acceass karenge to error isse accha tum undefined do
islye hamlog ye use karte hain

computed properties->---------------------------------

let role = "admin";
let obj = {
name:"Fazal",
age:23,
gmail:"mdfazalbarh@gmial.com"
Address:{
city:"Patna",
},
[role]:"Fazal";
};
















































*/
