/*
arithmetic,cimparison,logical,assignment,unary,ternary
+,-,*,/,%,**
<,>,<=,>=,!,!=,!==,=,==,===,!!,&&,||,?,:
**->exponantiation
2**3=8

== ->non strict compar
12==13//false
12=="12"//true isliye ke vo sirf value ko dekh raha hai type ko nhi
12==="12"//false ab ye value and type dono ko chek kar raha hai

===->strict comp
!=non strict comp

12!=13//true

!==->strict comparison
12!=="12"//true

+=
-=
*=
let a=12;
a+=12;
means ,a=a+12;

logical-> &&,||,!
&& both side should be true a>=2 && 13<=a
|| minimum one side should be true  a>=2 || 13<=a
!true->false
!false->true
!12 //false hoga kunke 12 ek boolean hai too 12 chage hoga 12->true ,
// !true dega false aur agar ham !!12 likehnge to vo hoga true 


unary->
ek string jo number m convert ho skti hai uske aage + laga dene se vo number m hoga jaise
+"23"->ye 23 ho jayega
lekin agar ye pure string like "FAZAL" hai to iske aage +"FAZAL" lagane se ye NAN dega


ternary operator->
?:
//condition ? true hui ka code : false hui ka code
12>13 ? console.log("TRue") : console.log("False")-> ans false hoga 
12 bada nhi hai 13 se to is par jayega: aur phir vo console.log hoha












*/