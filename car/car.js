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
    driveAsync(distance) {
        return new Promise(resolve => {
            setTimeout(() => {
                this.odometer += distance 
                resolve(distance)
            }, 0)
        })
    }
}

module.exports = Car