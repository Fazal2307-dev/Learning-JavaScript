/* funtion---------------------------------------------------------------------------------------------------------------
what ,why,how
function kisi bhi naam se suru kar skte hain sirf number,symbol,keyword se nhi kar skte
1. function happy(){
//function decleration

console.log("Happy Birth Day")
}
happy();
2. let fun = function(){
//function expression
console.log("Happy Birthday fazal")
}
fun();
ye dono trah se function likh skte hain

// fat arrow fnc
()=>{}
let happy = ()=>{
    
    
}

//parameter vs argument
    function abcd(v1,v2){       v1,v2 ->parameter
    console.log(v1+v2)
    }
    abcd(1,2) --> argument

//
default,rest,spread parameter
defalut parameter->-----------
function add(v1=0,v2=0 ){
console.log(v1+v2);

}
add()-> abhi kuch nhi diya hai parameter m to undefined ,undefined  aur undefined + undefined =NAN 
if you don't want that use default like 0 value for both parameter


rest->---------
function add(...val){
console.log(val);

}
add(1,2,8,9,74,56,14,25,46);
jab argument kai sare hoto hamme utna hi parameter bnana padega isse bachne ke liye hum rest ka use karte hai
agar... function ke parameter space mein lage to vo rest operator hai aur agar vo array ya object m ho to vo spread operator hai


return ->--------------------
return matlab janha se aaya hai wanhi jaao
function abcd(){
return 12;
}
abcd();


first class function->------------------------------------
function ko value ki trah use kar skte hain jaise
function abcd(val){
val();
}
abcd(function(){
console.log("Hey";)
})



















*/
