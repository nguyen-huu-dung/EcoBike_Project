import { Bike } from "./Bike";

class ElectricBike extends Bike {

    private battery : Number;
    private estimatingTime: Number;

    constructor(id, category, barcode, isRented, deposit, licensePlate, rentalPrice, battery, estimatingTime) {
        super(id, category, barcode, isRented, deposit, licensePlate, rentalPrice);
        this.battery = battery;
        this.estimatingTime = estimatingTime;
    }

    public getBikeById(bikeId: String): Object {
        let bike : Object = {};
        return bike;
    }

    public getBattery() : Number {
        return this.battery;
    }

    public setBattery(battery: Number) : ElectricBike {
        this.battery = battery;
        return this;
    }

    public getEstimatingTime() : Number {
        return this.estimatingTime;
    }

    public setEstimatingTime(estimatingTime: Number) : ElectricBike {
        this.estimatingTime = estimatingTime;
        return this;
    }
}

export { ElectricBike };