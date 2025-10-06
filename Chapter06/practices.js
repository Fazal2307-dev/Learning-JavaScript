//P2 create a reusable discount calculator(hof)
// function calculator(discountValue){
//     return function(price){
//         return price - price *(discountValue / 100);
//     }
// }

// let discount = calculator(10)
// console.log(discount(200));
// let twentyDiscount = calculator(20);
// console.log(twentyDiscount(1500));

//P3
// function counter(){
//     let count =0;
//     return function(){
//         count++;
//         return count;
//     }

// }
// let c = counter()
// console.log(c())

//p4 use pure function to value
// function add(val){
//     return val+2;

// }
// console.log(add(12))

//p5 use IIFE to isolate variable;
// (
//     function(){
//         const password = "Fazal@2307";
//         console.log(password);
//         let password1 = "fazal2123";
        
//     }
// )();

//p6 incrementation and decrementation in one function
// function counter(){
//     let count =0;
//     return {
//         increment:function(){
//         count++;
//         return count;
//      },
//        decrement: function(){
//          count--;
//          return count;
//      }
//     }
// }
// let c = counter();
// console.log(c.increment());
// console.log(c.decrement());
//Array->-------------------------------------------------------------------------------------------------------------------------
// let arr=[10.54,78,98,45,65,47,];
// console.log(arr[3]);//45
// let arr =[12,45,1,23,78];
// //  arr[3]= 35;
// //  console.log(arr);[12,45,1,35,78]
// let arr =[1,2,5,8,3,9];
// let sr = arr.sort(function(a,b){
// return b-a});
// console.log(sr);

// let arr = [1,4,8,7,56];
// arr.forEach(function(val){
// console.log(val+5);
// })

// let arr = [12,78,56,48,23,13];
// let newArr = arr.map(function(val){
//  if(val>70) return val ;
// })
// console.log(newArr);

// let arr = [1,2,3,4,5,6,7,8,9];
// let newarr = arr.filter(function(val){
// if(val>4) return true;})
// console.log(newarr);

// let arr = [1,4,8,9,7,5];
// let newarr = arr.reduce(function(accumulator,val){
// return  accumulator + val;
// },0)
// console.log(newarr);

let arr =[
{id:1, key:1},
{id:2,key:2},
{id:3,key:1}
]
let newarr = arr.find(function(val){
return val.key ===1;
})
console.log(newarr);