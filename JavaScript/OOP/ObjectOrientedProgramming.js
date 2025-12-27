// Object creation
var purchase1 = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function () {
        var calc = this.shoes * this.stateTax;
        console.log(calc);
    }
};
purchase1.totalPrice();


// Class with a constructor
class Student {
    constructor(rollNo, name, grade) {
        this.rollNo = rollNo;
        this.name = name;
        this.grade = grade;
    }

    getName() {
        console.log("Name of this student ", this.name);
    }

    getStudentGrade() {
        console.log("Student grade ", this.grade);
    }

    getSelf() {
        console.log(this);
    }

    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }

}

// Using class instance as another class's constructor's property
class StationaryBike {
    constructor(position, gears) {
        this.position = position
        this.gears = gears
    }
}

class Treadmill {
    constructor(position, modes) {
        this.position = position
        this.modes = modes
    }
}

class Gym {
    constructor(openHrs, stationaryBikePos, treadmillPos) {
        this.openHrs = openHrs
        this.stationaryBike = new StationaryBike(stationaryBikePos, 8)
        this.treadmill = new Treadmill(treadmillPos, 5)
    }
}

var boxingGym = new Gym("7-22", "right corner", "left corner")

console.log(boxingGym.stationaryBike.gears)