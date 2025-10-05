//P2 create a reusable discount calculator(hof)
function calculator(discountValue){
    return function(price){
        return price - price *(discountValue / 100);
    }
}

let discount = calculator(10)
console.log(discount(200));
let twentyDiscount = calculator(20);
console.log(twentyDiscount(1500));