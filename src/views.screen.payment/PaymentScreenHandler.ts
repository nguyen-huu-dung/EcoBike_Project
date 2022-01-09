/**
 * @author Nguyen Huu Dung
 */

import { Configs } from "../utils/Configs";
import { Invoice } from "../entity.invoice/Invoice";
import { BaseScreenHandler } from "../views.screen/BaseScreenHandler";
import { PaymentController } from "../controller/PaymentController";
import { InterbankSubsystem } from "../subsystem/InterbankSubsystem";

/**
 * class định nghĩa các attribute và method cho màn hình paymet
 */
class PaymentScreenHandler extends BaseScreenHandler {

    private invoice : Invoice;

    /**
     * phương thức khởi tạo class
     */
    constructor() {
        super();
        this.setBController(new PaymentController().setInterbankSubsystem(new InterbankSubsystem));
    }

    /**
     * phương thức hiển thị màn hình payment
     */
    public requestToPayment() {
        this.show(Configs.VIEW_PAYMENT_PATH, { type: this.getReq().body.type, parkingId: this.getReq().body.parkingId });
    }

    /**
     * phương thức xác nhận thanh toán
     * Nếu là thanh toán khi thuê xe thì gọi đến payment
     * Nếu là thanh toán khi trả xe thì gọi đến refund và payment
     */
    public async confirmPayment() {
        let response;
        if(this.getReq().body.type === "rent") {
            response = await this.getBController().payment(this.invoice, this.getReq().body);
        }
        else if(this.getReq().body.type === "return") {
            if(this.invoice.getTotalPrice() > this.invoice.getBike().getDeposit()) {
                this.invoice.setTotalPrice(this.invoice.getTotalPrice() - this.invoice.getBike().getDeposit());
                response = await this.getBController().payment(this.invoice, this.getReq().body);
            }
            else {
                this.invoice.setTotalPrice(this.invoice.getBike().getDeposit() - this.invoice.getTotalPrice());
                response = await this.getBController().refund(this.invoice, this.getReq().body);
            }
        }
        this.show(Configs.VIEW_RESULT_PATH, { response });
    }
    
    // Getter vs setter
    public setInvoice(invoice : Invoice) : PaymentScreenHandler {
        this.invoice = invoice;
        return this;
    }

    public getBController(): PaymentController {
        return super.getBController() as PaymentController;
    }
}

export { PaymentScreenHandler };