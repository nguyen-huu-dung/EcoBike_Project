import { Bike } from "./Bike";
import * as data from '../../assets/db/bike.json';

class CoupleBike extends Bike {

    constructor() {
        super();
    }

    public static getBikeById(bikeId: string) {
        // let bike : any = data.filter((bike) => bike.id === bikeId)[0];
        // const { id, category, barcode, isRented, deposit, licensePlate, rentalPrice, parkingId } = bike;
        // bike = new CoupleBike(id, category, barcode, isRented, deposit, licensePlate, rentalPrice, parkingId);
        // return bike;
    }
}

export { CoupleBike };