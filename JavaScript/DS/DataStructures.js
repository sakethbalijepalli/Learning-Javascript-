// Arrays using for each
const fruits = ['kiwi', 'mango', 'apple', 'pear'];
function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex);
console.log('------')

// Another implementation of for each
const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach(function (veggie, index) {
    console.log(`${index}. ${veggie}`);
});
console.log('------')

// Filter method 
const nums = [0, 10, 20, 30, 40, 50];
console.log(nums.filter(function (num) {
    return num > 20;
}))

console.log('------')
// Map method 
console.log(nums.map(function (num) {
    return num / 10
}))

console.log('------')

const result = [];
const drone = {
    speed: 100,
    color: 'yellow'
}
const droneKeys = Object.keys(drone);
droneKeys.forEach(function (key) {
    result.push(key, drone[key])
})
console.log(result)

console.log('------')
// Map implementation

let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);

console.log('------')

// Set implmentation

const repetitiveFruits = ['apple', 'pear', 'apple', 'pear', 'plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);