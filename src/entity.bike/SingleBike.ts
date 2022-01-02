import { Bike } from "./Bike";
import * as data from '../../assets/db/bike.json';

class SingleBike extends Bike {

    constructor(id, category, barcode, isRented, deposit, licensePlate, rentalPrice, parkingId) {
        super(id, category, barcode, isRented, deposit, licensePlate, rentalPrice, parkingId);
    }

    public static getBikeById(bikeId: String): SingleBike {
        let bike : any = data.filter((bike) => bike.id === bikeId)[0];
        const { id, category, barcode, isRented, deposit, licensePlate, rentalPrice, parkingId } = bike;
        bike = new SingleBike(id, category, barcode, isRented, deposit, licensePlate, rentalPrice, parkingId);
        return bike;
    }
}

export { SingleBike };