/*
data types:-1.primitive,2.Reference
1.Primitive->aisi saree value jinko copy karne par tumhe ek real copy  mil jaaye
string,number,boolean,null,undefined,symbol,bigint are primitive value;
let  a=12;
let b=a;
 a= a+2;
 to ab a ki value 14 hogi aur b ki abhi bhi 12 hai


2.Refrence->inko copy karne par real copy nahi milegi but aapko refrence milega parent ka 
(array,object ,function are refernce value )
array->[],object->{},function->() ka ye symbol hota hai
let a =[1,2,3];
let b=a;
b.pop() karenge to dono m change hoga na ke sirf first wale m
agar mujhe chahiye ke copy karke krun tu mujhe spread() ka use karna hoga

string->
''->single quotes
" "->double quotes
` `->backtick

null-> aap ne jaan bhuj kar koi value nhi di
let selectedStudent=null;


undefined->aapne ek varible bnaya aur usey value nhi di to jo value by default mili vo undefined hai
let a;
undefined ->vo value aapko js engine se milti hai 
null-> jo aap dete ho


symbol-> unique immutable(change nhi hone wala) value

bigint->ek baade value ke liye 
let a = 9007199254741003n


reference type->--------------------------------------------------------------------------------------
let a=[],{},()-inme se koi bhi dikh gaya vo reference type hai
let a = [1,2,3];
let b=a;
b.pop(); to hoga both mein change 

dynamic typing ->js mein static typing nhi hai ynha par hai dynamic typing jiska matlab hai aap data ko chnage karskte ho
kunki ynha par dynamic typing hai.

let a=12;
a=true;
a=[];
a={}
mai kuch bhi skta hun because of dynamic value  or yhi js ka drwaback bhi hai.
Dynamic Typing: Pros & Cons
✅ Pros
- Flexibility: Rapid prototyping ke liye perfect hai. Jaldi se kuch try karna ho toh JS rukawat nahi daalta.
- Less boilerplate: Type declarations ki zarurat nahi hoti, code concise hota hai.
❌ Cons
- Runtime errors: Type mismatch ki wajah se bugs aate hain jo compile time par pakde nahi jaate.
- Maintainability issues: Bade codebase mein samajhna mushkil ho jata hai ki variable kis type ka hai.
- Tooling limitations: IDEs aur linters ko type inference mein dikkat hoti hai.
🛡️ Solution: TypeScript
Agar tumhe static typing chahiye toh TypeScript ek solid option hai. Ye JavaScript ka superset hai jo compile time par type errors detect karta hai:
let a: number = 12;
a = true; // ❌ Error: Type 'boolean' is not assignable to type 'number'


TypeScript tumhare builder mindset ke liye ek asset ho sakta hai — especially jab tum production-grade tools bana rahe ho. Want help converting one of your JS projects to TypeScript? I can walk you through it step-by-step.


static-> static m data change nhi karskte jaise{

int a =12;
a=true ; ye nhi kar skta in static typing 
}



 




















































































*/
