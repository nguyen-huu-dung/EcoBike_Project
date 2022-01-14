/**
 * @author Nguyen Huu Dung, Dang Tung Lam
 */
import { BaseController } from "./BaseController";
import { SingleBikeService } from "../service/BikeService/SingleBikeService";
import { CoupleBikeService } from "../service/BikeService/CoupleBikeService";
import { ElectricBikeService } from "../service/BikeService/ElectricBikeService";
import { Invoice } from "../entity.invoice/Invoice";
import { SingleBike } from "../entity.bike/SingleBike";
import { CoupleBike } from "../entity.bike/CoupleBike";
import { ElectricBike } from "../entity.bike/ElectricBike";
import { paymentScreenHandler } from "../routers";
import { InvoiceService } from "../service/InvoiceService/InvoiceService";
import { User } from "../entity.user/User";
import { UserService } from "../service/UserService/UserService";
import { NoRentBikeException } from "../common.exception/NoRentBikeException";
import { BikeService } from "../service/BikeService/BikeService";
import { Bike } from "../entity.bike/Bike";
import { NormalCalculate } from "../interface.calculate/NormalCalculate";

class RentBikeController extends BaseController {

    private bike;
    private user;
    
    /**
     * Phướng thức khởi tạo
     */
    constructor() {
        super();
        this.user = new User().setUserServiceInterface(new UserService());
    }

    /**
     * Phương thức yêu cầu thuê xe
     * @param bikeId : Id của xe thuê
     * @param userId : Id của user
     * @returns : Invoice Or Error
     */
    public async rentBike(bikeId : string, userId : string) {
        const checkRentedBike = await this.user.checkRentedBike(userId);
        if(checkRentedBike === true) {
            const bike =  await this.bike.getBikeById(bikeId);
            const invoice = Invoice.createInvoice(bike, bike.deposit, new InvoiceService());
            return { invoice,  error: false};
        }
        return checkRentedBike;
    }

    /**
     * Phương thức xác nhận thuê xe
     * @param invoice : Hóa đơn
     */
    public async confirmRentBike(invoice : Invoice) {
        paymentScreenHandler.setInvoice(invoice).requestToPayment();
    }

    /**
     * Phương thức lấy thông tin xe đang thuê
     * @param userId : Id của user
     * @returns: Object chứa thông tin xe đang thuê 
     */
    public async getRentBike(userId: string) {
        const result = await this.user.getRentBikeByUserId(userId);
        if(result.error) return result;
        if(result.bike === null || result.bike === undefined) return new NoRentBikeException().getError();
        this.bike = new Bike().setBikeServiceInterface(new BikeService()).setCalculateRentBikeInterface(new NormalCalculate());
        const { totalRentBike , totalRentTime } = this.bike.calculateRentBike(result.bike.createdAt, [result.bike.rentalPrice1, result.bike.rentalPrice2, result.bike.rentalPrice3]);
        
        return { ...result, totalRentBike , totalRentTime };
    }
    
    // Getter vs Setter
    public setBike(category) {
        switch(category) {
            case "Xe đạp đơn": {
                this.bike =  new SingleBike().setBikeServiceInterface(new SingleBikeService());
                return;
            }
            case "Xe đạp đôi": {
                this.bike = new CoupleBike().setBikeServiceInterface(new CoupleBikeService());
                return;
            }
            case "Xe đạp điện": {
                this.bike = new ElectricBike().setBikeServiceInterface(new ElectricBikeService());
                return;
            }
            default: return
        }
    }
}

export { RentBikeController }