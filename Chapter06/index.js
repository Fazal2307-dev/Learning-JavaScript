/* 
Array->---------------------------------------------------------------------------
 let arr=[10,22,45,78,98,23.5,47];
 arr[3]->78 kunki array start hota hai 0th index se isliye
 there is one more way to write array
 let arr = new Array();
 modefy an array
 let arr =[12,45,1,23,78];
 arr[3]= 35;
 console.log(arr);[12,45,1,35,78]

Array method->---------*********---------++++---
let arr=[12,78,45,65,98];
arr.push(450)->/[12,78,65,98,450] ye hoga 450 last m jud jayega
arr.pop();//450 hat jayega jo bhi last hoga vo hat jayega;
arr.shift()//12 hat jayega means shift ki wjah se first value hat jayega
arr.unshift(2)//[2,12,78,45,65,98] 2 add ho jayega first value m means index 0 m 
arr.splice(2,1)//[2,12,78,45,65,98] 2 ka mtalb 2nd index means 78 se 1 ka matlab kitna val to abhi 1 to sirf 78 hatega to final ans ->[2,12,45,65,98]
let newarr=arr.slice(0,3) ye ek new array m hota hai aapke parent aarray ko nhi chnage karta hai aur 0,3 jo hai oth index se lekar 2nd index tak
means agar tumne arr.slice(0,4) to vo 0 se 3rd tak ka value lega 
arr.reverse()//ye aapke pure array reverse kardega parent array ko 
sorting array in js
let arr =[1,2,5,8,3,9];
let sr = arr.sort(function(a,b){
return a-b});//[1,2,3,5,8,9]
return b-a;//[9,8,5,3,2,1];
for each->-------------------------------
let arr = [1,4,8,7,56];
arr.forEach(function(val){
console.log(val+5);
});
map->------------------------------------
let arr = [12,78,56,48,23,13];
//map sirf tab use karte hain jab aapko naya array bnana hai pichle wala arraay ka data le kar
map dikhte hi dimmag mein ek blank array  bna liya karo
let newArr = arr.map(function(val){
return 12;
})

// jab bhi aapko koi aisa case dikh jaaye ek array se new array banega and wo naya array kuch values ko rakhega tab map lagega
filter()->-------------------------------------------------
let arr = [1,2,3,4,5,6,7,8,9];
let newarr = arr.filter(function(val){
if(val>4) return true;})
console.log(newarr);
filter aur map bhi dono same purane arra se new array   bnaega lkeing differenece ye ke 
map ke parent array jitna value ka hoga utna bnega chahe value undefined hi kun na ho
lekin map aisa nhi hoga hai maan lo tumhare pass parent arr m 1 se lekar 5 value aur tumne condition laga di ke mujhe 
new arr m sirf 3 se bada val chahiye to arr m sirf 4,5 hoga aur wanhi map 1,2,3 ki jagah undefined aata islye ham log filter usse karte hai


reduce()->-------------------
reduce array ke sare vaalue ko jod deta hai jaise 
let arr = [1,4,8,9,7,5];
let newarr = arr.reduce(function(accumulator,val){
return  accumulator + val;
},0)
ynha par accumulator vo kiya karta hai yaad rakhta hai aapke previous value ko accumulator value 0 jab add hoga to value badte chala 
jayega like hum log koi varible bnante the like sum=0 ussi type 

find()->--------------------------------------
find value ko search karta aur agar arr m do similar value hain to  first value ko ladeag

let arr =[
{id:1, key:1},
{id:2,key:2},
{id:3,key:1}
]
let newarr = arr.find(function(val){
return val.key ===1;
})
console.log(newarr);
ynha dekh skte hain ke do id ke similar value hai but vo first id ka hi val dega
some()->-----------------------------------------------------------------
some kiya karta hai ke true ya false value deta hai apne parent ke arr ko check karke 
jaise maan tumne arr bnaya usme ek value hai jo tumhare condition ko match kar raha hai to vo true dega
let arr= [12,45,65,78,98];
let newarr= arr.some(function(val){
return val>90})
console.log(newarr);
to haan true kunke arr m 90 se bada value hai
aur agar do value jo condition se bada hai to bhi true na ke 2 true hoga
every()->-----------------------------------------------------------
let arr = [12,45,78,23,56];
let eve = arr.every(function(val){
return val>12});
console.log(eve);//false
everhy some ka opposite hai matlab aagar ek bhi koi ek bhi  value satisfy nhi karga to fals ho jayega 
jaise ynha val >12  hai aur 12 jo ke nhoi hai isliye pura arr false ho jayega

destructing 
let arr = [1,2,3,5,6,8];
let [a,b,,d] =arr;
a=1,b=2 aur , vo chhod dega 3rd value ko aur d=5 hoga ye islye karte hain arr ke do index value nikalna hai to aap har bar
arr[0],arr[1] ye nhi karn hai isliye destructing karte hain

spread()->----------------
let arr=[10,45,78,65];
let newArr = [...arr]
console.log(newArr);
console.log(newarr.pop())
console.log(newArr);
spread ek newarr m copy kar leta hai apne parent arr ka vaalue to agar hum childern arr ko change karte hain to parent m nhi chnag hota hai



























































































*/