//////////////////// Im going to show food and tip calculation using function//////

// function foodTotal (food , tip){
//     tipPercentage = tip/100 ;
//     tipAmount = tipPercentage * food;
//     total = food + tipAmount;
//     return total
// }
// console.log(foodTotal(100,20));
// document.writeln(foodTotal(100,20))

///////////////////////  Arrow Function////////////

const foodTotal = (food , tip) =>{
    tipPercentage = tip/100;
    tipAmount = tipPercentage * food;
    total = food + tipAmount;
    return total

}
console.log(foodTotal(100,20));