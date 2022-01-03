import { ParkingService } from '../service/ParkingService/ParkingService';
import { Parking } from '../entity.parking/Parking';
import { BaseController } from "./BaseController";

class DetailsParkingController extends BaseController {

    private parking : Parking;

    constructor() {
        super();
        this.parking = new Parking().setParkingService(new ParkingService());
    }


    public getParkingById(parkingId : String): Parking {
        try {
            return this.parking.getParkingById(parkingId);
        } catch (error) {
            
        }
    }

}

export { DetailsParkingController };