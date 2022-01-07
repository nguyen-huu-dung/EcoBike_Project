import { Configs } from "../utils/Configs";
import { Invoice } from "../entity.invoice/Invoice";
import { BaseScreenHandler } from "../views.screen/BaseScreenHandler";
import { PaymentController } from "../controller/PaymentController";
import { InterbankSubsystem } from "../subsystem/InterbankSubsystem";

class PaymentScreenHandler extends BaseScreenHandler {

    private invoice : Invoice;

    constructor() {
        super();
        this.setBController(new PaymentController().setInterbankSubsystem(new InterbankSubsystem));
    }

    public requestToPayment() {
        this.show(Configs.VIEW_PAYMENT_PATH, { type: this.getReq().body.type, parkingId: this.getReq().body.parkingId });
    }

    public async confirmPayment() {
        let response;
        if(this.getReq().body.type === "rent") {
            response = await this.getBController().payment(this.invoice, this.getReq().body);
        }
        if(this.getReq().body.type === "return") {
            response = await this.getBController().refund(this.invoice, this.getReq().body);
            // console.log('refund', response);
            response = await this.getBController().payment(this.invoice, this.getReq().body);
            // console.log('pay', response);
        }
        this.show(Configs.VIEW_RESULT_PATH, { response });
    }

    public setInvoice(invoice : Invoice) : PaymentScreenHandler {
        this.invoice = invoice;
        return this;
    }

    public getBController(): PaymentController {
        return super.getBController() as PaymentController;
    }
}

export { PaymentScreenHandler };