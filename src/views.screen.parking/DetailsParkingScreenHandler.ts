import { Parking } from "../entity.parking/Parking";
import { DetailsParkingController } from "../controller/DetailsParkingController";
import { BaseScreenHandler } from "../views.screen/BaseScreenHandler";
import { Configs } from "../utils/Configs";

class DetailsParkingScreenHandler extends BaseScreenHandler {

    constructor() {
        super();
        this.setBController(new DetailsParkingController());
    }

    public async getParkingById(): Promise<void> {
        let parkingInfo : Parking = await this.getBController().getParkingById(this.getReq().body.parkingId);
        this.show(Configs.VIEW_PARKING_PATH, { parkingInfo });
    }

    public getBController(): DetailsParkingController {
        return super.getBController() as DetailsParkingController;
    }
}

export { DetailsParkingScreenHandler };