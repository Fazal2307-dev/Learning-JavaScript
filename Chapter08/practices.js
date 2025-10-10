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
//select all <li> element and print their text using a loop
let lie = document.querySelectorAll("li")
lie.forEach(function(val){
    console.log(val.textContent);
})