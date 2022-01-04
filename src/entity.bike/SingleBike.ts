import { Bike } from "./Bike";
import * as data from '../../assets/db/bike.json';

class SingleBike extends Bike {

    constructor() {
        super();
    }

    public async getBikeById(bikeId: string) {
        try {
            const bike = await this.bikeServiceInterface.getBikeById(bikeId);
            const newBike : Bike = new SingleBike()
                                        .setId(bike.id)
                                        .setCategory(bike.category)
                                        .setBarcode(bike.barcode)
                                        .setIsRented(bike.isRented)
                                        .setDeposit(bike.deposit)
                                        .setLicensePlate(bike.licensePlate)
                                        .setRentalPrice([bike.rentalPrice1, bike.rentalPrice2, bike.rentalPrice3])
                                        .setParkingName(bike.name);
            return newBike;
        } catch (error) {
            console.log(error);
        }
    }
}

export { SingleBike };