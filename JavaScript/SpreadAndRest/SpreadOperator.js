
// Expands arrays, objects, or strings into individual elements or properties.
// Used for concatenation, copying, or passing arguments.
let arr = [1, 2, 3, 4, 5, 6];

function spread(...args) {
    args.forEach(num => {
        console.log('Num:', num);
    });
}

spread(...arr);

const fruits = ['apple', 'pear', 'plum'];
const berries = ['blueberry', 'strawberry'];
const fruitsAndBerries = [...fruits, ...berries]; // concatenate
console.log(fruitsAndBerries);

// Can add new members to the arrays without actually using push or using a loop
let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies);

let nameOf = 'Saketh';
const arr1 = [...nameOf]
console.log(arr1)

// Copying an object using spread
const car1 = {
    speed: 200,
    color: 'yellow'
}
const car2 = { ...car1 };

car1.speed = 201;

console.log(car1.speed, car2.speed);


// Copying an array into a new one 
const fruits1 = ['apples', 'pears'];
const fruits2 = [...fruits1];
fruits1.pop();
console.log(fruits1, "not", fruits2);