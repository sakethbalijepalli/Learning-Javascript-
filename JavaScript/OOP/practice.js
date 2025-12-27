
function letterFinder(word, match) {
    for (var i = 0; i < word.length; i++) {
        if (word[i] == match) {
            console.log('Found the', match, 'at', i)
        } else {
            console.log('---No match found at', i);
        }
    }
}
letterFinder("test", "t")

var arr = ['speed', 'color', 'model']

var car = {}
car.speed = 100
car.color = 'blue';
car.model = 'polo';

car.turnKey = function () {
    console.log("Engine is running")
}

car.lightsOn = function () {
    console.log("The lights are on.")
}

function carModel(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(car[arr[i]]);
    }
}
carModel(arr);
car.lightsOn();


console.log(typeof (car.speed))
console.log(typeof (car.speed))

function addTwoNumbers(a, b) {
    try {
        if (typeof (a) != "number") {
            throw new TypeError('The first argument is not a number.');
        } else if (typeof (b) != "number") {
            throw new TypeError('The second argument is not a number.');
        }
        console.log(a + b);
    } catch (err) {
        console.log("Error!", err)
    }
}
addTwoNumbers(5, 5);

function letterFinder(word, match) {
    if (typeof (word) == "string" && typeof (match) == "string") {
        if (word.length >= 2 && match.length >= 1) {
            for (var i = 0; i < word.length; i++) {
                if (word[i] == match) {
                    //if the current character at position i in the word is equal to the match
                    console.log('Found the', match, 'at', i)
                } else {
                    console.log('---No match found at', i)
                }
            }
        }
    }
}

try {
    Number(5).toPrecision(300)
} catch (e) {
    console.log("There was an error")
}

var str = 'Hello'
console.log(str.match(/hello/i)) //use {/xyz/i} as ignoring the case of the string entered. 

console.log(["abc"].concat(["def"]));
var arr = ["abc"]
var arr2 = [["def"]]
console.log(arr + arr2);

