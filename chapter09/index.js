/*
browser mein page par koi harkat karo event raise ho jayega 
event matlab hota hai koi action hua 
event listener ka matlab hai ke aapne koi action ka reaction diya 

let h1 = document.querySelector("h1");
h1.addEventListener("click",function(){
   h1.style.color="red";
})
   1.select the tag or element first for using querySelector than
   use addEventListener, addEventListener use two thing first ("click",function(){
   then use style.color=""})

if we want to use .removeEventListener to hame addEventListener ke fnction ko bahar bna padega
jaise 
let p= document.addEventListener("p");
function dobclick(){
p.style.color="red";
}
p.addEventListener("dblclick",dobclick);
is trah se use karte hai aur chahe to .removeEventListener laga skte hain

let inpt = document.querySelector("input");
inpt.addEventListener("input",function(e){
    if(e.data !== null){   console.log(e.data);}

maine ek input field banaya mai chata hun ke jo bhi mai type karun vo console mein dikhe 
uske liye jab addEventListener lagaya hun usme function val pass jo console mein print karein
*/
