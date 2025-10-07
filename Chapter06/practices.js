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

// let arr =[
// {id:1, key:1},
// {id:2,key:2},
// {id:3,key:1}
// ]
// let newarr = arr.find(function(val){
// return val.key ===1;
// })
// console.log(newarr);

// let arr= [12,45,95,98,98];
// let newarr= arr.some(function(val){
// return val>90})
// console.log(newarr);

// let arr = [12,45,78,23,56];
// let eve = arr.every(function(val){
// return val>12});
// console.log(eve);
// let arr = [1,2,3,5,6,8];
// let [a,b,,d] =arr;
// console.log(a);
// console.log(b);
// console.log(c)

// let arr=[10,45,78,65];
// let newArr = [...arr]
// console.log(newArr);
// console.log(newArr.pop())
// console.log(newArr);
//practice question->-------------------------------
//1.use .reduce() to find sum of aarray
// let arr = [10,12,45,89];
// let sum = arr.reduce(function(accumulator,val){
//     return accumulator+ val;
// },0)
// console.log(sum);

//2.use find() to get first number less than 10;
// let arr = [10,3,45,1,78,];
// let newarr = arr.find(function(val){
//     return  val<10;
// })
// console.log(newarr);

//3.use some() to check if there is student score less than 35;
// let arr = [10,78,98,23,56];
// let newarr = arr.some(function(val){
//     return val<35;
// })
// console.log(newarr);

//4.use every() to check if all number are even
// let arr = [2,4,6,9,10];
// let newarr = arr.every(function(val){
//     return val % 2===0;
// })
// console.log(newarr);

//5.merge two array using spread operator
// let arr1=[12,21.3,98,23];
// let arr2= [4,56,78,65];
// let arr3 =  [...arr1,...arr2];
// console.log(arr3);

//6.add "india" to start of the array using spread ;
// let contries = ["USA","England"];
// let newarr = contries=["INDIA",...contries];
// console.log(newarr);
//7. clone this arrry propeerly(not reference);
// let arr=[12,45,89,65];
// let newarr = [...arr];
// console.log(newarr);