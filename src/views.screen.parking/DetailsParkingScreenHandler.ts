import { Parking } from "../entity.parking/Parking";
import { DetailsParkingController } from "../controller/DetailsParkingController";
import { BaseScreenHandler } from "../views.screen/BaseScreenHandler";

class DetailsParkingScreenHandler extends BaseScreenHandler {

    constructor(req, res, viewPath) {
        super(req, res, viewPath);
        this.initialize();
    }

    public initialize(): void {
        this.setBController(new DetailsParkingController());
        let parkingInfo : Parking = this.getBController().getParkingById(this.req.query.parkingId);
        console.log(parkingInfo);
        this.setContent({parkingInfo});
        this.show();
    }

    public getBController(): DetailsParkingController {
        return super.getBController() as DetailsParkingController;
    }
}

export { DetailsParkingScreenHandler };