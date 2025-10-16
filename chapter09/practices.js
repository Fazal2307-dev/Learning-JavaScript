// let h1 = document.querySelector("h1");
// h1.addEventListener("click",function(){
//    h1.style.color="red";
// })

// let p = document.querySelector("p");
// p.addEventListener("click",function(){
//     p.style.color="green";
// })

// let p = document.querySelector("p");
// function dobclick(){
//     p.style.color="red";
// }
// p.addEventListener("dblclick",dobclick);
// p.removeEventListener("dblclick",dobclick)

// let inpt = document.querySelector("input");
// inpt.addEventListener('input',function(e){
//     console.log(e);
    
// })
// let inpt = document.querySelector("input");
// inpt.addEventListener("input",function(e){
//     if(e.data !== null){   console.log(e.data);}
      
// })

//on change
// let sel = document.querySelector("select");
// let device = document.querySelector("#device");
// sel.addEventListener("change",function(dets){
//     device.textContent= `You Selected ${dets.target.value}`;
// })
//window
let h1 = document.querySelector("h1");
window.addEventListener("keydown",function(dets){
if(dets.key === " "){
    h1.textContent= "You Typed SPACE"
}else{
    h1.textContent = dets.key;
}
})