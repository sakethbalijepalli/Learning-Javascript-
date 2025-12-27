var shoes = 100;
var stateTax = 1.2;

function calc(shoes, stateTax) {
    return shoes * stateTax;
}

var toPay = calc(shoes, stateTax);
console.log(toPay);