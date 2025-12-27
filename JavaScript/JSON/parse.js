const jsonStr = '{"greeting" : "Hello"}';

const jsonObj = JSON.parse(jsonStr);
console.log(jsonObj);

jsonObj.greeting = "hi";
const editedStr = JSON.stringify(jsonObj);
console.log(editedStr);

class Cake {
    constructor(lyr) {
        this.layers = lyr;
    }

    getLayers() {
        return this.layers;
    }
}

class WeddingCake extends Cake {
    constructor() {
        super(2);
    }

    getLayers() {
        return super.getLayers() * 5;
    }
}

var result = new WeddingCake();
console.log(result.getLayers());



