/**
 * @author Dang Tung Lam
 */
import { Configs } from "../utils/Configs";
import { BaseScreenHandler } from "../views.screen/BaseScreenHandler";
import { ReturnBikeController } from "../controller/ReturnBikeController";

class ReturnBikeScreenHandler extends BaseScreenHandler {
    
    /**
     * Phương thức khởi tạo
     */
    constructor() {
        super();
        this.setBController(new ReturnBikeController());
    }


    /**
     * Phương thức lấy thông tin các bãi xe khả dụng và hiển thị ra màn hình
     */
    public async getAllAvailabilityParking() {
        const data = await this.getBController().getAllAvailabilityParking(this.getReq().body.category);
        this.show(Configs.VIEW_RETURN_PATH, { ...data, bikeId: this.getReq().body.bikeId, totalRentBike: this.getReq().body.totalRentBike });
    }
    /**
     * Phương thức gửi yêu cầu trả xe từ phía user
     */
    public async requestReturnBike() {
        this.getBController().returnBike(this.getReq().body);
    }
    // Getter vs setter
    public getBController(): ReturnBikeController {
        return super.getBController() as ReturnBikeController;
    }
}

export { ReturnBikeScreenHandler };