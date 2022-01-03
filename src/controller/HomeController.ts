import { ParkingService } from "../service/ParkingService/ParkingService";
import { Parking } from "../entity.parking/Parking";
import { BaseController } from "./BaseController";

class HomeController extends BaseController {
    
    private parking: Parking;

    constructor() {
        super();
        this.parking = new Parking().setParkingService(new ParkingService());
    }

    public getAllParking() {
        return this.parking.getAllParking();
    }

    public searchParking(key: String): Array<Parking> {
        return this.parking.searchParking(key);
    }
}

export { HomeController };

