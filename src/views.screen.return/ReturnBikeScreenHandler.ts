import { Configs } from "../utils/Configs";
import { BaseScreenHandler } from "../views.screen/BaseScreenHandler";
import { ReturnBikeController } from "../controller/ReturnBikeController";

class ReturnBikeScreenHandler extends BaseScreenHandler {
    
    constructor() {
        super();
        this.setBController(new ReturnBikeController());
    }

    public async getAllAvailabilityParking() {
        const data = await this.getBController().getAllAvailabilityParking(this.getReq().body.category);
        this.show(Configs.VIEW_RETURN_PATH, { ...data, bikeId: this.getReq().body.bikeId, totalRentBike: this.getReq().body.totalRentBike });
    }

    public async requestReturnBike() {
        this.getBController().returnBike(this.getReq().body);
    }

    public getBController(): ReturnBikeController {
        return super.getBController() as ReturnBikeController;
    }
}

export { ReturnBikeScreenHandler };