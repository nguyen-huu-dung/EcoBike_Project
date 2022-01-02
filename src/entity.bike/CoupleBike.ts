import { Bike } from "./Bike";

class CoupleBike extends Bike {

    constructor(id, category, barcode, isRented, deposit, licensePlate, rentalPrice) {
        super(id, category, barcode, isRented, deposit, licensePlate, rentalPrice);
    }
}

export { CoupleBike };