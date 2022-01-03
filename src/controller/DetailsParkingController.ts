import { ParkingService } from '../service/ParkingService/ParkingService';
import { Parking } from '../entity.parking/Parking';
import { BaseController } from "./BaseController";

class DetailsParkingController extends BaseController {

    private parking : Parking;

    constructor() {
        super();
        this.parking = new Parking().setParkingService(new ParkingService());
    }


    public getParkingById(parkingId : string): Promise<Parking> {
        return this.parking.getParkingById(parkingId);
    }

}

export { DetailsParkingController };