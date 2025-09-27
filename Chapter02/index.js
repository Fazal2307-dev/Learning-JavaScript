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

static-> static m data change nhi karskte jaise{

int a =12;
a=true ; ye nhi kar skta in static typing 
}



 




















































































*/
