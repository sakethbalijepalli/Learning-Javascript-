var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];
function logDairy(dairy) {
    for (const values of dairy) {
        console.log(values);
    }
}
logDairy(dairy);

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

function animalCan(bird) {
    for (const prop in bird) {
        console.log(`${prop}: ${bird[prop]}`);
    }
}

animalCan(bird);
