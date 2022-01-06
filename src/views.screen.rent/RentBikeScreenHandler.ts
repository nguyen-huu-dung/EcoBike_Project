import { Configs } from "../utils/Configs";
import { RentBikeController } from "../controller/RentBikeController";
import { BaseScreenHandler } from "../views.screen/BaseScreenHandler";

class RentBikeScreenHandler extends BaseScreenHandler {
    
    constructor() {
        super();
        this.setBController(new RentBikeController());
    }

    public async getRentBike() {
        const data = await this.getBController().getRentBike(this.getReq().body.userId);
        this.show(Configs.VIEW_RENT_BIKE_PATH, { data });
    }

    public getBController(): RentBikeController {
        return super.getBController() as RentBikeController;
    }
}

export { RentBikeScreenHandler };