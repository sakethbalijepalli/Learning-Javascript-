function withDefaultParams(number = 10) {
    console.log('Result:', number * number)
}
withDefaultParams(); // Prints 100 because 10 is the default value and This wont result in NaN
withDefaultParams(5) // prints 25 as we passed 5 as the argument
console.log();


// Conside the below example 

class NoDefaultParams {
    constructor(num1 = 1, num2 = 2, num3 = 3, string1 = 'Result', bool1 = true) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }
    calculate() {
        if (this.bool1) {
            console.log(this.string1, this.num1 + this.num2 + this.num3);
            return;
        }
        return "The value of bool1 is incorrect"
    }
}

var fail = new NoDefaultParams();
console.log(fail.calculate()); 