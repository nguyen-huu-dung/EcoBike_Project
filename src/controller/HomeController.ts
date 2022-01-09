/**
 * @author Do Minh Hoang
 */
import { ParkingService } from "../service/ParkingService/ParkingService";
import { Parking } from "../entity.parking/Parking";
import { BaseController } from "./BaseController";

class HomeController extends BaseController {
    
    private parking: Parking;
    /**
     * Phương thức khởi tạo
     */
    constructor() {
        super();
        this.parking = new Parking().setParkingService(new ParkingService());
    }

    /**
     * Phương thức lấy thông tin của tất cả bãi xe
     * @returns Parking[] Or Error
     */
    public getAllParking() {
        return this.parking.getAllParking();
    }

    /**
     * Phương thức lấy tất cả thông tin của bãi xe phù hợp với điều kiện tìm kiếm
     * @param key : Tên bãi xe
     * @returns Parking[] Or Error
     */
    public searchParking(key: string) {
        return this.parking.searchParking(key);
    }
}

export { HomeController };

