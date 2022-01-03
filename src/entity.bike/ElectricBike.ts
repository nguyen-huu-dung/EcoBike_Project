import { Bike } from "./Bike";
import * as Bikes from "../../assets/db/bike.json";
import * as Electrics from '../../assets/db/electricBike.json';

class ElectricBike extends Bike {

    private battery : number;
    private estimatingTime: number;

    constructor(id, category, barcode, isRented, deposit, licensePlate, rentalPrice, parkingId, battery, estimatingTime) {
        super(id, category, barcode, isRented, deposit, licensePlate, rentalPrice, parkingId);
        this.battery = battery;
        this.estimatingTime = estimatingTime;
    }

    public static getBikeById(bikeId: string): ElectricBike {
        let bike : any = Bikes.filter((bike) => bike.id === bikeId)[0];
        let electric : any = Bikes.filter((bike) => bike.id === bikeId)[0];
        const { id, category, barcode, isRented, deposit, licensePlate, rentalPrice, parkingId } = bike;
        const { battery, estimatingTime } = electric;
        bike = new ElectricBike(id, category, barcode, isRented, deposit, licensePlate, rentalPrice, parkingId, battery, estimatingTime);
        return bike;
    }

    public getBattery() : number {
        return this.battery;
    }

    public setBattery(battery: number) : ElectricBike {
        this.battery = battery;
        return this;
    }

    public getEstimatingTime() : number {
        return this.estimatingTime;
    }

    public setEstimatingTime(estimatingTime: number) : ElectricBike {
        this.estimatingTime = estimatingTime;
        return this;
    }
}

export { ElectricBike };