import { ParkingService } from "../service/ParkingService/ParkingService";
import { Parking } from "../entity.parking/Parking";
import { BaseController } from "./BaseController";

class ReturnBikeController extends BaseController {

    private parking : Parking;

    constructor() {
        super();
        this.parking = new Parking().setParkingService(new ParkingService());
    }

    public requestToReturnBike() {
        return this.parking.getAllAvailabilityParking();
    }
}

export { ReturnBikeController };