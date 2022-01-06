import { PaymentException } from "./PaymentException";

class NotEnoughTransactionInfoException extends PaymentException {
    constructor() {
        super("Không đủ thông tin giao dịch");
    }
}

export { NotEnoughTransactionInfoException };