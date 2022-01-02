import { Bike } from "./Bike";

class SingleBike extends Bike {

    constructor(id, category, barcode, isRented, deposit, licensePlate, rentalPrice) {
        super(id, category, barcode, isRented, deposit, licensePlate, rentalPrice);
    }
}

export { SingleBike };