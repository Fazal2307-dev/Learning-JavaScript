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

































































































*/