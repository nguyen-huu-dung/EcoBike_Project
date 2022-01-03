import { Parking } from "../entity.parking/Parking";
import { DetailsParkingController } from "../controller/DetailsParkingController";
import { BaseScreenHandler } from "../views.screen/BaseScreenHandler";

class DetailsParkingScreenHandler extends BaseScreenHandler {

    constructor(req, res, viewPath) {
        super(req, res, viewPath);
        this.setBController(new DetailsParkingController());
    }

    public async show(): Promise<void> {
        let parkingInfo : Parking = await this.getBController().getParkingById(this.req.query.parkingId);
        this.setContent({parkingInfo});
        this.show();
    }

    public getBController(): DetailsParkingController {
        return super.getBController() as DetailsParkingController;
    }
}

export { DetailsParkingScreenHandler };