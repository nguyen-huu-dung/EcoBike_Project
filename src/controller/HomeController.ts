import { Parking } from "../entity.parking/Parking";
import { BaseController } from "./BaseController";

class HomeController extends BaseController {
    
    private parking: Parking;

    constructor() {
        super();
        this.parking = new Parking();
    }

    public getAllParking(): Array<Parking> {
        return this.parking.getAllParking();
    }

    public searchParking(key: String): Array<Parking> {
        return this.parking.searchParking(key);
    }
}

export { HomeController };

