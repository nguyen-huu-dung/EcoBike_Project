import { Configs } from "../utils/Configs";
import { RentBikeController } from "../controller/RentBikeController";
import { BaseScreenHandler } from "../views.screen/BaseScreenHandler";
import { Invoice } from "../entity.invoice/Invoice";

class ConfirmRentBikeScreenHandler extends BaseScreenHandler {

    private invoice : Invoice;
    
    constructor() {
        super();
        this.setBController(new RentBikeController());
    }

    public async rentBike() : Promise<any> {
        try {
            this.getBController().setBike(this.getReq().body.category);
            const invoice = await this.getBController().rentBike(this.getReq().body.bikeId);
            this.setInvoice(invoice);
            super.show(Configs.VIEW_CONFIRM_RENT_PATH, { invoice });
        } catch (error) {
            console.log(error);   
        }
    }

    public async confirmRentBike() {
        try {
            this.getBController().confirmRentBike(this.invoice);
        } catch (error) {
            console.log(error);
        }
    }

    public setInvoice(invoice : Invoice) {
        this.invoice = invoice;
    }

    public getBController(): RentBikeController {
        return super.getBController() as RentBikeController;
    }
}

export { ConfirmRentBikeScreenHandler };