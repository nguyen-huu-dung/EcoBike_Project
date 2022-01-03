import { ParkingService } from "../service/ParkingService/ParkingService";
import { Parking } from "../entity.parking/Parking";
import { BaseController } from "./BaseController";

class HomeController extends BaseController {
    
    private parking: Parking;

    constructor() {
        super();
        this.parking = new Parking().setParkingService(new ParkingService());
    }

    public getAllParking() : Promise<Parking[]> {
        return this.parking.getAllParking();
    }

    public searchParking(key: string): Promise<Parking[]> {
        return this.parking.searchParking(key);
    }
}

export { HomeController };

