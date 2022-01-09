/**
 * @author Nguyen Huu Dung, Dang Tung Lam
 */
import { paymentScreenHandler } from '../routers';
import { BikeService } from '../service/BikeService/BikeService';
import { ParkingService } from "../service/ParkingService/ParkingService";
import { Parking } from "../entity.parking/Parking";
import { BaseController } from "./BaseController";
import { Bike } from "../entity.bike/Bike";
import { Invoice } from "../entity.invoice/Invoice";
import { InvoiceService } from '../service/InvoiceService/InvoiceService';

class ReturnBikeController extends BaseController {

    private parking : Parking;
    private bike : Bike;
    /**
     * Phương thức khởi tạo
     */
    constructor() {
        super();
        this.parking = new Parking().setParkingService(new ParkingService());
        this.bike = new Bike().setBikeServiceInterface(new BikeService());
    }
    /**
     * Phương thức lấy thông tin các bãi xe còn chỗ trống cho loại xe cần trả
     * @param category : Loại xe
     * @returns : Parking[] Or Error
     */
    public getAllAvailabilityParking(category : string) {
        return this.parking.getAllAvailabilityParking(category);
    }


    /**
     * Phương thức gửi yêu cầu trả xe
     * @param bikeId : Id của xe cần trả
     * @param totalRentBike: Số tiền cần phải thanh toán
     */
    public async returnBike({ bikeId , totalRentBike }) {
        const bike = await this.bike.getBikeById(bikeId);
        // console.log(bike);
        const invoice = Invoice.createInvoice(bike, totalRentBike, new InvoiceService());
        paymentScreenHandler.setInvoice(invoice).requestToPayment();
    }
}

export { ReturnBikeController };