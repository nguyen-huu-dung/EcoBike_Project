/**
 * @author Dang Tung Lam
 */
import { Configs } from "../utils/Configs";
import { RentBikeController } from "../controller/RentBikeController";
import { BaseScreenHandler } from "../views.screen/BaseScreenHandler";

class RentBikeScreenHandler extends BaseScreenHandler {
    
    /**
     * Phương thức khởi tạo
     */
    constructor() {
        super();
        this.setBController(new RentBikeController());
    }

    /**
     * Phương thức lấy thông tin xe đang thuê và hiện thị ra màn hình
     */
    public async getRentBike() {
        const data = await this.getBController().getRentBike(this.getReq().body.userId);
        this.show(Configs.VIEW_RENT_BIKE_PATH, { data });
    }

    // Getter vs setter
    public getBController(): RentBikeController {
        return super.getBController() as RentBikeController;
    }
}

export { RentBikeScreenHandler };