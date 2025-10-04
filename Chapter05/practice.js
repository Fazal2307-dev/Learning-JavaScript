// let happy = ()=>{
//     console.log("Fazal");
// }
// happy();

// function sum(v1,v2){
//     console.log(v1 + v2);
// }
// sum(1,2);

// function  dance(v){
//     console.log(`${v} naach raha hai`)

// }
// dance("Fazal");
// dance("Afzal");
// dance("AAdmi");
// dance("Life");

// function add(v1=0,v2=0){

//     console.log(v1+v2);
// }
// add(12,32.5648);

// function abcd(){
// return 12;
// }
// let value= abcd();
// console.log(value);

// function abcd(val){
// val();
// }
// abcd(function(){
// console.log("Hey")
// })

// function abcd(){
//  return function(){
//     console.log("Hey fazal")
//  }}
// abcd()();


// function abcd(){
//  let a=12;
// return function(){
// console.log(a);
// }}

// let hota = abcd();
// hota();

// (function(){
// console.log("FAZAL");
// })();

// abcd();
// function abcd(){
// console.log("Fazal")}

//q1.what is difference b/w function declaration and expression in the terms of hoisiting?
// abcd();
// function abcd(){
//     console.log("fazal");
// }
//  //iska hoisiting hoga 
//  function abcd(){
//     console.log("Fazal");

//  }
//  let val = abcd();
//  console.log(val());
//  //iska hoisiting nhi hoga

//q use rest operator to accept any number of scores and return the total 
 function getScore(...score){
    let total =0;
    score.forEach(function (val){
            total = total + val;
    });
    return total;

 }
 console.log(getScore(10,12,15,78,98));


