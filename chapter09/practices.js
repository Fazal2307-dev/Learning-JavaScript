let h1 = document.querySelector("h1");
h1.addEventListener("click",function(){
   h1.style.color="red";
})

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
let inpt = document.querySelector("input");
inpt.addEventListener("input",function(e){
    if(e.data !== null){   console.log(e.data);}
      
})