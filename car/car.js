// Build a Car class!
class Car {
    constructor(make, model) {
        this.make = make
        this.model = model
        this.odometer = 0
    }
    drive(distance) {
        const total = distance.reuce((acc, leg) => acc + leg)
        this.odometer += total
        return total
    }
}

module.exports = Car