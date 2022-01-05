import { ReturnBikeController } from "../controller/ReturnBikeController";
import { BaseScreenHandler } from "../views.screen/BaseScreenHandler";

class InvoiceReturnScreenHandler extends BaseScreenHandler {
    
    constructor() {
        super();
        this.setBController(new ReturnBikeController());
    }

    public async requestToReturnBike() {
        try {
            const listAvailabilityParking = await this.getBController().requestToReturnBike();
        } catch (error) {
            
        }
    }

    public getBController(): ReturnBikeController {
        return super.getBController() as ReturnBikeController;
    }
}

export { InvoiceReturnScreenHandler };