class Vehicle {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk() {
        return 'Beep.'
    }
    toString() {
        let {make, model, year} = this;
        return `The vehicle is a ${make} ${model} from ${year}`;
    }
}

class Car extends Vehicle {
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle {
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 2;
    }
    revEngine() {
        return "VROOM!!!"
    }
}

class Garage {
    constructor(capacity){
        this.capacity = capacity;
        this.vehicles = [];
    }
    add(vehicle) {
        if (this.vehicles.length >= this.capacity){
            return 'Sorry, we\'re full';
        } else if (!Vehicle.prototype.isPrototypeOf(vehicle)){
            return 'Only vehicles are allowed in here!';
        } else {
            this.vehicles.push(vehicle);
            return 'Vehicle added!';
        }
    }
}
