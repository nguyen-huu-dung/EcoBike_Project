/**
 * @author Nguyen Huu Dung, Dang Tung Lam
 */
import { CreditCard } from "entity.payment/CreditCard";
import { PaymentTransaction } from "entity.payment/PaymentTransaction";
import { InterbankSubsystemController } from "../subsystem.interbank/InterbankSubsystemController";
import { InterbankInterface } from "./InterbankInterface";

class InterbankSubsystem implements InterbankInterface {

    private interbankSubsystemController : InterbankSubsystemController;
    
    /**
     * Phương thức khởi tạo
     */
    constructor() {
        this.interbankSubsystemController = new InterbankSubsystemController();
    }

    /**
     * Phương thức thực hiện thanh toán
     * @param invoice : Hóa đơn
     * @param card : Object chứa thông tin nội dung của trang PaymentScreen
     * @returns : Object chứa thông tin trả về sau khi thanh toán
     */
    public pay(card: CreditCard, amount: number, contents: string) {
        return this.interbankSubsystemController.pay(card, amount, contents);
    }

    /**
     * Phương thức thực hiện hoàn trả
     * @param invoice : Hóa đơn
     * @param card : Object chứa thông tin nội dung của trang PaymentScreen
     * @returns : Object chứa thông tin trả về sau khi thanh toán
     */
    public async refund(card: CreditCard, amount: number, contents: string) {
        return this.interbankSubsystemController.refund(card, amount, contents);
    }
}

export { InterbankSubsystem };