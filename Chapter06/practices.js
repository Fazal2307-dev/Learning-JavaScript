//P2 create a reusable discount calculator
function calculator(discountValue){
    return function(price){
        return price - price *(discountValue / 100);
    }
}

let discount = calculator(10)
console.log(discount(200));