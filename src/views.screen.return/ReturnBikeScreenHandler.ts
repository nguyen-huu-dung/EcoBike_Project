import { paymentScreenHandler } from '../routers/index';
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
        const data = await this.getBController().returnBike(this.getReq().body);
        if(!data.error) {
            paymentScreenHandler.setInvoice(data.invoice);
        }
        super.show(Configs.VIEW_PAYMENT_PATH, { ...data,  type: this.getReq().body.type, parkingId: this.getReq().body.parkingId });
    }

    public getBController(): ReturnBikeController {
        return super.getBController() as ReturnBikeController;
    }
}

export { ReturnBikeScreenHandler };