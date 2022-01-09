/**
 * @author Nguyen Cong Vinh
 */
import { Parking } from "../entity.parking/Parking";
import { DetailsParkingController } from "../controller/DetailsParkingController";
import { BaseScreenHandler } from "../views.screen/BaseScreenHandler";
import { Configs } from "../utils/Configs";

/**
 * class định nghĩa các attribute và method cho màn hình details parking
 */
class DetailsParkingScreenHandler extends BaseScreenHandler {

    /**
     * phương thức khởi tạo class
     */
    constructor() {
        super();
        this.setBController(new DetailsParkingController());
    }

    /**
     * phương thức lấy ra bãi xe theo id và hiển thị ra màn hình details parking
     */
    public async getParkingById() {
        let data = await this.getBController().getParkingById(this.getReq().body.parkingId);
        this.show(Configs.VIEW_PARKING_PATH, { data });
    }

    // getter và setter
    public getBController(): DetailsParkingController {
        return super.getBController() as DetailsParkingController;
    }
}

export { DetailsParkingScreenHandler };