/**
 * @author Nguyen Cong Vinh
 */
import { ParkingService } from '../service/ParkingService/ParkingService';
import { Parking } from '../entity.parking/Parking';
import { BaseController } from "./BaseController";

class DetailsParkingController extends BaseController {

    private parking : Parking;

    /**
     * Phương thức khời tạo
     */
    constructor() {
        super();
        this.parking = new Parking().setParkingService(new ParkingService());
    }

    /**
     * Phương thức lấy thông tin bãi xe theo ID
     * @param parkingId : ID bãi xe
     * @returns : Parking Or Error
     */
    public getParkingById(parkingId : string) {
        return this.parking.getParkingById(parkingId);
    }

}

export { DetailsParkingController };