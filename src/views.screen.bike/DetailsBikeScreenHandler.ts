import { Configs } from "../utils/Configs";
import { RentBikeController } from "../controller/RentBikeController";
import { BaseScreenHandler } from "../views.screen/BaseScreenHandler";
import { Invoice } from "../entity.invoice/Invoice";

class DetailsBikeScreenHandler extends BaseScreenHandler {

    private invoice : Invoice;
    
    constructor() {
        super();
        this.setBController(new RentBikeController());
    }

    public async rentBike() {
        this.getBController().setBike(this.getReq().body.category);
        const data = await this.getBController().rentBike(this.getReq().body.bikeId, this.getReq().body.userId);
        if(!data.error) {
            this.setInvoice(data.invoice);
        }
        super.show(Configs.VIEW_INVOICE_RENT_PATH, { data });
    }

    public async confirmRentBike() {
        this.getBController().confirmRentBike(this.invoice);
    }

    public setInvoice(invoice : Invoice) {
        this.invoice = invoice;
    }

    public getBController(): RentBikeController {
        return super.getBController() as RentBikeController;
    }
}

export { DetailsBikeScreenHandler };