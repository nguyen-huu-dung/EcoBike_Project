import { Bike } from "./Bike";
import * as data from '../../assets/db/bike.json';

class CoupleBike extends Bike {

    constructor(id, category, barcode, isRented, deposit, licensePlate, rentalPrice, parkingId) {
        super(id, category, barcode, isRented, deposit, licensePlate, rentalPrice, parkingId);
    }

    public static getBikeById(bikeId: String): CoupleBike {
        let bike : any = data.filter((bike) => bike.id === bikeId)[0];
        const { id, category, barcode, isRented, deposit, licensePlate, rentalPrice, parkingId } = bike;
        bike = new CoupleBike(id, category, barcode, isRented, deposit, licensePlate, rentalPrice, parkingId);
        return bike;
    }
}

export { CoupleBike };