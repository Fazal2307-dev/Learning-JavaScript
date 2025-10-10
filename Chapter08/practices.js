// let abcd = document.getElementById("abcd")
// console.dir(abcd);
// let abcd1 = document.getElementsByClassName("abcd1");
// console.dir(abcd1);
// let abcd = document.querySelectorAll("h1");
// console.dir(abcd)

// let h1 = document.querySelector("h1");
// h1.textContent=("hi fazal waht r you doing")

// let a = document.querySelector("a");
// // a.href="https://www.google.com";
// // a.setAttribute("href","https://www.google.com");
// // console.dir(a);

// // console.log(a.getAttribute("href"));
// console.log(a.removeAttribute("href"));

// let h1= document.createElement("h1");
// h1.textContent = "Hey Fazal";
// document.body.append(h1)

// let a = document.createElement("a");
// a.textContent = "https://www.google.com";
// document.body.append(a);

// let h1= document.querySelector("h1");
// // h1.style.color="red";
// // h1.style.backgroundColor="yellow"
// // h1.style.fontFamily="Gilroy"
// // h1.classList.add("hulu")
// h1.classList.remove("hulu");
// h1.classList.toggle("hulu");

//problem set
// //select all <li> element and print their text using a loop
// let lie = document.querySelectorAll("li")
// lie.forEach(function(val){
//     console.log(val.textContent);
// })

//2q.use queryselectorALl to select all button with class buy-now
// let buynow = document.querySelectorAll(".buy-now")
// buynow.forEach(function(val){
//     console.log(val.textContent)
// })
//3q create a new list item <li>New Task</li>and add it to the end of a <ul>
// let ul = document.querySelector("ul");
// let li = c=document.createElement("li");
// li.textContent = "New Task";
// ul.append(li);

//4q  create a new image element with  a placeholder source and add it to top of the div.
let img=document.createElement("img");
img.setAttribute("src",
"https://images.unsplash.com/photo-1759490903008-8cf9a67b7242?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=600)");
document.querySelector("div").prepend(img)