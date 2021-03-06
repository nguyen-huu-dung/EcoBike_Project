import { SQLException } from "../common.exception/SQLException";
import { Bike } from "./Bike";

class ElectricBike extends Bike {

    private battery : number;
    private estimatingTime: number;

    constructor() {
        super();
    }

    public async getBikeById(bikeId: string) {
        try {
            const bike = await this.bikeServiceInterface.getBikeById(bikeId);
            const newBike : Bike = new ElectricBike()
                                        .setId(bike.id)
                                        .setCategory(bike.category)
                                        .setBarcode(bike.barcode)
                                        .setIsRented(bike.isRented)
                                        .setDeposit(bike.deposit)
                                        .setLicensePlate(bike.licensePlate)
                                        .setRentalPrice([bike.rentalPrice1, bike.rentalPrice2, bike.rentalPrice3])
                                        .setParkingName(bike.name)
                                        .setParkingId(bike.parkingId)
                                        .setBikeServiceInterface(this.bikeServiceInterface);
            return newBike;
        } catch (error) {
            return new SQLException().getError();
        }
    }

    public async updateIsRentedBikeById(bikeId : string, value : number) {
        try {
            const updateBike = await this.bikeServiceInterface.updateIsRentedBikeById(bikeId, value);
            return updateBike;
        } catch (error) {
            
        }
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