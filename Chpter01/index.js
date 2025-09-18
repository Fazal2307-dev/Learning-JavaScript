// word vs keyword
//var let const-keywords
//js mein aaisa words jinse kuch ho skta hai
//word-lolo,fazal,name,
// use let ,const
//don't use var ,var is 
//var-ES5 ka part hai
//var ka use poore programm mmein use ho skta hai 
// just like atm machine agar vo bhul jaye kon ho tum to har bar vo puche ga kon ho tum 
//isliye var ka use karte hain for whole programm.
var name = "fazal";
// ye line no 11 se janhan tak code hai wanha taak valid hai
//declartion & Initialization
// var a; //declartion
// var a=12;//declaration and intialization
//jab bhi variable var se banega ye window m add karega 
//{var functional scoped hota hai means pure function m use hoga even if you have if in your 
// fn and you defined var in if you can use var in whole function.}
//aap phirse declare karskte same name se hain error nhi aayega
// same name variable se agar bnaya hai to var error nhi dega even value change hi kun na kardo
//lekin same name variable se agar bnaya hai to let error daga even tumne value same kun na ho ya different
//const tabhi use kijye jab aapko pata ho value change nhi hone wali hai

// scope(gobal,block,functional):-aapka daira knha tak hai 

//global:- jo {}iske andar nhi hai vo golbal scope 
//{}:-block scope
//var agar block scope m hai tab bhi vo whole program m use hoga
// thik hai tumne kaha ke var ek functional scope hai lekin function to to dikh hi nhi raha hai
// haan lekin code run hoga to var function m jayega ye js engine karti hai jab code run hota hai ye behind the scene ka kaam hai 
// let ek block scope hai ye sirf apne parent m use ho skta hai maan lo {{{let a=12;}}} to let sirf apne nazdik wale scope m hi use hoga 
// {{{
//     let a=90
// }console.log(a);

// }}
// Reassingment and redeclartion
// var a=32;
// a=12;//reassignment
// var a=78;//redeclaration
// console.log(a);
// let b=12;
// b=14;

// console.log(b);

//Temporal Dead Zone:-utna area jitne mein js ko pataa hai ki 
// varible exist karta hai par aaplko value nhi deskta

// console.log(a);//not defined 
// let a=13;//you can't access before initialization
//a ka temporal dead zone line no 1 se 51 tak hai kunke tum usko pahle access nhi kar skte 


// Hoisting  impact per type
//Hoisting->ek varibale ko jab js mein bnate hain to wo vaiable do 
// part mein toot jata hai and uska declare part uppar chala jata 
// hai and uska intialization part neeche rah jata hai
// let see example 

// var a=12;
// var a=undefined;
// a = 12;

// var ->hoist->undefined
// let->hoist->X
//Const->hoist>X

// console.log(a);
// var a=13;//undefinde because ye toote ga do part m first wala var a=undefined ; console.log(a);,then a=13; var ka temporal zone nhi  hota hai

// console.log(b);
// let b=13;//Reference error ye tds hai 

//q1
var a=13;
{
    var a=12;
    
}
console.log(a);//a=12;






