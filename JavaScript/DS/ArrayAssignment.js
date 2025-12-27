// Task 1
// WRITE YOUR CODE HERE - Create the logDairy function and use a for...of loop to log each item in the dairy array
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];
function logDairy(dairy) {
    for (const values of dairy) {
        console.log(values);
    }
}
logDairy(dairy);

// Task 2
// WRITE YOUR CODE HERE - Create the birdCan function and use a for...of loop to log bird object's own properties
const Animal = {
    canJump: true
};

const bird = Object.create(Animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdcan(bird) {
    for (const key of Object.keys(bird)) {
        console.log(`${key}: ${bird[key]}`);
    }
}
birdcan(bird);

// Task 3
// WRITE YOUR CODE HERE - Create the animalCan function and use a for...in loop to log all bird properties, including inherited ones

function animalCan(bird) {
    for (const prop in bird) {
        console.log(`${prop}: ${bird[prop]}`);
    }
}

animalCan(bird);
