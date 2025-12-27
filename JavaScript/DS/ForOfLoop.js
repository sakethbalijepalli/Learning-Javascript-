const car2 = {
    speed: 200,
    color: "red"
}
console.log(Object.keys(car2));
console.log(Object.values(car2));
console.log(Object.entries(car2));
console.log('---------------');

// For-in loop is unreliable as it also prints the props of the prototype. 

const car1 = Object.create(car2);
car1.color = 'blue';
for (prop in car1) {
    console.log(prop);
}
console.log('---------------');

// For-of loop only prints the created or child objects keys/values etc. 
var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for (const key of Object.keys(clothingItem)) {
    console.log(key, ":", clothingItem[key])
}

console.log('---------------');

const shirt = Object.create(clothingItem);
shirt.color = 'blue';

for (const key of Object.keys(shirt)) {
    console.log(key, ":", shirt[key])
}


// Using template literal to print, use backticks and ${}
console.log(`${1 + 1 + 1 + 1} stars!`) // Prints 4 stars!
let multiLine = `Hello
world, how 
are
you?
`
console.log(multiLine);
/*
Hello,
World
!
Is printed below.
*/
console.log(`Hello,
World
!
`)