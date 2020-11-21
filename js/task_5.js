class Car {
    // static getSpecs(car) {
    //     console.log(`maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car._price}`);
    // }
    static getSpecs({ maxSpeed, speed, isOn, distance, _price }) {
        console.log(`maxSpeed: ${maxSpeed}, speed: ${speed}, isOn: ${isOn}, distance: ${distance}, price: ${_price}`);
    }
    constructor(car) {
        this.speed = 0
        this._price = car.price
        this.maxSpeed = car.maxSpeed
        this.isOn = false
        this.distance = 0
    }
    set price(newPrice) { return this._price = newPrice }
    get price() { return this._price }

    turnOn() { return this.isOn = true }
    turnOff() { return this.isOn = false, this.speed = 0 }
    accelerate(value) { if (value + this.speed <= this.maxSpeed) { return this.speed += value } else { return this.speed = this.maxSpeed } }
    decelerate(value) { if ((this.speed - value) <= 0) { return this.speed = 0 } else { return this.speed -= value } }
    drive(hours) { if (this.isOn) { return this.distance += hours * this.speed } }
}



const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
