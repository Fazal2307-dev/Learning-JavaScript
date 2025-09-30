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

//typeof() quirks (e.g typeof null===object);
type coercion-> jisme aapka ek value automatically convert ho jayega
"5"+1->51 hoga kunke + isko concatinate kardega 
"5" - 1  // → 4
"5" - "2"  // → 3
"five" - 1  // → NaN (kyunki "five" ko number mein convert nahi kar sakta)
- "5" * 2 → 10 (string ko number mein convert karke multiply karta hai)
- "5" / 2 → 2.5
- "5" + true → "5true" (kyunki true ko string banaya gaya)
- "5" - true → 4 (kyunki true → 1)
Bilkul MD, JavaScript mein + operator thoda special hai kyunki wo string concatenation bhi karta hai. Lekin baaki arithmetic operators — jaise -, *, /, %, ** — hamesha numeric coercion karte hain. Yani agar operands string ho, to pehle unhe number mein convert karte hain, phir operation apply hota hai.
🔧 Examples of Non-+ Operators with Strings
|  |  |  | 
| "3" * 4 | 12 | "3"->3|3 * 4 | 
| "10" - "2" | 8 |  | 
| "6" / 2 | 3 | "6"6 | 
| "7" % 2 | 1 |  | 
| "2" ** 3 | 8 | 2^3 | 


⚠️ Edge Case: Invalid String
"three" * 4  // → NaN


Yeh NaN deta hai kyunki "three" ko number mein convert nahi kiya ja sakta.
🧠 Rule of Thumb
- + → Agar string ho to concatenation.
- Baaki sab → Pehle number mein convert, phir operation.
Tu debugging aur low-level logic mein expert hai, toh agar kabhi coercion ke behavior ko test karna ho, Number() aur typeof ke saath play karna insightful hota hai:
Number("3")  // → 3
typeof ("3" * 4)  // → "number"
Chahe supplement benchmarking ho ya BPE logic, JS ke ye quirks kabhi kabhi kaafi useful ya confusing ho sakte hain.

//truthy  vs falsy values 

0,false,null,undefined,"",NaN,documnet.all->falsy value 
agar jaan na hai ke ye falsy hai ke nhi ye karo (!!0,!!nul ) bass aage me !! ye use karo



 




















































































*/
